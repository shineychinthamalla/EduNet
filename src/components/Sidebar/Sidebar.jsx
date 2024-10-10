// app/components/Sidebar.js
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="w-64 h-full bg-gray-100 p-5 border-r border-gray-300">
      <ul className="space-y-4">
        <li>
          <Link href="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
        </li>
        <li>
          <Link href="/profile" className="text-gray-700 hover:text-black">
            Profile
          </Link>
        </li>
        {/* Add more items as necessary */}
      </ul>
    </nav>
  );
}
