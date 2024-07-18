import React from 'react';
import {users} from "@prisma/client";

function UserProfileDashboard({user} : {user : users}) {
    return (
        <div className="flex flex-col items-center border-3 border-primary h-[100%] rounded-lg p-8">
            <div className="font-semibold text-slate-700">No posts Yet...</div>
        </div>
    );
}

export default UserProfileDashboard;