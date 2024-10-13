import "./globals.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import FeaturedProfile from "../components/Featured/Featured";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen flex">
        <Sidebar />

        <div className="flex flex-col flex-grow">
          <Header />

          <div className="flex flex-grow">
            <div className="flex-1 p-4">{children}</div>
            <FeaturedProfile />
          </div>
        </div>
      </body>
    </html>
  );
}
