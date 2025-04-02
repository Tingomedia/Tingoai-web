import { FC } from "react";
import { Outlet } from "react-router-dom";
import { RadioProvider } from "../../contexts/RadioContext";
import { RadioProvider } from "../../contexts/RadioContext";

const RadioLayout: FC = (): JSX.Element => {
  return (
    <RadioProvider>
      <Outlet />
    </RadioProvider>
  );
};

export default RadioLayout;
