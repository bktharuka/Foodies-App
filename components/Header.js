import React from 'react'
import Image from "next/image";
import { HiOutlineSearch, HiOutlineHome } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
import { AiFillMessage, AiFillBell, AiOutlineShop } from "react-icons/ai";
import { MdOutlineExpandMore, MdOutlineOndemandVideo } from "react-icons/md";
import { RiFlag2Line } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";
const Header = () => {
  const{data: session}= useSession();
  return (
    <div className='bg-white flex items-center p-2 shadow-md top-0  sticky z-50 h-16'>
          {/* Left */}
          <div className="flex min-w-fit">
        <Image
          src="https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=600"
          height={40}
          width={40}
        />
        <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
          <HiOutlineSearch size={20} />
          <input
            className="hidden lg:inline-flex bg-transparent focus:outline-none outline-none flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
        </div>
        {/* Center */}
        <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center">
        <div className="flex items-center  h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer ">
        <HiOutlineHome className="mx-auto text-blue-500" size={25} />
        <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer ">
            <RiFlag2Line className="mx-auto text-gray-500" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer ">
            <MdOutlineOndemandVideo
              className="mx-auto text-gray-500"
              size={25}
            />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer ">
            <AiOutlineShop className="mx-auto text-gray-500" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer ">
            <IoGameControllerOutline
              className="mx-auto text-gray-500"
              size={25}
            />
            </div>
            </div>
        </div>
         {/* Right */}
         <div className="flex items-center  justify-end min-w-fit space-x-2">
        <Image
         src={session?.user.image}
         height={40}
         width={40}
         className='rounded-full cursor-pointer'
        />
        <p className="hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs">
        {session?.user.name}
        </p>
        <CgMenuGridO
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <AiFillMessage
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <AiFillBell
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <MdOutlineExpandMore
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
    </div>
    </div>
    </div>
  )
}

export default Header