// app/components/Sidebar.js
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="w-64 h-full bg-gray-100 p-8 border-r border-gray-300">
      <div className="flex border-2 h-full justify-center">
        <div className="border-2 w-4/5 h-32"></div>
      </div>
    </nav>
  );
}
