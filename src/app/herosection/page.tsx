import React from "react";
import perrydocs from "../../../assets/perrydocs.png";
import Image from "next/image";
import Link from "next/link";

export default function Herosection() {
    return (
        <div className="w-auto bg-gradient-to-b from-black from-10% via-blue-900 to-black" style={{ height: "91.4vh" }}>
            <div className="flex h-full items-center">
                <div className="h-full w-full text-white flex flex-col justify-center items-center gap-4">
                    <p className="text-5xl text-bold font-abc max-w-4xl text-center text-wrap text-ellipsis text-pretty">
                        Code document for JavaScript with JSDoc: an introduction
                    </p>
                    <p className="text-md font-normal text-center max-w-4xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis omnis distinctio minima nemo perspiciatis. Ipsa, accusamus asperiores! Tenetur totam rem aspernatur architecto, aut, voluptatem ut nam quis quisquam error sit?Ipsa, accusamus asperiores! Tenetur totam rem aspernatur architecto, aut, voluptatem ut nam quis quisquam error.
                    </p>
                    <div>
                        <Link href="/about"> <button className="w-[150px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 text-black font-bold ease-in-out shadow-md hover:scale-105 ">
                            Button
                        </button></Link>
                    </div>
                </div>
                <div className="h-3/4 w-1/2 flex justify-center items-center hidden md:flex">
                    <Image className="h-full w-full box-border" src={perrydocs} alt="perrydocimage" />
                </div>
            </div>
        </div>
    );
}
