import React from "react";
import ListMyProject from "./ListMyServices";
import { FaPlus } from "react-icons/fa";

const MyProject = () => {
  return (
    <>
      <div className="w-full relative flex flex-col dark:bg-dark dark:text-light bg-white mt-5 p-4 px-10 rounded-xl">
        <div className="absolute w-14 h-14 flex justify-center items-center bg-first rounded-full right-5 top-5 cursor-pointer">
          <FaPlus size={25} color="white" />
        </div>
        <b className="text-3xl text-center my-5 font-black tracking-wide">
          My Project
        </b>
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim atque
          eveniet quasi aut eligendi molestiae qui perspiciatis sed illo,
          obcaecati ratione facere nostrum impedit ipsam et quas expedita, error
          optio!
        </p>
        <div className="my-4 flex justify-center flex-wrap gap-6">
          <ListMyProject />
          <ListMyProject />
          <ListMyProject />
          <ListMyProject />
          <ListMyProject />
        </div>
      </div>
    </>
  );
};

export default MyProject;
