import MasonImage from "@/components/MasonImage";
import Image from "next/image";
import images from "@/data/images.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsletterForm from "@/components/NewsletterForm";
import TypedHeader from "@/components/TypedHeader";
import Marquee from "react-fast-marquee";

export default async function Home() {
  const getRandomElements = (array: any[], numberOfElements: number) => {
    if (numberOfElements > array.length) {
      throw new Error("Number of elements to select exceeds the array length.");
    }

    const shuffledArray = array.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, numberOfElements);
  };
  const divider = 10;
  const row1 = getRandomElements(images, divider);
  const row2 = getRandomElements(images, divider);

  return (
    <div className="mt-10 flex w-full flex-col items-center">
      <section className="flex flex-col items-center z-10 p-10">
        <TypedHeader />
        <div className="w-full flex lg:flex-row flex-col mb-20">
          <Image
            src="/assets/logo.png"
            alt="Junk Judge"
            className="m-4"
            width={500}
            height={500}
          />
          <NewsletterForm />
        </div>
      </section>
      <section className="flex flex-col w-full rotate-[5deg]">
        <Marquee
          speed={75}
          autoFill
          direction="left"
          className="flex flex-row justify-evenly"
        >
          {row1.map((image: any) => (
            <MasonImage src={image.url} key={image.key} type={image.type} />
          ))}
        </Marquee>
        <Marquee
          speed={50}
          autoFill
          direction="right"
          className="flex flex-row justify-evenly"
        >
          {row2.map((image: any) => (
            <MasonImage src={image.url} key={image.key} type={image.type} />
          ))}
        </Marquee>
      </section>
    </div>
  );
}
