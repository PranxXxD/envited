import React from "react";
import landing from "../assets/landing.png";
import { WiMoonFull } from "react-icons/wi";
import { FcCalendar } from "react-icons/fc";
import { MdArrowForwardIos } from "react-icons/md";
import { GrLocationPin } from "react-icons/gr";
import { BiLink } from "react-icons/bi";
import { GiPartyPopper } from "react-icons/gi";

const Landing = () => {
  return (
    <div className="bg-[#F6F2FF] md:p-16">
      <div className="container mx-auto py-4 md:py-8 px-2 md:px-3 items-centerjustify-center min-h-screen">
        <div className="flex space-x-3 justify-center">
          <div className="flex flex-col md:flex-col items-center justify-center md:py-4 lg:px-12 w-auto rounded-2xl">
            <div className="flex flex-col justify-center bg-gray-50 rounded-b-3xl w-1/2 ">
              <img
                src={landing}
                className="w-full rounded-t-3xl"
                alt="landing_picture"
              />
              <h3 className="text-3xl font-bold text-[#240D57] mt-3 px-4">
                Movie night
              </h3>
              <span className="text-gray-400 px-4 mt-2 font-semibold text-md">
                👋 Hosted by{" "}
                <span className="text-gray-500 font-semibold text-xl">
                  Elysia
                </span>
              </span>
              <div className="mt-2 p-4">
                <div className="p-3 bg-white rounded-lg flex flex-row items-center">
                  <h4 className="font-bold text-xl">14</h4>
                  <span className="text-md p-1 font-semibold flex">
                    responses{" "}
                    <span className="items-start text-xs mt-2 px-2">
                      <WiMoonFull />
                    </span>
                  </span>
                  <h3 className="text-[#501FC1] font-semibold hover:text-[#8456EC]">
                    see guest
                  </h3>
                  <button
                    className="ml-16 bg-[#8456EC] rounded-lg font-semibold w-24 p-2 text-white 
                  hover:bg-[#9b7ae8]"
                  >
                    🤝 Invite
                  </button>
                </div>
              </div>
              <div className="flex flex-row mt-3">
                <div className="ml-5 text-4xl bg-white p-3 rounded-lg shadow-lg">
                  <FcCalendar />
                </div>
                <h2 className="font-bold ml-4 text-[#240D57] text-lg flex flex-col">
                  18 August 6:00PM
                  <span className="text-[#4F4F4F] text-md font-normal ml-1">
                    to <span className="font-bold">19 August 1:00PM</span>{" "}
                    UTC+10
                  </span>
                </h2>
                <MdArrowForwardIos className="text-2xl mt-6 ml-12 text-gray-300" />
              </div>
              <div className="flex flex-row mt-4">
                <div className="ml-5 text-4xl bg-white p-3 rounded-lg shadow-lg">
                  <GrLocationPin />
                </div>
                <h2 className="font-bold ml-4 text-[#240D57] text-lg flex flex-col">
                  Street name
                  <span className="text-[#4F4F4F] font-normal text-md ml-1">
                    301 Rowes Lane, WA, 7183
                  </span>
                </h2>
                <MdArrowForwardIos className="text-2xl mt-6 ml-20 text-gray-300" />
              </div>
              <div className="flex flex-row mt-4">
                <div className="ml-5 text-4xl bg-white p-3 rounded-lg shadow-lg">
                  <BiLink />
                </div>
                <h2 className="font-bold ml-4 text-lg text-[#240D57] flex flex-col">
                  Link
                  <span className="text-[#4F4F4F] font-normal text-md ml-1">
                    netflix.com
                  </span>
                </h2>
                <MdArrowForwardIos className="text-2xl mt-6 ml-52 text-gray-300" />
              </div>
              <div className="mt-1 p-6 items-center justify-center">
                <div className="p-4 bg-[#F6F2FF] rounded-xl flex flex-row items-center">
                  <h4 className="font-bold text-[#8456EC] text-xl ml-6">
                    Description
                  </h4>
                  <h4 className="text-xl font-medium ml-28 text-[#240D57] ">
                    Comments
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className=" py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center items-end w-1/3">
            <div className="flex flex-col justify-end items-end">
              <h1 className="text-4xl text-[#240D57] font-bold items-end">
                Imagine If
              </h1>
              <span className="ml-4 relative text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-4xl">
                Snapchat
              </span>
              <h1 className="text-4xl text-[#240D57] font-bold items-end">
                had Events.
              </h1>
              <span className="text-gray-500 ml-6 font-normal">
                Easily host and share events with your friends across any social
                media
              </span>
            </div>

            <button className="flex flex-row justify-center items-center font-semibold text-sm bg-gradient-to-r from-[#8456EC] to-[#E87BF8] rounded-lg w-auto p-2 px-8 text-white hover:bg-gradient-to-r hover:from-[#E87BF8] hover:to-[#CCB6FF] mt-8">
              <GiPartyPopper className="text-xl m-1" />
              Crate my event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
