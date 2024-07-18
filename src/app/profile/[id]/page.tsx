import React from 'react';
import {users} from "@prisma/client";
import prisma from "@/utils/prismaindex";
import Visitprofile from "@/components/profiles/visitprofile";
import Userprofile from "@/components/profiles/userprofile";
import UserProfileDashboard from "@/components/dashboards/userprofiledashboard";
import VisitProfileDashboard from "@/components/dashboards/visitProfileDashboard";

async function Page({params} : {params : {id : string}}) {
    let user : users, visit;
    try {
        user = await prisma.users.findUnique({where : {id : params.id}})
        visit = user.id !== params.id
    }
    catch (e)
    {

    }
    return (
        <div className="flex flex-col md:flex-row gap-2 m-2">
            <div className="profiles md:basis-1/3 h-[88vh]">
                {!user && <p className="">User not found!</p>}
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