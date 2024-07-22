"use server"
import { auth } from "@/utils/auth";

export interface PublishData {
    category: string;
    title: string;
    tags: string;
    content: string;
}

interface publish{
    id ?:string, 
    success: boolean
}
  
export async function publish(data: PublishData):Promise<publish> {
    const session = await auth();

    if(session && session.user?.id)
    { 
        const Tags = data.tags.split(',')
        if(prisma){
        const Data = await prisma?.writings.create({
            data:{
                tags:Tags,
                title: data.title,
                category: data.category,
                text: data.content,
                user: {
                    connect: {
                      id: "669e9e11c4814204822a39cb"
                    }
                  }
            }
        });

        return {success: true, id: Data.id}
        }
        else{ 
            return {success:false }
        }
    } else {
        return {success: false};
    }
}
  