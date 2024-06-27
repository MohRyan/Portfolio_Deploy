import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
// import React from "react";

const Hero = () => {
  return (
    <>
      <div className="h-96 flex rounded-b-xl bg-white dark:bg-dark relative">
        <div className="h-3 w-3 rounded-full border border-green-500 absolute bottom-5 left-20"></div>
        <div className="h-3 w-3 rounded-full border border-red-500 absolute top-40 right-[500px]"></div>
        <div className="h-3 w-3 rounded-full border border-green-500 absolute bottom-20 left-96"></div>
        <div className="h-3 w-3 rounded-full border border-red-500 absolute bottom-20 right-20"></div>
        <div className="h-3 w-3 rotate-45 border border-blue-500 absolute right-[450px] top-16"></div>
        <div className="h-3 w-3 rotate-45 border border-blue-500 absolute right-[460px] bottom-10"></div>
        <div className="h-3 w-3 rotate-45 border border-blue-500 absolute left-5 top-10"></div>
        <div className="h-3 w-3 rotate-45 border border-blue-500 absolute right-20 top-10"></div>
        <div style={{ flex: 3 }} className="flex justify-center flex-col ml-12">
          <div className="flex">
            <b className="text-4xl dark:text-light">
              I'm Moh Ryan K H <br />
              <span className="text-first hover:text-second">
                .... Stack
              </span>{" "}
              Developer
            </b>
          </div>
          <p className="my-2 w-9/12 dark:text-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            consequatur eum maiores cum ipsa. Soluta nihil enim, corrupti beatae
            nulla autem debitis nesciunt magnam consequatur odio quo aut maxime
            consectetur!
          </p>
          <div>
            <Button className="px-8 flex gap-2 text-textBase">
              HIRE ME <ArrowRight size={20} />
            </Button>
          </div>
        </div>
        <div style={{ flex: 2 }} className="flex">
          <img
            src="https://img.id.my-best.com/product_images/5ca3b281da356f4ce888109b36e3e30f.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=bc458338e149647bc1a41d857f98ccce"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
