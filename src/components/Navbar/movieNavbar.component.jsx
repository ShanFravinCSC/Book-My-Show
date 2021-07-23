import React from "react";
import { BiChevronRight, BiSearch, BiMenu, BiChevronDown, BiShareAlt } from "react-icons/bi";

//for Mobile devices
const NavSm = () => {
    return(
    <>
    <div className="text-white flex items-center justify-between">
        <div>
            <h3 className="text-2xl font-bold">It All Starts Here!</h3>
        </div>
        <div className="w-6 h-6">
            <BiShareAlt className="w-full h-full" />
        </div>
    </div>
    </>
    );
};

//for PC
const NavLg = () => {
    return(
        <>
        <div className="container mx-auto px-4 flex items-center justify-between"> 
         <div className="flex gap-3 items-center w-1/2">
             <div className="w-12 h-12">
             <img
                src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                alt="logo"
                className="w-full h-full"
                />
            </div>
            <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                <BiSearch />
                <input 
                    type="search" 
                    className="w-full bg-transparent border-none focus:outline-none" 
                    placeholder="Search for Movies, Events, Plays, Sports and Activities."
                />
            </div>
         </div>

         <div className="flex items-center gap-3">
         <span className="text-gray-200 text-xs flex items-center hover:text-white cursor-pointer">
                Bengaluru <BiChevronDown /> 
            </span>
            <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
                Sign In
            </button>
            <div className="w-8 h-8 text-white">
                <BiMenu className="w-full h-full"/>
            </div>
        </div>   
        </div>
        </>
    )
};

//common we call it for every devices
const MovieNavbar = () =>{
    return(
    <>
        <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-700 p-4">
            <div className="md:hidden">
                {/*Mobile Screen*/}
                <NavSm />
            </div>
            <div className="hidden md:block lg:hidden">
                {/*Medium/tab screen*/}
                <NavSm />
            </div>
            <div className= "hidden lg:flex">
                {/*Large/Pc screen*/}
                <NavLg />
            </div>
        </nav>
    </>
    );
};

export default MovieNavbar;
