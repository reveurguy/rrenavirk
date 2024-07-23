"use server"
import { auth } from "@/utils/auth";

export interface PublishData {
    cname: string;
    title: string;
    tags: string;
    content: string;
    wordcount: number;
}

interface publish{
    id ?:string, 
    success: boolean
}
  

export const publish = async (data: PublishData)=> {
    const session = await auth();

    if (session && session.user?.id) {
        const Tags = data.tags.split(',');

        if (prisma) {
            const cat = await prisma.category.findUnique({
                where: { cname: data.cname },
                select: { wordCount: true }
            });

            if (!cat) {
                return { success: false };
            }

            if (cat.wordCount < data.wordcount) {
                return { success: false };
            }

            const writing = await prisma.writings.create({
                data: {
                    tags: Tags,
                    title: data.title,
                    cname: data.cname,
                    text: data.content,
                    userId: session.user.id
                }
            });

            if (writing) {
                // Update user's preferences array (e.g., add a new preference based on the writing)
                await prisma.users.update({
                    where: { id: session.user.id },
                    data: {
                        writings: { connect: { id: writing.id } }, // Connect the new writing to the user's writings
                    }
                });

                return { success: true, id: writing.id };
            } else {
                return { success: false };
            }
        } else {
            return { success: false };
        }
    } else {
        return { success: false };
    }
};

export const categories = async() =>{
    const session = await auth();
    if(session && session.user?.id)
        { 
            if(prisma){
           const cats = await prisma?.category.findMany({
                select:{
                    cname:true,
                    wordCount:true,
                }
            })
            return {success:true, cats};
        } else {
            return {success:false}
        }
            
        } else {
            return {success: false};
        }
}

