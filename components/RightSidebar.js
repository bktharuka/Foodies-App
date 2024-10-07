import React from 'react'
import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from './Contacts';

const RightSidebar = () => {
  return (
    <div className="  hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
         <div className="flex items-center text-gray-500">
         <p className="flex text-lg font-semibold flex-grow">Contacts</p>
         <div className="flex space-x-1 px-2">
         <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
         <RiVideoAddFill />
         </div>
         <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <BiSearch />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <CgMoreAlt />
          </div>
         </div>
        </div>
        <Contacts
        name="Gihan madusanka"
        src="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=400"
        status="online"
        
      />
       <Contacts
        name="dilini Umendra"
        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"
        status="offline"
        
      />
       <Contacts
        name="Hirushi Madushika"
        src="https://images.pexels.com/photos/4450359/pexels-photo-4450359.jpeg?auto=compress&cs=tinysrgb&w=400"
        status="online"
        
      />
    </div>
  )
}

export default RightSidebar