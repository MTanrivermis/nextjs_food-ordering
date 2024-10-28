import React from "react";
import Title from "../ui/Title";

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6">
          <div className=" md:flex-1">
            <Title addClass="text-[30px]">Contact Us</Title>
            <div className="flex flex-col gap-y-2 mt-6">
              <div>
                <a href="">
                  <i className="fa fa-map-marker"></i>
                  <span className="inline-block ml-2">Location</span>
                </a>
              </div>
              <div>
                <a href="">
                  <i className="fa fa-phone"></i>
                  <span className="inline-block ml-2">Call +01 1234567890</span>
                </a>
              </div>
              <div>
                <a href="">
                  <i className="fa fa-envelope"></i>
                  <span className="inline-block ml-2">demo@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="md:flex-1">
            <Title addClass="text-[38px]">Feane</Title>
            <p className="mt-3">
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className="flex items-center justify-center mt-5 gap-x-2">
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa fa-facebook hover:text-primary"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa fa-twitter hover:text-primary"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa fa-linkedin hover:text-primary"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa fa-instagram hover:text-primary"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa fa-pinterest hover:text-primary"></i>
              </a>
            </div>
          </div>

          <div className="md:flex-1">
            <Title addClass="text-[30px]">Opening Ours</Title>
            <div className="flex flex-col gap-y-2 mt-6">
              <div>
                <span className="inline-block ml-2">Everyday</span>
              </div>
              <div>
                <span className="inline-block ml-2">10.00 Am - 10.00 Pm</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center mt-10">
            © 2022 All Rights Reserved By Free Html Templates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
