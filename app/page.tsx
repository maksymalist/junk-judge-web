import MasonImage from "@/components/MasonImage";
import Image from "next/image";
import images from "@/data/mini-images.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsletterForm from "@/components/NewsletterForm";

export default async function Home() {
  const divider = Math.floor(images.length / 4);
  const col1 = images.slice(0, divider);
  const col2 = images.slice(divider, divider * 2);
  const col3 = images.slice(divider * 2, divider * 3);
  const col4 = images.slice(divider * 3, images.length);

  return (
    <div className="p-10 mt-10 flex w-full flex-col items-center">
      <section className="flex flex-col items-center">
        <h1 className="lg:text-8xl md:text-6xl text-5xl">
          Junk Judge - A place to{" "}
          <span className=" bg-green-400 bg-opacity-50">judge</span> <br />
          <span className=" bg-fuchsia-500 bg-opacity-50">your junk</span>
          . <br />
        </h1>
        <div className="w-full flex lg:flex-row flex-col mb-20">
          <Image
            src="/assets/logo.png"
            alt="Junk Judge"
            width={500}
            height={500}
          />
          <NewsletterForm />
        </div>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4 text-white">
          {col1.map((image: any) => (
            <MasonImage
              src={`https://picsum.photos/${400}/${
                Math.floor(Math.random() * 201) + 200
              }`}
              key={image.key}
              type={image.type}
            />
          ))}
        </div>
        <div className="grid gap-4 mt-10">
          {col2.map((image: any) => (
            <MasonImage
              src={`https://picsum.photos/${400}/${
                Math.floor(Math.random() * 201) + 200
              }`}
              key={image.key}
              type={image.type}
            />
          ))}
        </div>
        <div className="grid gap-4">
          {col3.map((image: any) => (
            <MasonImage
              src={`https://picsum.photos/${400}/${
                Math.floor(Math.random() * 201) + 200
              }`}
              key={image.key}
              type={image.type}
            />
          ))}
        </div>
        <div className="grid gap-4 mt-10">
          {col4.map((image: any) => (
            <MasonImage
              src={`https://picsum.photos/${400}/${
                Math.floor(Math.random() * 201) + 200
              }`}
              key={image.key}
              type={image.type}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
