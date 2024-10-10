// app/components/Header.js
export default function Header() {
  return (
    <header className="bg-gray-800 text-white h-20 flex items-center justify-between px-6">
      <h1 className="text-lg">EduNet</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none"
        />
        <span>Usha</span>
        <img
          src="/path/to/profile/pic"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}
