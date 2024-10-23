import { labResults } from "@/lib/data";
import Image from "next/image";
import { Header } from "../Header";

export const LabResults = () => {
  return (
    <>
      <Header title="Lab Results" className=" my-8" />
      <div className="h-48 overflow-y-scroll px-2">
        {labResults.map((result) => (
          <div key={result} className="flex justify-between">
            <h1>{result}</h1>
            <Image
              className="my-4"
              src="/download.svg"
              width={20}
              height={20}
              alt="download"
            />
          </div>
        ))}
      </div>
    </>
  );
};
