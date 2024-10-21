import Image from "next/image";
import { PatientsCard } from "./patientsCard";
import Card from "../Card";

export const LeftsideBar = () => {
  return (
    <Card>
      <div className="flex justify-between py-2 mb-4">
        <h1 className="font-semibold text-xl">Patients</h1>
        <Image
          className="rotate-90"
          src="/search.svg"
          width={19}
          height={20}
          alt="more"
        />
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <PatientsCard key={item} />
      ))}
    </Card>
  );
};
