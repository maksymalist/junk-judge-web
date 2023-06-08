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

const predict = async (image_b64: string) => {
  // turn base64 image into blob
  const blob_img = base64toBlob(image_b64, "image/jpeg");
  console.log(blob_img);

  const app = await client("https://maksymalist-junk-judge.hf.space/");
  const result: any = await app.predict("/predict", [
    blob_img, // blob in 'image' Image component
  ]);

  return result?.data;
};

export async function POST(request: Request) {
  const req = await request.json();
  const { image_b64 } = req;

  if (!image_b64) {
    return NextResponse.error();
  }

  return NextResponse.json({ result: await predict(image_b64) });
}
