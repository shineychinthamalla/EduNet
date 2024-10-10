import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import FeaturedProfile from "@/components/Featured/Featured";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen flex">
        {/* Sidebar - full height */}
        <Sidebar />

        {/* Main content (Header + children + Featured Profile) */}
        <div className="flex flex-col flex-grow">
          {/* Header at the top */}
          <Header />

          {/* Page content and Featured Profile */}
          <div className="flex flex-grow">
            <div className="flex-1 p-4">{children}</div>
            <FeaturedProfile />
          </div>
        </div>
      </body>
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body> */}
    </html>
  );
}
