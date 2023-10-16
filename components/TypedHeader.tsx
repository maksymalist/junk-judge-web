"use client";
import React from "react";
import TypewriterComponent from "typewriter-effect";

type Props = {};

const TypedHeader = (props: Props) => {
  return (
    <h1 className="w-full lg:text-10xl md:text-8xl text-6xl m-0 font-bold">
      Junk Judge - Where{" "}
      <TypewriterComponent
        options={{
          cursor: `<span style="color: lime"}'><</span>`,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('<span style="background-color: #247942"}">AI</span>')
            .pauseFor(1000)
            .typeString(
              ' sorts your <span style="background-color: #762282"}"> Trash</span>'
            )
            .start();
        }}
      />
      <br />
    </h1>
  );
};

export default TypedHeader;
