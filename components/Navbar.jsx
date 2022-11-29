import Image from "next/image";
import React, { useState } from "react";
import { VscCloseAll } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";


const options = [
  { name: "Fixtures", url: "/fixtures" },
  { name: "Points Table", url: "/points-table" },
  { name: "Polls", url: "/polls" },
  { name: "Memories", url: "/memories" },
  { name: "Organising Team", url: "/organisers" },
];

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="p-2 relative flex justify-end bg-black text-white">
      {/* <div className="flex items-center font-bold">
        <Image src="/main.png" height={80} width={100} alt="logo" />
        <p className="ml-2 text-3xl">MMNCT</p>
      </div> */}
      <div className="hover:shadow-lg cursor-pointer flex justify-between w-full items-center px-5 mb-5 md:hidden">
        <p className="text-green-600 mt-5 font-bold text-2xl">MMNCT</p>
        {/* <Image
          src="/ham.png"
          height={30}
          width={30}
          layout="fixed"
          alt="Man playing cricket"
          onClick={() => {
            setShowMenu(true);
          }}
        /> */}
        <GiHamburgerMenu
          className="mt-5 hover:text-green-600 text-2xl"
          onClick={() => {
            setShowMenu(true);
          }}
        />
      </div>
      {showMenu && (
        <div className="absolute flex flex-col w-full md:w-2/5 z-40 xl:w-1/5 top-0 right-0 bg-white text-black px-4 py-2">
          <VscCloseAll
            className="font-semibold text-2xl absolute top-0 right-0 m-4 hover:cursor-pointer"
            onClick={() => {
              setShowMenu(false);
            }}
          />
          {options.map((option) => (
            <a
              className="my-4 font-semibold hover:bg-slate-600 hover:text-white px-4 py-2 text-3xl"
              href={option.url}
            >
              {option.name}
            </a>
          ))}
        </div>
      )}

      {/* content to be shown when screen size is medium and above */}
      <div className="w-full md:flex font-semibold text-3xl justify-between hidden ">
        <div>
          <p className="text-green-700">MMNCT</p>
        </div>
        <div className="">
          {options.map((option) => (
            <a className="my-4  px-4 py-2" href={option.url}>
              {option.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
