import React from "react";
import Badge from "./Badge";

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
    <div>
      <img className="h-auto max-w-full rounded-lg" src={src} alt={type} />
      <div className="mt-[-30px] ml-2">
        <Badge type={type} />
      </div>
    </div>
  );
};

export default MasonImage;
