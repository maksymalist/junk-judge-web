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
      <Badge type={type} />
    </div>
  );
};

export default MasonImage;
