
import React from "react";
import Sidebaritem from "./Sidebaritem";
import { ImUsers } from "react-icons/im";
import { MdGroups } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineOndemandVideo, MdOutlineExpandMore } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

const Sidebar = () => {
  const{data: session}= useSession();
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]">
        <div className="flex items-center space-x-2 py-3 pl-4  hover:bg-gray-200 rounded-l-xl cursor-pointer ">
        <Image
           src={session?.user.image}
         height={40}
         width={40}
         className="rounded-full cursor-pointer"
        />   
         <p className="hidden sm:inline-flex font-medium">
         {session?.user.name}
        </p>
        </div>


        <div className='flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer'>
            <ImUsers className='h-8 w-8 text-blue-500'/>
            <p className='hidden sm:inline-flex font-medium'>Users</p>
        </div>

        <Sidebaritem Icon={ImUsers} value="Friends" />
      <Sidebaritem Icon={MdGroups} value="Groups" />
      <Sidebaritem Icon={AiOutlineShop} value="MarketPlace" />
      <Sidebaritem Icon={MdOutlineOndemandVideo} value="Watch" />
      <Sidebaritem Icon={BsStopwatch} value="Memeries" />
      <Sidebaritem Icon={MdOutlineExpandMore} value="See more" />
        </div>
  )
}

export default Sidebar