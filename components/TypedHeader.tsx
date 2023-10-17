"use client";
import React from "react";
import TypewriterComponent from "typewriter-effect";
import Image from "next/image";

type Props = {};

const TypedHeader = (props: Props) => {
  return (
    <h1 className="w-full lg:text-10xl md:text-8xl text-6xl m-0 font-bold">
      <div className="mb-10">
        <Image
          src="/assets/logo.svg"
          alt="trash app logo"
          width={300}
          height={60}
        />
      </div>
      Where{" "}
      <TypewriterComponent
        options={{
          cursor: `<span style="color: lime"}'><</span>`,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              '<span style="background-color: #3ed54b; color: white;">AI</span>'
            )
            .pauseFor(1000)
            .typeString(
              ' sorts your <span style="background-color: #c73cdb; color: white;"> Trash</span>'
            )
            .start();
        }}
      />
      <br />
    </h1>
  );
};

export default TypedHeader;
