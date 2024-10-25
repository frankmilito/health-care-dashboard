import Image from "next/image";
import { Avatar, AvatarImage } from "../ui/avatar";

export const PatientsCard = ({ i }: { i: number }) => {
  return (
    <div className="flex justify-between gap-4 mb-6">
      <div className="flex">
        <Avatar className="mr-3">
          <AvatarImage src={`https://picsum.photos/200/300?random=${i}`} />
        </Avatar>
        <div className="pr-2">
          <h1 className="font-semibold text-sm">Emily Simmons</h1>
          <p className="text-sm text-[#707070] ">Female 18</p>
        </div>
      </div>
      <Image src="/moreHorizontal.svg" width={19} height={20} alt="more" />
    </div>
  );
};
