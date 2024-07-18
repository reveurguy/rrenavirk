import React from 'react';
import Image from "next/image";
import {users} from "@prisma/client";
import Link from "next/link";
import {Button} from "@nextui-org/react";

function Userprofile({user}: { user : users }) {
    return (
        <div className="flex flex-col items-center bg-primary h-[100%] rounded-lg p-8">
            <div className="profile&name flex flex-col gap-2">
                <Image src="/polar-bear.png" alt="" height="500" width="500" className="h-44 w-44"/>
                <p className="text-center font-semibold text-xl">{user.name ? user.name : "Manav M Sanger"}</p>
            </div>
            <div className="timestamps flex flex-col text-center mt-8">
                <p className="font-semibold">member since</p>
                <span className="">{user.createdAt.toLocaleString()}</span>
            </div>
            <div className="timestamps flex flex-col text-center mt-8">
                <p className="font-semibold">Last Active</p>
                <span className="">{user.updatedAt.toLocaleString()}</span>
            </div>

            <div className="edit profile flex flex-col text-center mt-8">
                <Link href="/editprofile"><Button className="bg-slate-950 px-16 py-4 text-white" size="lg">Edit Profile</Button></Link>
            </div>
        </div>
    );
}

export default Userprofile;