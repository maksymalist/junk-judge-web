import React from "react";
import Badge from "./Badge";
import Image from "next/image";

type Props = {
  src: string;
  type:
    | "biological"
    | "trash"
    | "cardboard"
    | "glass"
    | "metal"
    | "paper"
    | "plastic";
};

const MasonImage = (props: Props) => {
  const { src, type } = props;

  return (
    <div className="p-4">
      <Image
        src={`/assets/${src}`}
        placeholder="blur"
        blurDataURL="/assets/images.jpeg"
        alt={type}
        width={200}
        height={200}
        className="rounded-lg w-[200px] h-[200px]"
      />
      <div className="mt-[-30px] ml-2">
        <Badge type={type} />
      </div>
    </div>
  );
};

export default MasonImage;
