"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { users } from "@prisma/client";
import Link from "next/link";
import { Button, Input } from "@nextui-org/react";
import { pushName } from '@/app/actions/profile';
function Userprofile({ user }: { user: users }) {
    const [name, setName] = useState(user.name || "");
    const [post, setPosts] = useState([{}])

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const msg = await pushName(name);
        if(!msg.success){
            alert('Server Problem')
        }
        else {
            setName(msg.name || '')
        }
    };




    console.log(user);
    return (
        <div className="flex flex-col items-center bg-primary h-[100%] rounded-lg p-8">
            <div className="profile&name flex flex-col gap-2">
                <Image src="/polar-bear.png" alt="" height="500" width="500" className="h-44 w-44" />
                {name ? (
                    <p className="text-center font-semibold text-xl">{name.toUpperCase()}</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            label="Name"
                            color='default'
                            className='text-black'
                        />
                        <Button type="submit" className="bg-slate-950 px-16 py-4 text-white">Submit</Button>
                    </form>
                )}
            </div>
            <div className="timestamps flex flex-col text-center mt-8">
                <p className="font-semibold">Member since</p>
                <span className="">{user.createdAt.toLocaleString()}</span>
            </div>
            <div className="timestamps flex flex-col text-center mt-8">
                <p className="font-semibold">Last Active</p>
                <span className="">{user.updatedAt.toLocaleString()}</span>
            </div>
            {/* Rather than edit profile page, make a modal with form for this  */}
            <div className="edit profile flex flex-col text-center mt-8">
                <Link href="/editprofile"><Button className="bg-slate-950 px-16 py-4 text-white" size="lg">
                    Edit Profile
                </Button>
                </Link>
            </div>
        </div>
    );
}

export default Userprofile;
