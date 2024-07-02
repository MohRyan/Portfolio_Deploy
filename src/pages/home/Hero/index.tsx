import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Random from "./component/Random";
// import React from "react";

const Hero = () => {
    return (
        <>
            <div className="relative flex flex-col w-full py-5 bg-white px-14 lg:px-10 lg:py-10 lg:flex-row rounded-b-xl dark:bg-dark">
                <Random />
                <div className="flex flex-col justify-center gap-5 ">
                    <div className="flex">
                        <b className="text-5xl dark:text-light">
                            I'm Moh Ryan K H <br />
                            <span className="text-first hover:text-second">
                                FullStack
                            </span>{" "}
                            Developer
                        </b>
                    </div>
                    <p className="my-2 lg:text-md dark:text-light lg:w-[560px] xl:w-full xl:pr-20">
                        Hai, perkenalkan nama saya <b>Moh Ryan Khalifatul Huda,</b> seorang full-stack developer. Saya memiliki keahlian dalam mengelola dan mengembangkan aplikasi dari front-end hingga back-end, menciptakan solusi yang tidak hanya estetis tetapi juga fungsional untuk memenuhi kebutuhan klien.<br />
                        <br />
                        Latar belakang saya yang kuat dalam desain identitas merek, grafis pemasaran, dan antarmuka pengguna memberikan saya perspektif unik sebagai full-stack developer. Saya mampu memahami dan mengatasi berbagai tantangan teknis sekaligus memastikan bahwa solusi yang dihasilkan memiliki desain yang menarik dan intuitif.
                    </p>
                    <a href="#contact">
                        <Button className="flex gap-2 px-8 lg:px-20 text-textBase">
                            HIRE ME <ArrowRight size={20} />
                        </Button>
                    </a>
                </div>
                <div className="flex justify-end xl:w-[882px]">
                    <img
                        className="object-cover w-96"
                        src="https://img.id.my-best.com/product_images/5ca3b281da356f4ce888109b36e3e30f.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=bc458338e149647bc1a41d857f98ccce"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

export default Hero;
