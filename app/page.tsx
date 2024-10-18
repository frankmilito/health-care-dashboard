import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar/>
    <div className="flex h-full">
      <h1 className="flex-1 bg-black">left sidebar</h1>
      <h1 className="flex-1 bg-orange-200">main</h1>
      <h1 className="flex-1 bg-blue-50">right sidebar</h1>
    </div>
    </div>
  );
}
