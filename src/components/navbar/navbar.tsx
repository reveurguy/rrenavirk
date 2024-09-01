import Authbuttons from '@/components/navbar/authbuttons';
import { auth } from '@/utils/auth';
import Image from 'next/image';

async function Navbar() {
  const session = await auth();
  return (
    <div className="fixed z-40 flex w-full flex-col bg-zinc-50/70 px-4 shadow backdrop-blur-xl">
      <div className="flex h-[70px] w-full items-center justify-between p-8">
        {/*Branding*/}
        <div className="flex w-full items-center justify-between gap-1">
          {/* <div className="flex items-center basis-1/3">
            <LucideFlaskRound />
          </div> */}
          <div className="flex items-center justify-center">
            {/* <span className="text-slate-500 font-semibold">
              Tuesday, 27 July 2024
            </span> */}
            <Image
              src="/logo.png"
              alt="logo"
              width="100"
              height="100"
              quality={100}
              unoptimized
              className="h-9 w-12"
            />
            <span className="text-3xl font-extrabold tracking-tight text-black">
              Rrenavirk
            </span>
            {/* <span className="text-slate-500 font-semibold">
              7:50 Prime Meridian
            </span> */}
          </div>
          <div className="flex items-center justify-end">
            <Authbuttons />
          </div>
        </div>
      </div>
      {/* <div className="p-8 h-16 shadow-md flex justify-between items-center w-full">
        <div className="gap-1 items-center flex justify-center w-full">
          <div className="flex items-center gap-2 justify-center">
            <span
              className={`text-slate-700 font-bold text-4xl ${lato.className}`}
            >
              RRENAVIRK
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Navbar;
