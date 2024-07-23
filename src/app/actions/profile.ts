"use server"

import { auth } from "@/utils/auth";

export const pushName = async (name:string) => {
    const session = await auth();
    if(!session?.user){
        return {success:false};
    }
    session.user.id
    const user = await prisma?.users.update({
        where:{
            id:session.user.id,
        },
        data:{
            name: name
        }
    })
    if(!user) {return {success:false}}
    return {success:true, name:user.name};
};


export const getPostsData = async (id:string )=>{
    const user = await prisma?.users.findUnique({
        where:{
            id: id
        },
        select:{
            writings:true,
        }
    })
    if(!user){
        return {success:false};
    }
    else {
        return {success:true, writings:user.writings}
    }
}
