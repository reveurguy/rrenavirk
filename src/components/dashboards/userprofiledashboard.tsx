"use client"
import React, { useEffect, useState } from 'react';
import {users} from "@prisma/client";
import { getPostsData } from '@/app/actions/profile';

function UserProfileDashboard({user} : {user : users}) {
    const [posts, setPosts] = useState({})
    useEffect(()=>{
        const getPosts  = async ()=>{
            const data = await getPostsData(user.id);
            if(data.success)
            setPosts(data.writings || {});
            else 
            setPosts({})
        }
        getPosts();
    },[])

    return (
        <div className="flex flex-col items-center border-3 border-primary h-[100%] rounded-lg p-8">
           {!posts && <div className="font-semibold text-slate-700">No posts Yet...</div>}
           {/* Define posts above, as in posts,setPosts = useState<mention type here>(), then it will work correctly */}
           {posts && <div className="font-semibold text-slate-700">h</div>}

        </div>
    );
}

export default UserProfileDashboard;