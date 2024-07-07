import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Random from "./component/Random";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import React from "react";

const ImageHero = [
    // {
    //     image: "https://res.cloudinary.com/divsnxhmw/image/upload/v1720274958/Portfolio/Profile/nuzmk8bukmpgm5fp6a1t.png",
    //     slide: 0
    // },
    {
        image: "https://res.cloudinary.com/divsnxhmw/image/upload/v1720336212/Portfolio/Profile/thqgxvt2cdlqt5rnvwyw.png",
        slide: 1
    }
]
const ImagePartner = [
    {
        image: "https://dumbways.id/assets/images/brandred.png",
        url: "https://dumbways.id/"
    }
]

const Hero = () => {
    return (
        <>
            <div className="relative flex flex-col w-full bg-white px-14 lg:px-10 lg:flex-row rounded-b-xl dark:bg-dark">
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
                        <Button className="flex justify-end gap-2 px-8 text-textBase lg:px-20">
                            HIRE ME <ArrowRight size={20} />
                        </Button>
                    </a>
                    <div className="flex flex-col gap-3">
                        <b>Powered By :</b>
                        <div className="flex pl-10">
                            {ImagePartner.map((item, index) => (
                                <a href={item.url}>
                                    <img src={item.image} key={index} className="w-20" alt="" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-end xl:w-[882px]">
                    <Carousel>
                        <CarouselContent>
                            {ImageHero.map((item, index: number) => (
                                <CarouselItem key={index}>
                                    <img
                                        className="object-contain w-96 h-[600px]"
                                        src={item.image}
                                        alt=""
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* <CarouselPrevious />
                        <CarouselNext /> */}
                    </Carousel>

                </div>
            </div>
        </>
    );
};

export default Hero;
