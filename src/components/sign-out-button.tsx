'use client';

import { signOut } from 'next-auth/react';

export const SignOutButton = () => {
  return (
    <button
      className="hover:text-accent-foreground relative flex w-full cursor-pointer items-center rounded-sm px-2 py-1.5 outline-none transition-colors hover:bg-zinc-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      onClick={() =>
        signOut({
          callbackUrl: '/',
        })
      }>
      <LogOut />
      <span className="text-base font-semibold tracking-tight">Sign out</span>
    </button>
  );
};

function LogOut() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mr-1.5 size-6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(180)">
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {' '}
        <path
          d="M16.8 2H14.2C11 2 9 4 9 7.2V11.25H15.25C15.66 11.25 16 11.59 16 12C16 12.41 15.66 12.75 15.25 12.75H9V16.8C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2Z"
          fill="#323232"
        />
        <path
          d="M4.56141 11.2498L6.63141 9.17984C6.78141 9.02984 6.85141 8.83984 6.85141 8.64984C6.85141 8.45984 6.78141 8.25984 6.63141 8.11984C6.34141 7.82984 5.86141 7.82984 5.57141 8.11984L2.22141 11.4698C1.93141 11.7598 1.93141 12.2398 2.22141 12.5298L5.57141 15.8798C5.86141 16.1698 6.34141 16.1698 6.63141 15.8798C6.92141 15.5898 6.92141 15.1098 6.63141 14.8198L4.56141 12.7498H9.00141V11.2498H4.56141Z"
          fill="#323232"
        />
      </g>
    </svg>
  );
}
