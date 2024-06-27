import Cv from "@/components/Side/Cv";
import Menu from "@/components/Side/Menu";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export const customTheme = [
  "theme_default default hover:bg-default ",
  "theme_red red hover:bg-red-500  ",
  "theme_blue blue hover:bg-blue-500 ",
  "theme_yellow yellow hover:bg-yellow-300 ",
  "theme_green green hover:bg-green-500 ",
  "theme_orange orange hover:bg-orange-500 ",
];

const RootLayout = () => {
  const [theme, setTheme] = useState<string>("");
  const [dark, setDark] = useState<string>("");
  console.log("🚀 ~ RootLayout ~ theme:", theme);
  return (
    <>
      <div className={`flex w-screen ${theme} ${dark}`}>
        <div style={{ flex: "0.6" }} className="overflow-auto">
          <Cv />
        </div>
        <div style={{ flex: "3" }}>
          <Outlet />
        </div>
        <div style={{ flex: "0.3" }} className="">
          <Menu setTheme={setTheme} setDark={setDark} />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
