import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../navs/GptHeader";
import SidebarGpt from "../navs/SidNavGpt";
import { historyData } from "../../db/gtptDb";
import { ConversationProvider } from "../../contexts/TingoGPTContext";
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

const GPTLayout: FC = (): JSX.Element => {
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
      <SidebarGpt
        historyData={historyData}
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:block absolute lg:relative z-20 border-r`}
      />
      <Header toggleSidebar={toggleSidebar} />

      <div className="col-span-1 lg:col-start-2 overflow-hidden hide-scrollbar">
        <Outlet />
      </div>
    </div>
  );
};

export default function TingoGPT() {
  return (
    <ConversationProvider>
      <GPTLayout />
    </ConversationProvider>
  );
}
