import React from 'react';
import Image from "next/image";
import SearchBox from "@/components/searchBox";
import {Button} from "@nextui-org/react";
import {auth, signIn, signOut} from "@/utils/auth";
import Link from "next/link";
import {MenuIcon} from "lucide-react";
import Mobilemenu from "@/components/navbar/mobilemenu";
import Authbuttons from "@/components/navbar/authbuttons";

async function Navbar() {
    const session = await auth()
    return (
        <div className="p-8 h-8 shadow-md flex justify-between items-center bg-slate-900 w-full">
            {/*Searchbox*/}
            {/*<div className="md:basis-1/3  flex justify-start"><SearchBox/></div>*/}
            <div className="md:basis-1/3 ">   </div>

            {/*Branding*/}
            <div className="md:basis-1/3  gap-1 items-center flex justify-center">
                <div className="flex items-center">
                    <Image src="/logo.png" alt="logo" width="100" height="100" quality="100" className="w-12 h-8"/>
                    <p className="text-xl font-semibold text-slate-300">Rrenavirk</p>
                </div>
            </div>

            {/*Menu*/}
            <div className="md:basis-1/3 flex gap-2 justify-end">
                    <div className="hidden md:block"><Authbuttons/></div>
                    <div className="md:hidden"><Mobilemenu/></div>
            </div>
        </div>
    );
}

export default Navbar;