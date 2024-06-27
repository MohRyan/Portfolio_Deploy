import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const ListMyProject = () => {
  return (
    <>
      <div className="w-72 h-72 flex justify-center bg-white shadow-md shadow-white rounded-md dark:text-dark flex-col items-center">
        <AiOutlineFundProjectionScreen size={140} className="" />
        <b>Web Development</b>
        <p>Blog, E-Commerce</p>
      </div>
    </>
  );
};

export default ListMyProject;
