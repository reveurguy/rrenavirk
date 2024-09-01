'use client';
import { useState } from 'react';

import { users } from '@prisma/client';

import { editProfile } from '@/utils/actions/profile';
import { lato } from '@/utils/fonts';
import { Button, Input, Textarea } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Userprofile({ user }: { user: users }) {
  const [editing, setEditing] = useState(false);
  const router = useRouter();
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio || '');

  const fulldate = user.createdAt.toString();
  const date = fulldate.substring(0, 15);
  return (
    <div className="h-full">
      {!editing && (
        <div
          className={`flex h-full flex-col items-center gap-3 rounded-lg bg-slate-200 p-4 text-slate-700 ${lato.className}`}>
          <div className="profile&name flex flex-col gap-2">
            <p className="text-lg font-semibold">{user.name}</p>
          </div>

          <div className="flex">
            <Image
              src="/polar-bear.png"
              alt="pfp"
              width="150"
              height="150"
              className="rounded-full"
            />
          </div>

          <div className="flex max-w-3xl gap-4 border-1 p-2">
            <div className="flex basis-1/3 flex-col items-center gap-1">
              <span className="text-3xl font-bold">56</span>
              <div className="h-0.5 w-full bg-black" />
              <span className="">Followers</span>
            </div>

            <div className="flex basis-1/3 flex-col items-center gap-1">
              <span className="text-3xl font-bold">156</span>
              <div className="h-0.5 w-full bg-black" />
              <span className="">Following</span>
            </div>

            <div className="flex basis-1/3 flex-col items-center gap-1">
              <span className="text-3xl font-bold">7</span>
              <div className="h-0.5 w-full bg-black" />
              <span className="">Medals</span>
            </div>
          </div>

          <div className="profile&name flex flex-col gap-2">
            <p className="rounded-lg border-2 border-slate-300 p-3 text-justify text-sm outline-none">
              {user.bio}
            </p>
          </div>

          <div className="timestamps flex flex-col text-center">
            <p className="font-semibold">Member since</p>
            <span className="">{date}</span>
          </div>

          <div className="edit profile flex w-full flex-col text-center">
            <Button
              className="w-full bg-slate-800 px-16 py-4 text-white"
              size="lg"
              onClick={() => {
                setEditing(true);
              }}>
              Edit Profile
            </Button>
          </div>
        </div>
      )}

      {editing && (
        <div className="flex h-full flex-col items-center rounded-lg bg-slate-300 p-8 text-slate-800">
          <form action="" className="flex w-full flex-col gap-2">
            <Input
              type="text"
              label="Full Name"
              name="fullname"
              // color=""
              // value={name}
              onValueChange={(val) => {
                setName(val);
              }}
            />
            <Textarea
              type="Bio"
              label="Bio"
              name="bio"
              // color=""
              value={bio}
              onValueChange={(val) => {
                setBio(val);
              }}
            />
            <div className="edit profile mt-8 flex w-full flex-col gap-1 text-center">
              <Button
                className="w-full bg-slate-800 px-16 py-4 text-white"
                size="lg"
                onClick={() => {
                  setEditing(false);
                  editProfile(user.id, name as string, bio);
                  router.refresh();
                }}>
                Save
              </Button>
              <Button
                className="w-full bg-slate-700 px-16 py-4 text-white"
                size="lg"
                onClick={() => {
                  setEditing(false);
                }}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Userprofile;
