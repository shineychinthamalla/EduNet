// app/components/Header.js
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
export default function Header() {
  return (
    <header className=" text-black h-20 flex items-center  px-6  ">
      {/* <h1 className="text-lg border-2">EduNet</h1> */}
      <div className="flex items-center space-x-4  w-2/5 ml-auto justify-evenly">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-300 text-white px-4 py-2 rounded-md focus:outline-none"
        />
        <NotificationsIcon sx={{ fontSize: 28 }} />
        <div className="flex justify-around w-20 ml-auto">
          <PersonIcon sx={{ fontSize: 28 }} />
          <span className="m-auto">Usha</span>
        </div>
      </div>
    </header>
  );
}
