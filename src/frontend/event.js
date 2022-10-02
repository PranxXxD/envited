import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Event = () => {
  return (
    <div>
      <div className="container md:w-[72rem] p-2 sm:m-auto ">
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <h1 className="text-3xl mx-auto text-center mt-6 font-bold">
          Schedule an Event
        </h1>
        <div className="flex-col mt-3 mx-auto px-6 items-center justify-center w-1/2">
          <div className="mx-auto flex">
            <div className="px-2 ">
              <div className=" mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-xl font-semibold text-gray-600"
                >
                  Event name
                </label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  placeholder="Enter your Full Name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#CCB6FF] focus:ring-2 focus:ring-[#EDE5FF] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="px-2">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-xl font-semibold text-gray-600"
                >
                  Host name
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#CCB6FF] focus:ring-2 focus:ring-[#EDE5FF] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col mx-auto px-6 items-center justify-center w-1/2">
          <div className="mx-auto flex">
            <div className="px-2 ">
              <div className=" mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-xl font-semibold text-gray-600"
                >
                  Start Date
                </label>
                <input
                  type="Date"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#CCB6FF] focus:ring-2 focus:ring-[#EDE5FF] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="px-2">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-xl font-semibold text-gray-600"
                >
                  End Date
                </label>
                <input
                  type="Date"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#CCB6FF] focus:ring-2 focus:ring-[#EDE5FF] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col mx-auto px-6 items-center justify-center w-1/2">
          <div className="mx-auto flex">
            <div className="px-2 ">
              <div className=" mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-xl font-semibold text-gray-600"
                >
                  Location
                </label>
                <input
                  type="location"
                  className="w-full h-12 bg-white rounded border border-gray-300 focus:border-[#CCB6FF] focus:ring-2 focus:ring-[#EDE5FF] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="px-2">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-xl font-semibold text-gray-600"
                >
                  Event Photo
                </label>
                <input
                  type="file"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#CCB6FF] focus:ring-2 focus:ring-[#EDE5FF] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="flex w-1/6 mx-auto my-2 disabled:bg-red-300 text-white bg-gradient-to-r from-[#8456EC] to-[#E87BF8] rounded-lg p-2 px-8 hover:bg-gradient-to-r hover:from-[#E87BF8] hover:to-[#CCB6FF] text-md justify-center">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Event;
