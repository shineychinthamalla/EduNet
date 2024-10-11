import Posts from "@/components/Posts/Posts";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" overflow-y-auto p-2 h-full">
      <Posts />
    </div>
  );
}
