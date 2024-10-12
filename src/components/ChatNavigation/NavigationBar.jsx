import React from "react";

const TopNav = ({ activeTab, onTabChange }) => {
  return (
    <nav className="flex items-center justify-start py-4 px-6 bg-white border-b">
      <button
        onClick={() => onTabChange("chat")}
        className={`mr-4 px-4 py-2 rounded-full ${
          activeTab === "chat"
            ? "bg-blue-500 text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        Messages
      </button>
      <button
        onClick={() => onTabChange("forum")}
        className={`px-4 py-2 rounded-full ${
          activeTab === "forum"
            ? "bg-blue-500 text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        Forum
      </button>
    </nav>
  );
};

export default TopNav;
