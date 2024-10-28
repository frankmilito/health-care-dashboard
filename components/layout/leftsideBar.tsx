"use client";
import Image from "next/image";
import { PatientsCard } from "./patientsCard";
import Card from "../Card";
import { Header } from "../Header";
import { useUsers } from "@/service/users";

export const LeftsideBar = () => {
  const { data, isLoading, isError } = useUsers();
  if (isLoading) {
    return <h1 className="italic text-xs">Loading...</h1>;
  }
  if (isError) {
    return <h1 className="italic">Something went wrong</h1>;
  }
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
      {data?.map((item) => (
        <PatientsCard key={item.cell} item={item} />
      ))}
    </Card>
  );
};
