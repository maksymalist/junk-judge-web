import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import { v4 } from "uuid";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.NOTION_DATABASE_ID_2 as string;

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  const entryData: any = {
    Date: { date: { start: new Date().toISOString() } },
    Email: { email: email },
    Key: { title: [{ text: { content: v4() } }] },
  };

  const response = await notion.pages.create({
    parent: {
      database_id: databaseId,
    },
    //@ts-ignore
    properties: entryData,
  });

  return NextResponse.json({ result: response });
}
