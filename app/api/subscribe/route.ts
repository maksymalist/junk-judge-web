import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import { v4 } from "uuid";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.NOTION_DATABASE_ID;

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
      database_id: "9c910cdb3cd24b19b2112f77e8bbb592",
    },
    //@ts-ignore
    properties: entryData,
  });

  return NextResponse.json({ result: response });
}
