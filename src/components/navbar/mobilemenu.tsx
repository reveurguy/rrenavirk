'use client';
import { Button } from '@nextui-org/react';
import { MenuIcon, X } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

function Mobilemenu() {
  const [menuopen, setMenuopen] = useState(false);
  const { status, data } = useSession();
  return (
    <div>
      {!menuopen && (
        <span
          onClick={() => {
            setMenuopen(true);
          }}>
          <MenuIcon />
        </span>
      )}
      {menuopen && (
        <span
          onClick={() => {
            setMenuopen(false);
          }}>
          <X />
        </span>
      )}
      {menuopen && (
        <div className="absolute left-0 top-14 flex h-fit w-full flex-col items-center justify-center gap-2 rounded-b-md bg-slate-900 p-2 shadow-md">
          <div className="bg-red-600">
            {status === 'unauthenticated' && (
              <Button
                color="primary"
                variant="ghost"
                className="border-none text-base font-bold text-primary"
                onClick={() => {
                  signIn('google');
                }}>
                Sign In
              </Button>
            )}
          </div>

          <div className={`flex w-full justify-center`}>
            {status === 'authenticated' && data && (
              <div
                className={`flex w-full flex-col items-center justify-center gap-1`}>
                <Link
                  className="w-full bg-slate-900 text-center hover:bg-primary"
                  href={`/write`}>
                  <Button className="border-none bg-slate-900 text-base font-bold text-primary">
                    Write
                  </Button>
                </Link>
                <Link
                  className="w-full text-center hover:bg-slate-800"
                  href={`/profile/${data.user?.id}`}>
                  <Button className="border-none bg-slate-900 text-base font-bold text-primary">
                    Profile
                  </Button>
                </Link>
                <Button
                  className="w-full border-none bg-slate-900 text-center text-base font-bold text-primary hover:bg-slate-800"
                  onClick={() => {
                    signOut();
                  }}>
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Mobilemenu;
