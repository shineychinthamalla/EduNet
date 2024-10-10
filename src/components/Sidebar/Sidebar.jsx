// app/components/Sidebar.js
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "Home",
    link: "/home",
  },
];

export default function Sidebar() {
  return (
    <nav className="w-64 h-full bg-gray-100 p-8 border-r border-gray-300">
      <div className="flex flex-col items-center h-full justify-between border-2">
        {/* First container */}
        <div className="w-full h-32 flex justify-center items-center border-2">
          <Image src="/logo1.svg" height={200} width={150} alt="Logo 1" />
        </div>
        <div className="w-full h-10 flex justify-center items-center border-2">
          <Image src="/logo1.svg" height={40} width={40} alt="Logo 2" />
        </div>

        {links.map((ind) => {
          <div className="w-full h-10 flex justify-center items-center border-2">
            <p>{ind.title}</p>
          </div>;
        })}
      </div>
    </nav>
  );
}
