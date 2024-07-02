// import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const MyForm = () => {
    return (
        <>
            <div className="py-10 my-5 bg-white rounded-xl">
                <div className="flex justify-around mb-5 text-2xl">
                    <b>Leave Us Your Info</b>
                    <b>Contact Information</b>
                </div>
                <div className="flex gap-8 px-10">
                    <div className="flex flex-col w-1/2 gap-2">
                        <b>Your Full Name</b>
                        <Input />
                        <b>Your Email</b>
                        <Input />
                        <b>Subject</b>
                        <Input />
                        <b>Your Message</b>
                        <Textarea placeholder="Type your message here." />
                        <div className="flex justify-end my-5">
                            <Button className="flex gap-2 px-8 lg:px-20 text-textBase">
                                Send Message
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 gap-4 ml-10 justify-evenly">
                        <div className="flex justify-start">
                            <ul className="flex flex-col gap-3 font-bold w-52">
                                <li>Country:</li>
                                <li>City:</li>
                                <li>Streat:</li>
                            </ul>
                            <ul className="flex flex-col w-1/2 gap-3">
                                <li>Indonesia</li>
                                <li>Jember</li>
                                <li>Karangrejo Gumukmas Jember</li>
                            </ul>
                        </div>
                        <Separator />
                        <div className="flex justify-start mt-5 ">
                            <ul className="flex flex-col gap-3 font-bold w-52">
                                <li>Email:</li>
                                <li>Linkdn:</li>
                                <li>Telegram:</li>
                            </ul>
                            <ul className="flex flex-col w-1/2 gap-3">
                                <li>ryanmoh735@gmail.com</li>
                                <li><a className="text-blue-500" href="https://www.linkedin.com/in/moh-ryan/">Moh Ryan</a></li>
                                <li>082228872769</li>
                            </ul>
                        </div>
                        <Separator />
                        <div className="flex justify-start mt-5 ">
                            <ul className="flex flex-col gap-3 font-bold w-52">
                                <li>Support Service:</li>
                                <li>Personal:</li>
                            </ul>
                            <ul className="flex flex-col w-1/2 gap-3">
                                <li>15----</li>
                                <li>+62 82228872769</li>
                            </ul>
                        </div>
                        <Separator />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyForm;
