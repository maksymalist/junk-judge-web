import { NextResponse } from "next/server";
import { client } from "@gradio/client";

const base64toBlob = (base64Data: string, contentType: string) => {
  contentType = contentType || "";
  var sliceSize = 1024;
  var byteCharacters = atob(base64Data);
  var bytesLength = byteCharacters.length;
  var slicesCount = Math.ceil(bytesLength / sliceSize);
  var byteArrays = new Array(slicesCount);

  for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    var begin = sliceIndex * sliceSize;
    var end = Math.min(begin + sliceSize, bytesLength);

    var bytes = new Array(end - begin);
    for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
};

const predict = async (images_b64: [string]) => {
  // turn base64 image into blob
  const blob_images = [];

  for (const image_b64 of images_b64) {
    blob_images.push(base64toBlob(image_b64, "image/jpeg"));
  }

  const app = await client("https://51f31746426c381601.gradio.live/");
  const result: any = await app.predict("/predict", [
    ...blob_images, // blob in 'image' Image component
  ]);

  return result?.data;
};

export async function POST(request: Request) {
  const req = await request.json();
  const { image_b64 } = req;

  if (!image_b64) {
    return NextResponse.error();
  }

  const data = await predict(image_b64);

  return NextResponse.json({ result: data });
}
