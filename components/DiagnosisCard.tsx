import Image from "next/image";
import React from "react";
import Card from "./Card";

export const DiagnosisCard = () => {
  const cardList = [
    {
      title: "Respiratory rate",
      rate: "20 Bpm",
      level: "Normal",
      image: "respiratory rate",
      bg: "#E0F3FA",
    },
    {
      title: "Temperature",
      rate: "98.6 °F",
      level: "Normal",
      image: "temperature",
      bg: "#FFE6E9",
    },
    {
      title: "Heart rate",
      rate: "78 Bpm",
      level: "Lower than Average",
      image: "HeartBPM",
      bg: "#FFE6F1",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 ">
      {cardList.map((item) => (
        <Card style={{ backgroundColor: item.bg }} key={item.title}>
          <Image src={`/${item.image}.svg`} width={95} height={95} alt="" />
          <p className="text-sm mt-4">Respiratory Rate</p>
          <h1 className="font-semibold">20 bpm</h1>
          <p className="text-sm">Normal</p>
        </Card>
      ))}
    </div>
  );
};
