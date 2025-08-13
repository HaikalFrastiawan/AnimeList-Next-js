"use client";


import { FileSearchIcon } from "@phosphor-icons/react";
import Link from "next/link";
import Router from "next/router";


const NotFound = () => {

  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
      <FileSearchIcon size={44} className="text-amber-400" />
        <h3 className="text-amber-#000 text-4xl font-bold">NOT FOUND </h3>
       <Link href="/" className="text-white hover:bg-amber-400 underline" > Kembali</Link>
      </div>
    </div>
  );
};

export default NotFound;
