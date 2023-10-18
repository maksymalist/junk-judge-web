import MasonImage from "@/components/MasonImage";
import Image from "next/image";
import image_data from "@/data/image_data.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsletterForm from "@/components/NewsletterForm";
import TypedHeader from "@/components/TypedHeader";
import NavBar from "@/components/NavBar";
import Marquee from "react-fast-marquee";

export default async function Home() {
  const shuffle = (array: any): any[] => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const images = shuffle(image_data);
  const row1 = images.slice(0, image_data.length / 2);
  const row2 = images.slice(image_data.length / 2, image_data.length);

  return (
    <div className="mt-4 flex w-full flex-col items-center">
      <NavBar />
      <section className="flex flex-col items-center z-10 p-10 pt-4">
        <TypedHeader />
        <div className="w-full flex lg:flex-row flex-col mb-20">
          <Image
            src="/assets/logo.png"
            alt="Junk Judge"
            className="m-4"
            width={400}
            height={600}
          />
          <NewsletterForm />
        </div>
        <a
          href="https://huggingface.co/spaces/maksymalist/junk-judge"
          className="bg-fuchsia-500 p-4 rounded-full animate-bounce border-black border-4 text-white font-bold"
        >
          Try AI demo 👀
        </a>
      </section>
      <section className="flex flex-col w-full rotate-[5deg] mt-[-150px] bg-slate-900">
        <Marquee
          speed={75}
          autoFill
          direction="left"
          className="flex flex-row justify-evenly"
        >
          {row1.map((image: any) => (
            <MasonImage
              src={image.path}
              key={image.type + image.path}
              type={image.type}
            />
          ))}
        </Marquee>
        <Marquee
          speed={50}
          autoFill
          direction="right"
          className="flex flex-row justify-evenly"
        >
          {row2.map((image: any) => (
            <MasonImage
              src={image.path}
              key={image.type + image.path}
              type={image.type}
            />
          ))}
        </Marquee>
      </section>
      <section className="mt-10"></section>
    </div>
  );
}
