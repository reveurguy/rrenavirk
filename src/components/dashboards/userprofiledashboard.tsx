import {users, writings} from "@prisma/client";
import prisma from "@/utils/prismaindex";
async function UserProfileDashboard({user} : {user : users}) {
    const posts = await prisma.writings.findMany({
        where : {userId : user.id}
    })
    return (
        <div className="flex flex-col items-center border-3 border-slate-300 h-[100%] rounded-lg p-2">
           {!posts && <div className="font-semibold text-slate-700">No posts Yet...</div>}
           {/* Define posts above, as in posts,setPosts = useState<mention type here>(), then it will work correctly */}
           {posts && <div className="font-semibold text-slate-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
               {posts.map((post : writings) => (
                   <div className="rounded-lg bg-slate-100 flex flex-col p-3 hover:bg-slate-200" key={post.id}>
                       <p className="text-xl text-center">{post.title}</p>
                       <div className="w-full h-0.5 bg-slate-200 mb-2"></div>
                       <p className="text-sm font-normal text-justify">{post.text.substring(0, 300) + "..."}</p>
                       <div className="w-full h-0.5 bg-slate-200 my-2"></div>
                       <div className="flex justify-between">
                           <span className="text-sm">{post.cname}</span>
                           <span className="text-sm font-normal">{post.createdAt.toString().substring(0, 15)}</span>
                       </div>
                       <div className="w-full h-0.5 bg-slate-200 my-2"></div>
                       <div className="flex justify-start gap-2">
                           {post.tags.map((tag : string) => (
                               <span className="font-normal text-sm bg-slate-200 p-1 rounded-md" key={tag}>{tag}</span>
                           ))}
                       </div>
                   </div>
               ))}
           </div>}

        </div>
    );
}

//
// function card({writing}: { post: writings }) {
//     console.log("writing")
//     console.log(writing)
//     return (
//
//     )
// }

export default UserProfileDashboard;