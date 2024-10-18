import Image from "next/image"
import { Avatar, AvatarImage } from "./ui/avatar"


const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
        <Image src={'/TestLogo.svg'} alt='logo' width={211} height={48} />
        <ul className="flex gap-5 cursor-pointer">
            <li>Overview</li>
            <li>Patients</li>
            <li>Schedule</li>
            <li>Message</li>
            <li>Transactions</li>
        </ul>
        <div>
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />

            </Avatar>
        </div>
    </div>
  )
}

export default Navbar