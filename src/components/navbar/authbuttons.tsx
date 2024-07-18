"use server"
import React from 'react';
import {auth, signIn, signOut} from "@/utils/auth";
import {Button} from "@nextui-org/react";
import Link from "next/link";

async function Authbuttons() {
    const session = await auth()
    return (
        <div>
            <div className="">
                {!session && <form
                    action={async () => {
                        "use server"
                        await signIn("google")
                    }}
                >
                    <Button className="text-white bg-slate-950" type="submit">Sign In</Button>
                </form>}
            </div>

            <div className={`flex `}>
                {session && <form
                    action={async () => {
                        "use server"
                        await signOut()
                    }}
                >
                    <div className={`flex gap-1`}>
                        <Link href={`/write`}><Button color="primary" variant="ghost"
                                                      className="border-none text-primary font-bold">Write</Button></Link>
                        <Link href={`/profile/${session.user?.id}`}><Button color="primary" variant="ghost"
                                                                            className="border-none text-primary font-bold mr-2">Profile</Button></Link>
                        <Button className="text-white bg-slate-950" type="submit">Sign Out</Button>
                    </div>
                </form>}
            </div>
        </div>
    );
}

export default Authbuttons;