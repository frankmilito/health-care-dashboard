import { CenterContent } from "@/components/layout/CenterContent";
import { LeftsideBar } from "@/components/layout/leftsideBar";
import Navbar from "@/components/layout/navbar";
import { RightSideBar } from "@/components/layout/rightSideBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f7f8] p-8">
      <Navbar />
      <div className="grid grid-cols-4  h-full gap-4">
        <div className="grid-cols-1">
          <LeftsideBar />
        </div>
        <div className="col-span-2">
          <CenterContent />
        </div>
        <div className="grid-cols-1 ">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}
