import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt=""
          />
          <h2 className="text-2xl font-bold py-8 text-center">Single User</h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium my-8">
            <p className="py-2 border-b mx-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 User Allowed</p>
            <p className="py-2 border-b mx-8">Sends upto 2GB Data</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mb-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
        <div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt=""
          />
          <h2 className="text-2xl font-bold py-8 text-center">Double User</h2>
          <p className="text-center font-bold text-4xl">$199</p>
          <div className="text-center font-medium my-8">
            <p className="py-2 border-b mx-8">1TB Storage</p>
            <p className="py-2 border-b mx-8">3 Users Allowed</p>
            <p className="py-2 border-b mx-8">Sends upto 10GB Data</p>
          </div>
          <button className="text-[#00df9a] w-[200px] rounded-md font-medium mb-6 mx-auto py-3 bg-black">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt=""
          />
          <h2 className="text-2xl font-bold py-8 text-center">Triple User</h2>
          <p className="text-center font-bold text-4xl">$299</p>
          <div className="text-center font-medium my-8">
            <p className="py-2 border-b mx-8">5TB Storage</p>
            <p className="py-2 border-b mx-8">10 Users Allowed</p>
            <p className="py-2 border-b mx-8">Sends upto 20GB Data</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mb-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
