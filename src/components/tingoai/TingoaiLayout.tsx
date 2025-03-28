import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../layouts/navs/GptHeader";
// import SidebarGpt from "../../layouts/navs/SidNavGpt";
// import { historyData } from "../../db/gtptDb";
/**
 * Admin Layout component that wraps the main content of the admin section.
 *
 * This component provides a responsive layout for the admin dashboard, including:
 * - A sidebar that can be toggled on and off for smaller screens.
 * - A header with a button to toggle the sidebar visibility.
 * - The main content area where the page components are rendered through the `Outlet` component from React Router.
 *
 * The sidebar and content area are responsive and adjust based on the screen size.
 *
 * @returns {JSX.Element} The rendered layout with sidebar, header, and content.
 */

const TingoaiLayout: FC = (): JSX.Element => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle function for sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[30rem_1fr] grid-rows-[auto_1fr] h-screen hide-scrollbar bg-[#1D2739]">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      {/* <SidebarGpt
        title="AI"
        historyData={historyData}
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:block absolute lg:relative z-20`}
      /> */}
      <Header toggleSidebar={toggleSidebar} />

      <div className="col-span-1 lg:col-start-2 lg:py-10 overflow-scroll hide-scrollbar">
        <Outlet />
      </div>
    </div>
  );
};

export default TingoaiLayout;
