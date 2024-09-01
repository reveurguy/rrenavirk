import UserProfileDashboard from '@/components/dashboards/userprofiledashboard';
import VisitProfileDashboard from '@/components/dashboards/visitProfileDashboard';
import Userprofile from '@/components/profiles/userprofile';
import Visitprofile from '@/components/profiles/visitprofile';
import prisma from '@/utils/prismaindex';
import { users } from '@prisma/client';
import { redirect } from 'next/navigation';

async function Page({ params }: { params: { id: string } }) {
  let user: users | null = null,
    visit: boolean = true;
  try {
    user = await prisma.users.findUnique({ where: { id: params.id } });
    if (user) visit = user.id !== params.id;
    else redirect('/');
  } catch (e) {
    console.log(e);
  }
  return (
    <div className="m-2 flex flex-col gap-2 md:flex-row">
      {!user && (
        <p className="flex w-full items-center justify-center">
          User not found!
        </p>
      )}
      <div className="profiles h-[88vh] md:basis-1/3">
        {user && visit && <Visitprofile />}
        {user && !visit && <Userprofile user={user} />}
      </div>

      <div className="dashboard h-[88vh] md:basis-2/3">
        {user && visit && <VisitProfileDashboard user={user} />}
        {user && !visit && <UserProfileDashboard user={user} />}
      </div>
    </div>
  );
}

export default Page;
