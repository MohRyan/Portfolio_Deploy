import React from "react";

const MyForm = () => {
  return (
    <>
      <div className="my-5">
        <div className="flex justify-around">
          <b>Leave Us Your Info</b>
          <b>Contact Information</b>
        </div>
        <div className="flex px-10">
          <div className="w-1/2">
            <p>Your Full Name</p>
            <p>Your Email</p>
            <p>Subject</p>
            <p>Your Message</p>
          </div>
          <div className="w-1/2">
            <div className="flex bg-red-300 justify-start mb-5">
              <ul className="w-52">
                <li>Country:</li>
                <li>City:</li>
                <li>Streat:</li>
              </ul>
              <ul className="w-1/2">
                <li>Indonesia</li>
                <li>Jember</li>
                <li>Karangrejo Gumukmas Jember</li>
              </ul>
            </div>
            <div className="flex bg-red-300 justify-start mb-5">
              <ul className="w-52">
                <li>Email:</li>
                <li>Linkdn:</li>
                <li>Telegram:</li>
              </ul>
              <ul className="w-1/2">
                <li>ryanmoh735@gmail.com</li>
                <li>-----</li>
                <li>085------</li>
              </ul>
            </div>
            <div className="flex bg-red-300 justify-start mb-5">
              <ul className="w-52">
                <li>Support Service:</li>
                <li>Office:</li>
                <li>Personal:</li>
              </ul>
              <ul className="w-1/2">
                <li>15----</li>
                <li>+45-------</li>
                <li>+052------</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyForm;
