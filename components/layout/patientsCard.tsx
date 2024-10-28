import Image from "next/image";
import { Avatar, AvatarImage } from "../ui/avatar";
import { User } from "@/service/users";

export const PatientsCard = ({ item }: { item: User }) => {
  return (
    <div className="flex justify-between gap-4 mb-6">
      <div className="flex">
        <Avatar className="mr-3">
          <AvatarImage src={item.picture.medium} />
        </Avatar>
        <div className="pr-2">
          <h1 className="font-semibold text-sm">
            {`${item.name.first}  ${item.name.last}`}
          </h1>
          <p className="text-sm text-[#707070] ">
            {item.gender} {item.dob.age}
          </p>
        </div>
      </div>
      <Image src="/moreHorizontal.svg" width={19} height={20} alt="more" />
    </div>
  );
};
