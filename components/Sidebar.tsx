"use client";

import Link from "next/link";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { BsCalendar2Fill } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";
import { IoDocumentText, IoPersonSharp } from "react-icons/io5";
import { RiHome5Fill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

function Sidebar() {
  const FILE_ID = "1ZcFpDreEBNMfwF42v6qLByKbHYUrKlrb";
  const downloadUrl = `https://drive.google.com/file/d/1vs6-TZWERX3vTf_wif3CS_u3sD2MbQZB/view?usp=drivesdk`;

  return (
    <div className="fixed group z-10 top-4 sm:top-[30%] left-1/6 sm:left-10 w-[60%] sm:w-fit overflow-x-scroll sm:overflow-hidden  gap-8 hover:gap-6 px-6 hover:pr-16 py-8 rounded-4xl hover:rounded-xl flex sm:flex-col text-2xl text-gray-500 bg-[#121212] transition-all duration-600 ">
      <Link href={"/"} className="flex gap-4 hover:text-white cursor-pointer  ">
        <RiHome5Fill />
        <p className="text-sm font-semibold hidden group-hover:block ">Home</p>
      </Link>
      <div className="flex gap-4 hover:text-white cursor-pointer">
        <IoDocumentText />
        <a
          href={downloadUrl}
          className="text-sm font-semibold hidden group-hover:block "
        >
          Resume
        </a>
      </div>

      <Link
        href={"/project"}
        className="group-hover:flex gap-4 hover:text-white cursor-pointer  sm:hidden "
      >
        <BsCalendar2Fill className="sm:hidden group-hover:block" />
        <p className="text-sm font-semibold hidden group-hover:block ">
          Projects
        </p>
      </Link>

      <Link href={"/about"}>
        <div className="flex gap-4 hover:text-white cursor-pointer">
          <IoPersonSharp />
          <p className="text-sm font-semibold hidden group-hover:block ">
            About
          </p>
        </div>
      </Link>

      
      <Link href={"/toolStack"} className="group-hover:flex gap-4 hover:text-white cursor-pointer  sm:hidden ">
        <FaToolbox className="sm:hidden group-hover:block " />
        <p className="text-sm font-semibold hidden group-hover:block ">
          ToolStack
        </p>
      </Link>

        <Link href={"/#contact"}>
      <div className="flex gap-4 hover:text-white cursor-pointer  ">
        <BiSolidMessageSquareDots />
        <p className="text-sm font-semibold hidden group-hover:block ">
          Contact
        </p>
      </div>
        </Link>
    </div>
  );
}

export default Sidebar;
