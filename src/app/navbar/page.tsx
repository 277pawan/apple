import React from "react";

export default function Navbar() {
    return (
        <nav className="h-auto bg-black py-4">
            <ul className="flex flex-wrap w-full">
                <li className="flex-1 text-left text-2xl text-white font-bold px-2 cursor-pointer">Perrydoc</li>
                <div className="flex-1 flex justify-center space-x-10 flex-wrap text-white text-xl font-normal">
                    <li className="cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-700 ease-in-out">How to use</li>
                    <li className="cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-700 ease-in-out">About</li>
                    <li className="cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-700 ease-in-out">Newspaper</li>
                </div>
                <div className="flex-1"></div>
            </ul>
        </nav>
    );
}
