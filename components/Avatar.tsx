import { Author } from "../contentful/types/types";
import Image from "next/image"; // Import the 'Image' component

export default function Avatar({ name, picture }: Author) {
  return (
    <div className="flex items-center">
      <div className="mr-4 w-12 h-12">
        <Image
          className="rounded-full border-2 border-gray-300 p-[1px]"
          alt=""
          src={picture}
          width={45}
          height={45}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
