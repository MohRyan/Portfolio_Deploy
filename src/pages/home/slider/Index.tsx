import React from "react";
import { ISlider, LogoSlider } from "./map";
import "./slider.css";

const Slider = () => {
  return (
    <>
      <div
        className="mt-2 slider"
        style={
          {
            "--height": "50px",
            "--width": "90px",
          } as React.CSSProperties
        }
      >
        <div className="flex text-4xl list">
          {LogoSlider.map((item: ISlider, index: number) => (
            <Icon
              key={index}
              position={item.position}
              icon={item.icon}
              text_color={item.text_color}
            />
          ))}
        </div>
      </div>
      <div
        className="flex text-5xl slider"
        data-reverse="true"
        style={
          {
            "--height": "150px",
            "--width": "150px",
          } as React.CSSProperties
        }
      >
        <div className={`grayscale hover:grayscale-0 list cursor-pointer`}>
          {LogoSlider.map((item: ISlider, index: number) => (
            <Logo
              key={index}
              bg_color={item.bg_color}
              icon={item.icon}
              position={item.position}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;

export const Icon = ({ icon, position, text_color }: ISlider) => {
  return (
    <>
      <div
        className={` cursor-pointer item ${text_color}`}
        style={{ "--position": position } as React.CSSProperties}
      >
        {icon}
      </div>
    </>
  );
};

export const Logo = ({ bg_color, icon, position }: ISlider) => {
  return (
    <>
      <div
        className={`${bg_color} hover:dark:${bg_color}  item w-32 h-32 flex justify-center items-center`}
        style={{ "--position": position } as React.CSSProperties}
      >
        <p className="text-white">{icon}</p>
      </div>
    </>
  );
};
