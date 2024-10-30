import Image from "next/image";
import { Avatar, AvatarImage } from "../ui/avatar";
import { navList } from "@/lib/data";

const Navbar = () => {
  return (
    <div className="hidden md:flex justify-between items-center bg-white rounded-full p-4 mb-6">
      <Image src={"/TestLogo.svg"} alt="logo" width={211} height={48} />
      <ul className="flex gap-5 ">
        {navList.map((item) => (
          <li
            key={item.title}
            className="flex gap-2 hover:transition-colors ease-in-out hover:bg-[#01F0D0] px-4 py-2 rounded-full cursor-pointer "
          >
            <Image
              src={`/${item.imgUrl}.svg`}
              width={15}
              height={15}
              alt={item.title}
            />
            {item.title}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-evenly ">
        <Avatar className="mr-2">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <div className="pr-2 border-r-2 ">
          <h1 className="font-medium text-sm">Dr. Jose Simmons</h1>
          <p className="text-sm text-[#707070] ">General Practitioner</p>
        </div>
        <div className="mx-2">
          <Image src="/settings.svg" width={19} height={20} alt="settings" />
        </div>
        <Image src="/more.svg" width={4} height={20} alt="more" />
      </div>
    </div>
  );
};

export default Navbar;
