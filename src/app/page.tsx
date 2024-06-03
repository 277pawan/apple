"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "./navbar/page"
import Herosection from "./herosection/page";
export default function Home() {
  const [state, setstate] = useState("apawnansad")
  return (
    <main className=" flex flex-col m-0 p-0 box-border">
      <Herosection />
    </main>
  );
}
