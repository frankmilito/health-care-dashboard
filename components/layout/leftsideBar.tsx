import Image from "next/image";
import { PatientsCard } from "./patientsCard";
import Card from "../Card";
import { Header } from "../Header";

export const LeftsideBar = () => {
  return (
    <Card>
      <div className="flex justify-between py-2 mb-4">
        <Header title="Patients" />
        <Image
          className="rotate-90"
          src="/search.svg"
          width={19}
          height={20}
          alt="more"
        />
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
        <PatientsCard key={item} i={item} />
      ))}
    </Card>
  );
};
