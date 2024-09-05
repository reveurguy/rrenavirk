'use server';
import { auth, signIn, signOut } from '@/utils/auth';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { SignOutButton } from '../sign-out-button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';

export default async function Authbuttons() {
  const session = await auth();
  return (
    <div>
      <div className="">
        {!session && (
          <form
            action={async () => {
              'use server';
              await signIn('google');
            }}
            className="flex items-center gap-2">
            <NavigationMenu className="px-3">
              <NavigationMenuList>
                {/* <NavigationMenuItem>
                  <Link href="/write" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}>
                      Write
                      <svg
                        className="ml-1 size-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path d="M21 1.99669C6 1.99669 4 15.9967 3 21.9967C3.66667 21.9967 4.33275 21.9967 4.99824 21.9967C5.66421 18.6636 7.33146 16.8303 10 16.4967C14 15.9967 17 12.4967 18 9.49669L16.5 8.49669C16.8333 8.16336 17.1667 7.83002 17.5 7.49669C18.5 6.49669 19.5042 4.99669 21 1.99669Z" />
                      </svg>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/apostles-society"
                    className={navigationMenuTriggerStyle()}>
                    Apostles Society
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button className="bg-slate-950 text-white" type="submit">
              Sign In
            </Button>
          </form>
        )}
      </div>

      <div className={`flex`}>
        {session && (
          <form
            action={async () => {
              'use server';
              await signOut();
            }}>
            <div className={`flex gap-1`}>
              {/* <Link href={`/write`}>
                <Button
                  color="default"
                  variant="ghost"
                  className="border-none text-black font-bold"
                >
                  Write
                </Button>
              </Link>
              <Link href={`/profile/${session.user?.id}`}>
                <Button
                  color="default"
                  variant="ghost"
                  className="border-none text-black font-bold mr-2"
                >
                  Profile
                </Button>
              </Link> */}
              {/* <Button className="text-white bg-slate-950" type="submit">
                Sign Out
              </Button> */}
              <NavigationMenu className="px-3">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/write"
                      className={navigationMenuTriggerStyle()}>
                      Write
                      <svg
                        className="ml-1 size-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path d="M21 1.99669C6 1.99669 4 15.9967 3 21.9967C3.66667 21.9967 4.33275 21.9967 4.99824 21.9967C5.66421 18.6636 7.33146 16.8303 10 16.4967C14 15.9967 17 12.4967 18 9.49669L16.5 8.49669C16.8333 8.16336 17.1667 7.83002 17.5 7.49669C18.5 6.49669 19.5042 4.99669 21 1.99669Z" />
                      </svg>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/apostles-society"
                      className={navigationMenuTriggerStyle()}>
                      Apostles Society
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <nav className="flex flex-row items-center space-x-8">
                {/* <Bell className="size-5 text-primary/80 fill-primary/80" /> */}
                <div className="flex items-center space-x-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="group flex cursor-pointer items-center gap-2 rounded-md p-1">
                        <p className="flex flex-col text-lg font-bold tracking-tight">
                          {/* <span className="font-medium">Facilitator</span>
                <span className="text-muted-foreground">Admin</span> */}
                          {/* {session.user?.name} */}
                          {session.user?.name}
                        </p>
                        <Avatar className="ml-1 group-hover:bg-zinc-200">
                          <AvatarImage src="/avatar.svg" alt="@shadcn" />
                          <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-3 w-56">
                      {/* <DropdownMenuLabel className="truncate">
                    {session?.user?.email}
                  </DropdownMenuLabel> */}
                      <Link href={`/profile/${session.user?.id}`}>
                        <DropdownMenuItem asChild>
                          <button className="hover:text-accent-foreground relative flex w-full cursor-pointer items-center rounded-sm px-2 py-1.5 outline-none transition-colors hover:bg-zinc-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                            <UserProfile />
                            <span className="text-base font-semibold tracking-tight">
                              Profile
                            </span>
                          </button>
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <SignOutButton />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </nav>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

const UserProfile = () => (
  <svg
    viewBox="0 0 24 24"
    className="mr-2 size-6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      {' '}
      <path
        d="M22 7.81V16.19C22 19 20.71 20.93 18.44 21.66C17.78 21.89 17.02 22 16.19 22H7.81C6.98 22 6.22 21.89 5.56 21.66C3.29 20.93 2 19 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z"
        fill="#323232"
      />{' '}
      <path
        d="M18.4406 21.66C17.7806 21.89 17.0206 22 16.1906 22H7.81055C6.98055 22 6.22055 21.89 5.56055 21.66C5.91055 19.02 8.67055 16.97 12.0005 16.97C15.3305 16.97 18.0906 19.02 18.4406 21.66Z"
        fill="#fff"
      />{' '}
      <path
        d="M15.5799 11.58C15.5799 13.56 13.9799 15.17 11.9999 15.17C10.0199 15.17 8.41992 13.56 8.41992 11.58C8.41992 9.60002 10.0199 8 11.9999 8C13.9799 8 15.5799 9.60002 15.5799 11.58Z"
        fill="#fff"
      />{' '}
    </g>
  </svg>
);
