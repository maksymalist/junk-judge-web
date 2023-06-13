import { NextResponse } from "next/server";
import {
  listAllItems,
  listItemWithURL,
  getItemURL,
  listAllItemsWithURL,
} from "@/firebase/storage/get";

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
  let images: any[] = [];

  for (const type of TYPES) {
    const imgs = await listAllItems(type);
    images = [...images, ...imgs];
  }

  return NextResponse.json({ result: images });
}

export async function POST(request: Request) {
  const items = await request.json();

  if (!items || items.length === 0) {
    throw new Error("No items");
  }
  let images: any[] = [];

  for (const item of items) {
    const { type, key } = item;
    const img = await listItemWithURL(type, key);
    images.push(img);
  }

  return NextResponse.json({ result: images });
}
