"use client"
import React, {useState} from 'react';
import {signIn, signOut} from "next-auth/react";
import {Button} from "@nextui-org/react";
import Link from "next/link";
import {MenuIcon, X} from "lucide-react";
import Authbuttons from "@/components/navbar/authbuttons";
import {useSession} from "next-auth/react";

function Mobilemenu() {
    const [menuopen, setMenuopen] = useState(false)
    const {status, data} = useSession()
    return (
        <div>
            {!menuopen && <span onClick={() => {
                setMenuopen(true)
            }}><MenuIcon/></span>}
            {menuopen && <span onClick={() => {
                setMenuopen(false)
            }}><X/></span>}
            {menuopen &&
                <div
                    className="absolute bg-slate-900 rounded-b-md top-14 left-0 w-full h-fit p-2 shadow-md flex flex-col gap-2 justify-center items-center">
                    <div className="bg-red-600">
                        {status === "unauthenticated" &&
                            <Button color="primary" variant="ghost"
                                    className="text-base border-none text-primary font-bold" onClick={() => {
                                signIn("google")
                            }}>Sign In</Button>
                        }
                    </div>

                    <div className={`flex w-full justify-center`}>
                        {status === "authenticated" && data &&
                            <div className={`flex flex-col gap-1 justify-center items-center w-full`}>
                                <Link className="bg-slate-900 w-full hover:bg-primary text-center" href={`/write`}>
                                    <Button className="bg-slate-900 border-none text-primary font-bold text-base">Write</Button>
                                </Link>
                                <Link className="w-full hover:bg-slate-800 text-center"
                                      href={`/profile/${data.user?.id!}`}>
                                    <Button
                                    className="bg-slate-900 text-base border-none text-primary font-bold">Profile
                                    </Button>
                                </Link>
                                <Button
                                    className="bg-slate-900 w-full hover:bg-slate-800 text-center text-base border-none text-primary font-bold "
                                    onClick={() => {
                                        signOut()
                                    }}>Sign Out
                                </Button>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    );
}

export default Mobilemenu;