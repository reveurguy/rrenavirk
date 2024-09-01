import { auth } from '@/utils/auth';

async function Footer() {
  const session = await auth();
  return (
    <div className="flex h-8 items-center justify-center rounded-t-md bg-slate-950 p-8 shadow-md">
      <div className="">
        <span className="font-semibold text-slate-500">&copy; Rrevanirk</span>
      </div>
    </div>
  );
}

export default Footer;
