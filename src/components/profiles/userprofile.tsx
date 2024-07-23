"use client"
import React, { useState} from 'react';

import {users} from "@prisma/client";

import {Button, Input, Textarea} from "@nextui-org/react";
import {editProfile} from "@/utils/actions/profile";
import {revalidatePath} from "next/cache";
import {useRouter} from "next/navigation";
import {lato} from "@/utils/fonts";
import Image from "next/image";

function Userprofile({user}: { user: users }) {
    const [editing, setEditing] = useState(false)
    const router = useRouter()
    const [name, setName] = useState(user.name)
    const [bio, setBio] = useState(user.bio || "")

    const fulldate = user.createdAt.toString();
    const date = fulldate.substring(0,15);
    return (
        <div className="h-full">
            {!editing &&
                <div
                    className={`flex flex-col gap-3 items-center bg-slate-200 h-[100%] text-slate-700 rounded-lg p-4 ${lato.className}`}>
                    <div className="profile&name flex flex-col gap-2">
                        <p className="font-semibold text-lg ">{user.name}</p>
                    </div>

                    <div className="flex">
                        <Image src="/polar-bear.png" alt="pfp" width="150" height="150" className="rounded-full"/>
                    </div>

                    <div className="flex gap-4 border-1  p-2 max-w-3xl">
                        <div className="flex flex-col gap-1 items-center basis-1/3">
                            <span className="text-3xl font-bold">56</span>
                            <div className="h-0.5 w-full bg-black"></div>
                            <span className="">Followers</span>
                        </div>

                        <div className="flex flex-col gap-1 items-center basis-1/3">
                            <span className="text-3xl font-bold">156</span>
                            <div className="h-0.5 w-full bg-black"></div>
                            <span className="">Following</span>
                        </div>

                        <div className="flex flex-col gap-1 items-center basis-1/3">
                            <span className="text-3xl font-bold">7</span>
                            <div className="h-0.5 w-full bg-black"></div>
                            <span className="">Medals</span>
                        </div>
                    </div>

                    <div className="profile&name flex flex-col gap-2">
                        <p className="border-2 rounded-lg border-slate-300 p-3 text-sm text-justify outline-none">{user.bio}</p>
                    </div>

                    <div className="timestamps flex flex-col text-center ">
                        <p className="font-semibold">Member since</p>
                        <span className="">{date}</span>
                    </div>

                    <div className="edit profile flex flex-col text-center w-full">
                        <Button className="bg-slate-800 px-16 py-4 text-white w-full" size="lg" onClick={() => {
                            setEditing(true)
                        }}>
                            Edit Profile
                        </Button>
                    </div>
                </div>
            }

            {editing &&
                <div className="flex flex-col items-center bg-slate-300 h-[100%] text-slate-800 rounded-lg p-8">
                <form action="" className="flex flex-col w-full gap-2">

                        <Input type="text" label="Full Name" name="fullname" color="" value={name} onValueChange={(val) => {setName(val)}}/>
                        <Textarea type="Bio" label="Bio" name="bio" color="" value={bio} onValueChange={(val) => {setBio(val)}}/>
                        <div className="edit profile flex flex-col text-center mt-8 w-full gap-1">
                            <Button className="bg-slate-800 px-16 py-4 text-white w-full" size="lg" onClick={() => {
                                setEditing(false);
                                editProfile(user.id, name, bio);
                                router.refresh()
                            }}>
                                Save
                            </Button>
                            <Button className="bg-slate-700 px-16 py-4 text-white w-full" size="lg" onClick={() => {
                                setEditing(false);
                            }}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            }
        </div>
    );
}

export default Userprofile;
