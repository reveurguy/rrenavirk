import React from 'react';
import {users} from "@prisma/client";
import prisma from "@/utils/prismaindex";
import Visitprofile from "@/components/profiles/visitprofile";
import Userprofile from "@/components/profiles/userprofile";
import UserProfileDashboard from "@/components/dashboards/userprofiledashboard";
import VisitProfileDashboard from "@/components/dashboards/visitProfileDashboard";
import { redirect } from 'next/navigation';

async function Page({params} : {params : {id : string}}) {
    let user : users | null = null, visit:boolean = true;
    try {
        user = await prisma.users.findUnique({where : {id : params.id}})
        if(user)
        visit = user.id !== params.id
        else 
        redirect('/')
    }
    catch (e)
    {

    }
    return (
        <div className="flex flex-col md:flex-row gap-2 m-2">
            {!user && <p className="flex items-center justify-center w-full">User not found!</p>}
            <div className="profiles md:basis-1/3 h-[88vh]">
                {user && visit && <Visitprofile/>}
                {user && !visit && <Userprofile user={user}/>}
            </div>

            <div className="dashboard md:basis-2/3 h-[88vh]">
                {user && visit && <VisitProfileDashboard user={user}/>}
                {user && !visit && <UserProfileDashboard user={user}/>}
            </div>
        </div>
    );
}

export default Page;