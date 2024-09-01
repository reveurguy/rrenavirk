import prisma from '@/utils/prismaindex';
import { users, writings } from '@prisma/client';
async function UserProfileDashboard({ user }: { user: users }) {
  const posts = await prisma.writings.findMany({
    where: { userId: user.id },
  });
  return (
    <div className="flex h-full flex-col items-center rounded-lg border-3 border-slate-300 p-2">
      {!posts && (
        <div className="font-semibold text-slate-700">No posts Yet...</div>
      )}
      {/* Define posts above, as in posts,setPosts = useState<mention type here>(), then it will work correctly */}
      {posts && (
        <div className="grid grid-cols-1 gap-2 font-semibold text-slate-700 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: writings) => (
            <div
              className="flex flex-col rounded-lg bg-slate-100 p-3 hover:bg-slate-200"
              key={post.id}>
              <p className="text-center text-xl">{post.title}</p>
              <div className="mb-2 h-0.5 w-full bg-slate-200" />
              <p className="text-justify text-sm font-normal">
                {post.text.substring(0, 300) + '...'}
              </p>
              <div className="my-2 h-0.5 w-full bg-slate-200" />
              <div className="flex justify-between">
                <span className="text-sm">{post.cname}</span>
                <span className="text-sm font-normal">
                  {post.createdAt.toString().substring(0, 15)}
                </span>
              </div>
              <div className="my-2 h-0.5 w-full bg-slate-200" />
              <div className="flex justify-start gap-2">
                {post.tags.map((tag: string) => (
                  <span
                    className="rounded-md bg-slate-200 p-1 text-sm font-normal"
                    key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
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
