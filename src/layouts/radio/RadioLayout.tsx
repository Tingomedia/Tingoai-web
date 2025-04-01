import { FC } from "react";
import { Outlet } from "react-router-dom";
import { RadioProvider } from "../../contexts/RadioContext";

const RadioLayout: FC = (): JSX.Element => {
  return (
    <RadioProvider>
      {/* Main Content */}
      <div className="flex-1 overflow-y-hidden hide-scrollbar">
        <Outlet />
      </div>
    </RadioProvider>
  );
};



export default RadioLayout;
