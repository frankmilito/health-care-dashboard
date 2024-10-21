import Image from "next/image";
import React from "react";

export function Profile() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        className="my-4"
        src="/profile.jpg"
        width={200}
        height={200}
        alt="more"
      />
      <h1 className="font-semibold text-lg text-center">Jessica Taylor</h1>
    </div>
  );
}
