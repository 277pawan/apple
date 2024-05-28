"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [state,setstate]=useState("apawnansad")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    pawan
    {state}
    <Link href="/about">this is the about page</Link>
    </main>
  );
}
