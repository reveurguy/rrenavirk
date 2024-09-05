'use client';
import { Button } from '@/components/ui/button';
import { CardDescription, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { cn } from '@nextui-org/react';
import { CalendarDays, Eye, HeartIcon, SquareArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ShortsPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-[70vh] w-full">
      {/* <h1 className="text-3xl font-black tracking-tight">Shorts View</h1> */}
      {/* <Card className="w-full h-full">
        <CardHeader>
          <CardTitle>


          </CardTitle>
        </CardHeader>
        <CardContent>
          <h1>Shorts</h1>
        </CardContent>
      </Card> */}
      <div className="flex size-full items-center justify-center">
        <Carousel className="w-full max-w-6xl rounded-lg">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-full">
                <div
                  className={cn(
                    'flex size-fit h-[50vh] flex-col overflow-hidden rounded-md bg-gray-100 md:flex-row'
                  )}>
                  <Dashboard />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-24" />
          <CarouselNext className="-right-24" />
        </Carousel>
        {/* <div
          className={cn(
            'flex size-fit flex-col overflow-hidden rounded-md border-2 border-neutral-200 bg-gray-100 md:flex-row'
          )}>
          <Dashboard />
        </div>
        <div
          className={cn(
            'flex size-fit flex-col overflow-hidden rounded-md border-2 border-neutral-200 bg-gray-100 md:flex-row'
          )}>
          <Dashboard />
        </div>
        <div
          className={cn(
            'flex size-fit flex-col overflow-hidden rounded-md border-2 border-neutral-200 bg-gray-100 md:flex-row'
          )}>
          <Dashboard />
        </div>
        <div
          className={cn(
            'flex size-fit flex-col overflow-hidden rounded-md border-2 border-neutral-200 bg-gray-100 md:flex-row'
          )}>
          <Dashboard />
        </div> */}
      </div>
    </div>
  );
}

const Dashboard = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex size-full flex-1 flex-col gap-2 rounded-r-sm bg-white p-2 dark:border-neutral-700 dark:bg-neutral-900 md:p-8">
        {/* <div className="flex items-center justify-between gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="h-auto w-fit px-1 py-2 hover:bg-zinc-50">
                <EllipsisVertical strokeWidth={2.5} className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Report</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View Profile</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div> */}
        <div className="mt-3 flex items-center justify-between gap-2">
          {/* {[...new Array(4)].map((i) => (
            <div
              key={"first-array" + i}
              className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))} */}
          <CardTitle className="text-5xl font-black tracking-tight">
            Heading
          </CardTitle>
          <div className="flex items-center gap-2">
            <Image src="/avatar.svg" alt="profile" width={40} height={40} />
            <HoverCard openDelay={0}>
              <HoverCardTrigger>
                <div className="flex cursor-pointer flex-col">
                  <p className="text-lg font-bold tracking-tight">John Doe</p>
                  <p className="-mt-1 text-sm font-medium tracking-tight text-zinc-400">
                    @johndoe
                  </p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="flex w-full justify-between space-x-4">
                  <div className="w-full">
                    <div className="flex w-full items-center justify-between">
                      <div>
                        <h1 className="text-xl font-bold tracking-tight">
                          John Doe
                        </h1>
                        <h4 className="-mt-1 text-sm font-medium tracking-tight text-zinc-400">
                          @johndoe
                        </h4>
                      </div>
                      <span className="rounded-md bg-[#F9627D]/20 px-2 py-1 text-xs font-bold text-[#F9627D] ring-1 ring-inset ring-[#F9627D]/20">
                        100k <span className="font-medium">Followers</span>
                      </span>
                    </div>
                    <p className="my-3 line-clamp-2 text-sm leading-[1.1]">
                      John Doe is a software engineer at Google. He is a full
                      stack developer and a blockchain developer.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center pt-2">
                        <CalendarDays className="mr-1 size-4" />
                        <span className="text-xs tracking-tight text-black/80">
                          Joined Dec&apos;2021
                        </span>
                      </div>
                      <Link href="/profile">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="h-auto bg-secondary px-4 py-1.5 text-white">
                          Visit Profile
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        <div className="mt-5 flex flex-1 gap-2">
          {/* {[...new Array(2)].map((i) => (
            <div
              key={"second-array" + i}
              className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))} */}
          <CardDescription className="pr-40">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minima repudiandae quis distinctio molestias. Aliquid enim minus
            laudantium corrupti, iste nesciunt obcaecati velit quasi accusantium
            rerum eaque hic quibusdam odio officiis!
          </CardDescription>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-xs font-medium tracking-tight">
              <HeartIcon className="size-5 cursor-pointer fill-rose-400/20 stroke-rose-500 hover:fill-rose-400" />
              100
            </span>
            <span className="mx-1 size-1 rounded-full bg-[#f9627d]" />
            <span className="flex items-center gap-1 text-xs font-medium tracking-tight">
              <Eye strokeWidth={2.5} className="size-5" />
              100k
            </span>
            <span className="mx-1 size-1 rounded-full bg-[#f9627d]" />
            <span className="flex items-center gap-1 text-xs font-medium tracking-tight">
              <ChatIcon />
              100k
            </span>
          </div>
          <Button
            size="sm"
            className="h-auto border-2 border-primary bg-primary/50 px-4 py-1.5 font-semibold">
            Share
            <SquareArrowUpRight className="ml-2 size-4 fill-white" />
          </Button>
        </div>
      </div>
      {/* <div className="w-full bg-zinc-200 flex items-center justify-between gap-3 p-3">
        <EyeIcon className="w-4 h-4" />
        <ChatBubbleBottomCenterIcon className="w-4 h-4" />
        <Button>
          Share
          <Share className="w-4 h-4" />
        </Button>
      </div> */}
    </div>
  );
};

const ChatIcon = () => (
  <svg
    className="size-5 cursor-pointer fill-amber-400/20 stroke-amber-500 hover:fill-amber-400"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={2.5}
    viewBox="0 0 24 24">
    <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455Z" />
  </svg>
);
