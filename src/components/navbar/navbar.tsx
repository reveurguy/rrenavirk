import React from 'react';
import Image from "next/image";
import SearchBox from "@/components/searchBox";
import {Button} from "@nextui-org/react";
import {auth, signIn, signOut} from "@/utils/auth";
import Link from "next/link";
import {LucideFlaskRound, MenuIcon, Search, SearchX} from "lucide-react";
import Mobilemenu from "@/components/navbar/mobilemenu";
import Authbuttons from "@/components/navbar/authbuttons";
import {lato, poppins, roboto} from "@/utils/fonts";

async function Navbar() {
    const session = await auth()
    return (
        <div className="flex flex-col bg-slate-100">
            <div className="p-8 h-16 flex justify-between items-center w-full">

                {/*Branding*/}
                <div className="gap-1 items-center flex justify-between w-full">
                    <div className="flex items-center basis-1/3">
                        <LucideFlaskRound/>
                    </div>
                    <div className="flex items-center gap-2 basis-1/3 justify-center">
                        <span className="text-slate-500 font-semibold">Tuesday, 27 July 2024</span>
                        <Image src="/logo.png" alt="logo" width="100" height="100" quality="100" className="w-16 h-12"/>
                        <span className="text-slate-500 font-semibold">7:50 Prime Meridian</span>

                    </div>
                    <div className="flex items-center basis-1/3 justify-end">
                        <Authbuttons/>
                    </div>
                </div>
            </div>
            <div className="p-8 h-16 shadow-md flex justify-between items-center w-full">

                {/*Branding*/}
                <div className="gap-1 items-center flex justify-center w-full">

                    <div className="flex items-center gap-2 justify-center">
                        <span className={`text-slate-700 font-bold text-4xl ${lato.className}`}>RRENAVIRK</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Navbar;