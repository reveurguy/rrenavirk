import React from 'react';
import Image from "next/image";
import SearchBox from "@/components/searchBox";
import {Button} from "@nextui-org/react";
import {auth, signIn, signOut} from "@/utils/auth";
import Link from "next/link";

async function Footer() {
    const session = await auth()
    return (
        <div className="p-8 h-8 shadow-md flex justify-center items-center bg-slate-950 rounded-t-md">
            <div className="">
                <span className="text-slate-500 font-semibold">&copy; Rrevanirk</span>
            </div>
        </div>
    );
}

export default Footer;