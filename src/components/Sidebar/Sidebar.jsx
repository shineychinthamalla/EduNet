// app/components/Sidebar.js
"use client";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FolderIcon from "@mui/icons-material/Folder";
import SettingsIcon from "@mui/icons-material/Settings";
import PhoneIcon from "@mui/icons-material/Phone";
import { usePathname } from "next/navigation";
import Link from "next/link";

const paths = [
  {
    title: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: PersonIcon,
  },
  {
    title: "Networking",
    path: "/networking",
    icon: GroupIcon,
  },
  {
    title: "Opportunities",
    path: "/opportunities",
    icon: WorkOutlineIcon,
  },
  {
    title: "Events",
    path: "/events",
    icon: CalendarMonthIcon,
  },
  {
    title: "Resources ",
    path: "/resources",
    icon: FolderIcon,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: SettingsIcon,
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: PhoneIcon,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-64 h-full bg-gray-100 p-8 border-r ">
      <div className="flex flex-col items-center h-4/5 justify-between ">
        <div className="w-full h-32 flex justify-center items-center ">
          <Image src="/logo1.svg" height={200} width={150} alt="Logo 1" />
        </div>

        {paths.map((ind) => {
          const IconComponent = ind.icon;
          const isActive = pathname === ind.path;

          return (
            <Link
              href={ind.path}
              key={ind.title}
              passHref
              className={`w-full h-10  ${
                isActive ? "bg-gray-300 text-black rounded-lg" : "text-black"
              }`}
            >
              <div
                key={ind.title}
                className="flex justify-start items-center  p-2"
              >
                <IconComponent sx={{ fontSize: 28 }} />
                <p className="ml-2">{ind.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
