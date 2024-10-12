import Posts from "@/components/Posts/Posts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-2 overflow-y-auto scrollbar-none h-full ">
      <Posts />
    </div>
  );
}
