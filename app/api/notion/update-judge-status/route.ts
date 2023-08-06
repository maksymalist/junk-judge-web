import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.NOTION_DATABASE_ID_3;

const queryDatabase = async (databaseId: string, id: string) => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Key",
        rich_text: {
          contains: id,
        },
      },
    });
    return response.results[0].id;
  } catch (error: any) {
    console.log(error.body);
  }
};

const createNotionEntry = async (
  id: string,
  is_open: boolean,
  status: string,
  state: string
) => {
  if (!databaseId) {
    throw new Error("Database id is missing");
  }

  const entryData: any = {
    Unlocked: {
      select: {
        name: is_open ? "True" : "False",
      },
    },
    Status: {
      status: {
        name: status,
      },
    },
    State: {
      select: {
        name: state,
      },
    },
  };

  const pageId = (await queryDatabase(databaseId, id)) as any;

  const response = await notion.pages.update({
    page_id: pageId,
    properties: entryData,
  });

  console.log(response);
  console.log("Success! Entry updated.");

  return response;
};

export async function POST(request: Request) {
  const req = await request.json();
  const { id, is_open, status, state, version } = req;

  if (!id || !is_open || !status || !state || !version) {
    return NextResponse.error();
  }

  const res = await createNotionEntry(id, is_open, status, state);
  return NextResponse.json({
    result: res,
  });
}
