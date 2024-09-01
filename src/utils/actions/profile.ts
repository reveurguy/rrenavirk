'use server';

export const editProfile = async (
  userId: string,
  fullname: string,
  bio: string
) => {
  console.log(userId, fullname, bio);
  await prisma?.users.update({
    where: { id: userId },
    data: {
      name: fullname,
      bio: bio,
    },
  });
};

export const getPostsData = async (id: string) => {
  const user = await prisma?.users.findUnique({
    where: {
      id: id,
    },
    select: {
      writings: true,
    },
  });
  if (!user) {
    return { success: false };
  } else {
    return { success: true, writings: user.writings };
  }
};
