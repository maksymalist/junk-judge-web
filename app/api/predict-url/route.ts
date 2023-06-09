import { NextResponse } from "next/server";
import { client } from "@gradio/client";

const predict = async (url: string) => {
  // turn base64 image into blob

  const response_0 = await fetch(url)
  const exampleImage = await response_0.blob();

  const app = await client("https://maksymalist-junk-judge.hf.space/");
  const result: any = await app.predict("/predict", [
    exampleImage, // blob in 'image' Image component
  ]);

  return result?.data;
};

export async function POST(request: Request) {
  const req = await request.json();
  const { image_url } = req;

  if (!image_url) {
    return NextResponse.error();
  }

  return NextResponse.json({ result: await predict(image_url) });
}
