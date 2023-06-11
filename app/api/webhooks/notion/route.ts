import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import { verifySignature } from "@upstash/qstash/nextjs";
import { listAllItems, getItemURL } from "@/firebase/storage/get";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.NOTION_DATABASE_ID;

const sync_type = async (db_keys: string[], type: string) => {
  if (!databaseId) {
    throw new Error("Database id is missing");
  }

  const images = await listAllItems(type);

  for (const image of images) {
    if (!db_keys.includes(image.key)) {
      console.log("adding", image.key);

      const url = await getItemURL(type, image.key);
      const img = await fetch(url);
      const blob = await img.blob();

      const size = blob.size;
      const file_type = blob.type;

      const one_year_from_now = new Date();
      one_year_from_now.setFullYear(one_year_from_now.getFullYear() + 1);

      const file_data = {
        type: "external",
        name: "image",
        external: {
          url: url,
        },
      };

      const entryData: any = {
        Type: {
          select: {
            name: image.type,
          },
        },
        Size: { number: size },
        Status: {
          status: {
            name: "Not started",
            color: "red",
          },
        },
        Link: { url: url },
        "Time Created": { date: { start: new Date().toISOString() } },
        "File Type": { select: { name: file_type } },
        Image: {
          files: [file_data],
        },
        Key: { title: [{ text: { content: image.key } }] },
      };

      const response = await notion.pages.create({
        parent: {
          database_id: databaseId,
        },
        //@ts-ignore
        properties: entryData,
      });

      console.log(response);
      console.log("Success! Entry added.");
    }
  }
};

const TYPES = [
  "trash",
  "biological",
  "plastic",
  "paper",
  "metal",
  "glass",
  "cardboard",
];

export async function GET(request: Request) {
  if (!databaseId) {
    throw new Error("Database id is missing");
  }

  const db_items = await notion.databases.query({
    database_id: databaseId,
  });

  const db_keys = db_items.results.map(
    (item: any) => item?.properties?.Key?.title[0]?.text?.content
  );

  for (const type of TYPES) {
    await sync_type(db_keys, type);
  }

  return NextResponse.json({ result: "success" });
}
