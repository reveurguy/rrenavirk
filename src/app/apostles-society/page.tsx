'use client';
import DiscussionCard from '@/components/discussion-card';
import { useOutsideClick } from '@/utils/hooks';
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import {
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import { Button, Input } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';
import { SearchIcon } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';

export default function ApostlesSociety() {
  // const discussions = [
  //   {
  //     title: "How to get started with Apostles Society?",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum repellendus sapiente consectetur quo molestiae dolorem impedit, iusto odit nam consequatur officiis, reprehenderit dignissimos ratione. Hic nostrum dolor necessitatibus corrupti?",
  //     tags: ["Getting Started", "Help"],
  //     askedBy: "John Doe",
  //     date: "June 18, 2024",
  //   },
  //   {
  //     title: "How to get started with Apostles Society?",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum repellendus sapiente consectetur quo molestiae dolorem impedit, iusto odit nam consequatur officiis, reprehenderit dignissimos ratione. Hic nostrum dolor necessitatibus corrupti?",
  //     tags: ["Getting Started", "Help"],
  //     askedBy: "John Doe",
  //     date: "June 18, 2024",
  //   },
  //   {
  //     title: "How to get started with Apostles Society?",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum repellendus sapiente consectetur quo molestiae dolorem impedit, iusto odit nam consequatur officiis, reprehenderit dignissimos ratione. Hic nostrum dolor necessitatibus corrupti?",
  //     tags: ["Getting Started", "Help"],
  //     askedBy: "John Doe",
  //     date: "June 18, 2024",
  //   },
  //   {
  //     title: "How to get started with Apostles Society?",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum repellendus sapiente consectetur quo molestiae dolorem impedit, iusto odit nam consequatur officiis, reprehenderit dignissimos ratione. Hic nostrum dolor necessitatibus corrupti?",
  //     tags: ["Getting Started", "Help"],
  //     askedBy: "John Doe",
  //     date: "June 18, 2024",
  //   },
  //   {
  //     title: "How to get started with Apostles Society?",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum repellendus sapiente consectetur quo molestiae dolorem impedit, iusto odit nam consequatur officiis, reprehenderit dignissimos ratione. Hic nostrum dolor necessitatibus corrupti?",
  //     tags: ["Getting Started", "Help"],
  //     askedBy: "John Doe",
  //     date: "June 18, 2024",
  //   },
  // ];
  const discussions = [
    {
      id: 1,
      title: 'Atque perspiciatis et et aut ut porro voluptatem blanditiis?',
      href: '#',
      author: { name: 'Leslie Alexander', href: '#' },
      date: '2d ago',
      dateTime: '2023-01-23T22:34Z',
      status: 'active',
      totalComments: 24,
      commenters: [
        {
          id: 12,
          name: 'Emma Dorsey',
          imageUrl:
            'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 6,
          name: 'Tom Cook',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 4,
          name: 'Lindsay Walton',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 16,
          name: 'Benjamin Russel',
          imageUrl:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 23,
          name: 'Hector Gibbons',
          imageUrl:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
    },
    {
      id: 2,
      title: 'Et ratione distinctio nesciunt recusandae vel ab?',
      href: '#',
      author: { name: 'Michael Foster', href: '#' },
      date: '2d ago',
      dateTime: '2023-01-23T19:20Z',
      status: 'active',
      totalComments: 6,
      commenters: [
        {
          id: 13,
          name: 'Alicia Bell',
          imageUrl:
            'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 16,
          name: 'Benjamin Russel',
          imageUrl:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 3,
          name: 'Dries Vincent',
          imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
    },
    {
      id: 3,
      title: 'Blanditiis perferendis fugiat optio dolor minus ut?',
      href: '#',
      author: { name: 'Dries Vincent', href: '#' },
      date: '3d ago',
      dateTime: '2023-01-22T12:59Z',
      status: 'resolved',
      totalComments: 22,
      commenters: [
        {
          id: 19,
          name: 'Lawrence Hunter',
          imageUrl:
            'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 21,
          name: 'Angela Fisher',
          imageUrl:
            'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 14,
          name: 'Jenny Wilson',
          imageUrl:
            'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 16,
          name: 'Benjamin Russel',
          imageUrl:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
    },
    {
      id: 4,
      title: 'Voluptatum ducimus voluptatem qui in eum quasi consequatur vel?',
      href: '#',
      author: { name: 'Lindsay Walton', href: '#' },
      date: '5d ago',
      dateTime: '2023-01-20T10:04Z',
      status: 'resolved',
      totalComments: 8,
      commenters: [
        {
          id: 10,
          name: 'Emily Selman',
          imageUrl:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 11,
          name: 'Kristin Watson',
          imageUrl:
            'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
    },
    {
      id: 5,
      title: 'Perferendis cum qui inventore ut excepturi nostrum occaecati?',
      href: '#',
      author: { name: 'Courtney Henry', href: '#' },
      date: '5d ago',
      dateTime: '2023-01-20T20:12Z',
      status: 'active',
      totalComments: 15,
      commenters: [
        {
          id: 11,
          name: 'Kristin Watson',
          imageUrl:
            'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 6,
          name: 'Tom Cook',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 10,
          name: 'Emily Selman',
          imageUrl:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 16,
          name: 'Benjamin Russel',
          imageUrl:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
    },
  ];
  const [active, setActive] = useState<
    (typeof discussions)[number] | boolean | null
  >(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));
  const moods = [
    {
      name: 'Excited',
      value: 'excited',
      icon: FireIcon,
      iconColor: 'text-white',
      bgColor: 'bg-red-500',
    },
    {
      name: 'Loved',
      value: 'loved',
      icon: HeartIcon,
      iconColor: 'text-white',
      bgColor: 'bg-pink-400',
    },
    {
      name: 'Happy',
      value: 'happy',
      icon: FaceSmileIcon,
      iconColor: 'text-white',
      bgColor: 'bg-green-400',
    },
    {
      name: 'Sad',
      value: 'sad',
      icon: FaceFrownIcon,
      iconColor: 'text-white',
      bgColor: 'bg-yellow-400',
    },
    {
      name: 'Thumbsy',
      value: 'thumbsy',
      icon: HandThumbUpIcon,
      iconColor: 'text-white',
      bgColor: 'bg-blue-500',
    },
    {
      name: 'I feel nothing',
      value: null,
      icon: XMarkIcon,
      iconColor: 'text-gray-400',
      bgColor: 'bg-transparent',
    },
  ];

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
  }
  const [selected, setSelected] = useState(moods[5]);
  return (
    <>
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 size-full bg-black/70 backdrop-blur-md"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className="fixed inset-0 z-[100] mx-auto size-full items-center overflow-auto p-6">
            <motion.div
              // layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex size-full flex-col overflow-auto rounded-xl bg-white p-6">
              <div className="grid grid-cols-5 pt-3">
                <div className="col-span-4 px-2">
                  <div className="flex flex-col">
                    <div className="flex items-start gap-7">
                      <div className="ring-black-200 hover:bg-supahub-primary/10 hover:ring-supahub-primary dark:ring-white-200 dark:hover:bg-supahub-primary/20 smalltext-medium group flex h-fit min-w-[40px] shrink-0 grow-0 cursor-pointer flex-col items-center rounded-lg px-2 py-1.5 ring-1 ring-inset transition-all duration-300 dark:hover:ring-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                          className="text-black-500 group-hover:text-black-900 dark:text-white-700 dark:group-hover:text-white-900">
                          <path d="M208,160H48l80-80Z" opacity="0.2" />
                          <path d="M213.66,154.34l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,168H208a8,8,0,0,0,5.66-13.66ZM67.31,152,128,91.31,188.69,152Z" />
                        </svg>
                        <span className="text-black-700 group-hover:text-black-900 dark:text-white-700 dark:group-hover:text-white-900">
                          2
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <h1 className="text-2xl font-bold">{active.title}</h1>
                        <div className="mt-1 flex items-center">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Tempora similique cumque laboriosam temporibus
                          accusantium voluptate perspiciatis est delectus quidem
                          nobis sequi, maiores, expedita cupiditate inventore
                          repellendus numquam? Atque, quis libero.
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 px-5">
                      <div className="flex items-center gap-2 text-lg font-bold">
                        2 comments
                      </div>
                      <div className="mt-6 px-10">
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-col gap-2 rounded-2xl p-4 sm:p-3">
                            <div className="flex flex-row gap-4 rounded-2xl sm:gap-3">
                              <div className="flex flex-col items-center">
                                <div
                                  className="relative flex"
                                  data-state="closed">
                                  {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                    className="absolute -bottom-0.5 -right-1 rounded-full bg-white-900 text-supahub-primary ring-1 ring-white-900 icon-3.5 dark:bg-black-1000 dark:ring-black-1000"
                                  >
                                    <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                                  </svg> */}
                                  <div className="avatar flex size-8 shrink-0 grow-0 items-center justify-center overflow-hidden rounded-full last:ml-0">
                                    <img
                                      alt="Ayush Jangra"
                                      loading="lazy"
                                      width="0"
                                      height="0"
                                      decoding="async"
                                      data-nimg="1"
                                      className="size-full object-cover"
                                      sizes="100vw"
                                      src={active.commenters[0].imageUrl}
                                      // srcset="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLVMNAEiKUs3l5O3wUy7a15Fpkal8HWYfhmsiM0--60EQ%3Ds96-c&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLVMNAEiKUs3l5O3wUy7a15Fpkal8HWYfhmsiM0--60EQ%3Ds96-c&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLVMNAEiKUs3l5O3wUy7a15Fpkal8HWYfhmsiM0--60EQ%3Ds96-c&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLVMNAEiKUs3l5O3wUy7a15Fpkal8HWYfhmsiM0--60EQ%3Ds96-c&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLVMNAEiKUs3l5O3wUy7a15Fpkal8HWYfhmsiM0--60EQ%3Ds96-c&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLVMNAEiKUs3l5O3wUy7a15Fpkal8HWYfhmsiM0--60EQ%3Ds96-c&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLVMNAEiKUs3l5O3wUy7a15Fpkal8HWYfhmsiM0--60EQ%3Ds96-c&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLVMNAEiKUs3l5O3wUy7a15Fpkal8HWYfhmsiM0--60EQ%3Ds96-c&amp;w=3840&amp;q=75 3840w"
                                      // src="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLVMNAEiKUs3l5O3wUy7a15Fpkal8HWYfhmsiM0--60EQ%3Ds96-c&amp;w=3840&amp;q=75"
                                    />
                                  </div>
                                </div>
                                <div className="mt-2 inline-block h-[calc(100%-40px)] w-px shrink-0 grow-0 rounded-full bg-zinc-300 bg-gradient-to-b from-zinc-300 to-white" />
                              </div>
                              <div className="flex flex-1 flex-col">
                                <div className="flex items-center justify-between">
                                  <div className="flex flex-col gap-1">
                                    <div className="flex flex-col items-center gap-3 sm:flex-row">
                                      <span className="text-lg font-bold">
                                        John Doe
                                      </span>
                                      <div className="flex flex-row flex-wrap items-center gap-1">
                                        <span className="inline-flex gap-1 text-xs text-black">
                                          12 Jun &apos;24, 06:25 pm{' '}
                                        </span>
                                      </div>
                                    </div>
                                    {/* <span className="mb-1 flex flex-row flex-wrap items-center gap-1.5 text-black-700 smalltext-medium dark:text-white-700">
                                      updated status to{" "}
                                      <div className="smalltext-medium truncate py-1 px-2 inline-flex h-fit items-center truncate rounded-full max-w-[280px] sm:max-w-[240px] tag-black">
                                        <div className="inline-flex items-center truncate ">
                                          <div className="flex items-center icon-sm text-orange-500 dark:text-orange-400">
                                            <svg
                                              width="100%"
                                              height="100%"
                                              viewBox="0 0 24 24"
                                              fill="inherit"
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="icon-sm fill-orange-500 dark:fill-orange-400"
                                            >
                                              <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
                                              ></path>
                                            </svg>
                                          </div>
                                          <span className="truncate px-1">
                                            Planned
                                          </span>
                                        </div>
                                      </div>
                                    </span> */}
                                  </div>
                                  <div className="h-full" />
                                </div>
                                <p className="mt-1 text-[15px]">
                                  <p>
                                    That&apos;s a really great suggestion,
                                    Casper.
                                  </p>
                                </p>
                                <div className="mb-1 mt-2 flex flex-row">
                                  <div data-state="closed" className="flex">
                                    <Button
                                      variant="light"
                                      size="sm"
                                      className="flex items-center"
                                      data-disabled="false">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        fill="currentColor"
                                        viewBox="0 0 256 256"
                                        className="size-4">
                                        <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
                                      </svg>
                                      <span className="truncate text-sm">
                                        1
                                      </span>
                                    </Button>
                                  </div>
                                  <div className="inline-flex w-full justify-between">
                                    <Button
                                      size="sm"
                                      variant="light"
                                      className="text-base"
                                      data-disabled="false">
                                      <span className="truncate">Reply</span>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-black-600 caption-medium mx-auto" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-col gap-2 rounded-2xl p-4 sm:p-3">
                            <div className="flex flex-row gap-4 rounded-2xl sm:gap-3">
                              <div className="flex flex-col items-center">
                                <div
                                  className="relative flex"
                                  data-state="closed">
                                  {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                    className="absolute -bottom-0.5 -right-1 rounded-full bg-white-900 text-supahub-primary ring-1 ring-white-900 icon-3.5 dark:bg-black-1000 dark:ring-black-1000"
                                  >
                                    <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                                  </svg> */}
                                  <div className="avatar flex size-8 shrink-0 grow-0 items-center justify-center overflow-hidden rounded-full last:ml-0">
                                    <img
                                      alt="Ayush Jangra"
                                      loading="lazy"
                                      width="0"
                                      height="0"
                                      decoding="async"
                                      data-nimg="1"
                                      className="size-full object-cover"
                                      sizes="100vw"
                                      src={active.commenters[0].imageUrl}
                                      // srcset="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLVMNAEiKUs3l5O3wUy7a15Fpkal8HWYfhmsiM0--60EQ%3Ds96-c&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLVMNAEiKUs3l5O3wUy7a15Fpkal8HWYfhmsiM0--60EQ%3Ds96-c&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLVMNAEiKUs3l5O3wUy7a15Fpkal8HWYfhmsiM0--60EQ%3Ds96-c&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLVMNAEiKUs3l5O3wUy7a15Fpkal8HWYfhmsiM0--60EQ%3Ds96-c&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLVMNAEiKUs3l5O3wUy7a15Fpkal8HWYfhmsiM0--60EQ%3Ds96-c&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLVMNAEiKUs3l5O3wUy7a15Fpkal8HWYfhmsiM0--60EQ%3Ds96-c&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLVMNAEiKUs3l5O3wUy7a15Fpkal8HWYfhmsiM0--60EQ%3Ds96-c&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLVMNAEiKUs3l5O3wUy7a15Fpkal8HWYfhmsiM0--60EQ%3Ds96-c&amp;w=3840&amp;q=75 3840w"
                                      // src="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLVMNAEiKUs3l5O3wUy7a15Fpkal8HWYfhmsiM0--60EQ%3Ds96-c&amp;w=3840&amp;q=75"
                                    />
                                  </div>
                                </div>
                                <div className="mt-2 inline-block h-[calc(100%-40px)] w-px shrink-0 grow-0 rounded-full bg-zinc-300 bg-gradient-to-b from-zinc-300 to-white" />
                              </div>
                              <div className="flex flex-1 flex-col">
                                <div className="flex items-center justify-between">
                                  <div className="flex flex-col gap-1">
                                    <div className="flex flex-col items-center gap-3 sm:flex-row">
                                      <span className="text-lg font-bold">
                                        John Doe
                                      </span>
                                      <div className="flex flex-row flex-wrap items-center gap-1">
                                        <span className="inline-flex gap-1 text-xs text-black">
                                          12 Jun &apos;24, 06:25 pm{' '}
                                        </span>
                                      </div>
                                    </div>
                                    {/* <span className="mb-1 flex flex-row flex-wrap items-center gap-1.5 text-black-700 smalltext-medium dark:text-white-700">
                                      updated status to{" "}
                                      <div className="smalltext-medium truncate py-1 px-2 inline-flex h-fit items-center truncate rounded-full max-w-[280px] sm:max-w-[240px] tag-black">
                                        <div className="inline-flex items-center truncate ">
                                          <div className="flex items-center icon-sm text-orange-500 dark:text-orange-400">
                                            <svg
                                              width="100%"
                                              height="100%"
                                              viewBox="0 0 24 24"
                                              fill="inherit"
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="icon-sm fill-orange-500 dark:fill-orange-400"
                                            >
                                              <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
                                              ></path>
                                            </svg>
                                          </div>
                                          <span className="truncate px-1">
                                            Planned
                                          </span>
                                        </div>
                                      </div>
                                    </span> */}
                                  </div>
                                  <div className="h-full" />
                                </div>
                                <p className="mt-1 text-[15px]">
                                  <p>
                                    That&apos;s a really great suggestion,
                                    Casper.
                                  </p>
                                </p>
                                <div className="mb-1 mt-2 flex flex-row">
                                  <div data-state="closed" className="flex">
                                    <Button
                                      variant="light"
                                      size="sm"
                                      className="flex items-center"
                                      data-disabled="false">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        fill="currentColor"
                                        viewBox="0 0 256 256"
                                        className="size-4">
                                        <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
                                      </svg>
                                      <span className="truncate text-sm">
                                        1
                                      </span>
                                    </Button>
                                  </div>
                                  <div className="inline-flex w-full justify-between">
                                    <Button
                                      size="sm"
                                      variant="light"
                                      className="text-base"
                                      data-disabled="false">
                                      <span className="truncate">Reply</span>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-black-600 caption-medium mx-auto" />
                        </div>
                      </div>
                      {/* <div className="flex justify-end pr-32 w-full">
                        <textarea className="w-full h-20 border border-zinc-200 rounded-md p-2 max-w-3xl"></textarea>
                      </div> */}
                      <div className="mt-5 flex items-start space-x-4 px-14">
                        <div className="shrink-0">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="inline-block size-10 rounded-full"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <form action="#" className="relative">
                            <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                              <label htmlFor="comment" className="sr-only">
                                Add your comment
                              </label>
                              <textarea
                                id="comment"
                                name="comment"
                                rows={3}
                                placeholder="Add your comment..."
                                className="block w-full resize-none border-0 bg-transparent px-4 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:ring-transparent focus-visible:outline-none focus-visible:ring-transparent sm:text-sm sm:leading-6"
                                defaultValue={''}
                              />

                              {/* Spacer element to match the height of the toolbar */}
                              <div aria-hidden="true" className="py-2">
                                {/* Matches height of button in toolbar (1px border + 36px content height) */}
                                <div className="py-px">
                                  <div className="h-9" />
                                </div>
                              </div>
                            </div>

                            <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                              <div className="flex items-center space-x-5">
                                <div className="flex items-center">
                                  <button
                                    type="button"
                                    className="-m-2.5 flex size-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                                    <PaperClipIcon
                                      aria-hidden="true"
                                      className="size-5"
                                    />
                                    <span className="sr-only">
                                      Attach a file
                                    </span>
                                  </button>
                                </div>
                                <div className="flex items-center">
                                  <Listbox
                                    value={selected}
                                    onChange={setSelected}>
                                    <Label className="sr-only">Your mood</Label>
                                    <div className="relative">
                                      <ListboxButton className="relative -m-2.5 flex size-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                                        <span className="flex items-center justify-center">
                                          {selected.value === null ? (
                                            <span>
                                              <FaceSmileIcon
                                                aria-hidden="true"
                                                className="size-5 shrink-0"
                                              />
                                              <span className="sr-only">
                                                Add your mood
                                              </span>
                                            </span>
                                          ) : (
                                            <span>
                                              <span
                                                className={classNames(
                                                  selected.bgColor,
                                                  'flex h-8 w-8 items-center justify-center rounded-full'
                                                )}>
                                                <selected.icon
                                                  aria-hidden="true"
                                                  className="size-5 shrink-0 text-white"
                                                />
                                              </span>
                                              <span className="sr-only">
                                                {selected.name}
                                              </span>
                                            </span>
                                          )}
                                        </span>
                                      </ListboxButton>

                                      <ListboxOptions
                                        transition
                                        className="absolute z-10 -ml-6 mt-1 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:ml-auto sm:w-64 sm:text-sm">
                                        {moods.map((mood) => (
                                          <ListboxOption
                                            key={mood.value}
                                            value={mood}
                                            className="relative cursor-default select-none bg-white px-3 py-2 data-[focus]:bg-gray-100">
                                            <div className="flex items-center">
                                              <div
                                                className={classNames(
                                                  mood.bgColor,
                                                  'flex h-8 w-8 items-center justify-center rounded-full'
                                                )}>
                                                <mood.icon
                                                  aria-hidden="true"
                                                  className={classNames(
                                                    mood.iconColor,
                                                    'h-5 w-5 flex-shrink-0'
                                                  )}
                                                />
                                              </div>
                                              <span className="ml-3 block truncate font-medium">
                                                {mood.name}
                                              </span>
                                            </div>
                                          </ListboxOption>
                                        ))}
                                      </ListboxOptions>
                                    </div>
                                  </Listbox>
                                </div>
                              </div>
                              <div className="shrink-0">
                                <button
                                  type="submit"
                                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                  Post
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 px-4">
                  <ul role="list" className="divide-y divide-zinc-200">
                    {/* {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img alt="" src={person.imageUrl} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.role}</p>
            {person.lastSeen ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            )}
          </div>
        </li>
      ))} */}
                    <li className="flex flex-col gap-2 py-5">
                      <p className="font-medium tracking-tight">Participants</p>
                      <div className="flex -space-x-0.5">
                        <dt className="sr-only">Commenters</dt>
                        {active.commenters.map((commenter) => (
                          <dd key={commenter.id}>
                            <img
                              alt={commenter.name}
                              src={commenter.imageUrl}
                              className="size-6 rounded-full bg-gray-50 ring-2 ring-white"
                            />
                          </dd>
                        ))}
                      </div>
                    </li>
                    <li className="flex flex-col gap-2 py-5">
                      <p className="font-medium tracking-tight">Tags</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                          Poetry
                        </span>
                        <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                          Fiction
                        </span>
                        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                          William Shakespeare
                        </span>
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          English
                        </span>
                      </div>
                    </li>
                    <li className="flex flex-col gap-2 py-5">
                      <p className="font-medium tracking-tight">Posted by</p>
                      <div className="flex items-center gap-2">
                        <img
                          alt="Logo"
                          src={active.commenters[1].imageUrl}
                          width={30}
                          height={30}
                          className="size-7 rounded-full"
                        />
                        <span className="text-sm font-medium">John Doe</span>
                      </div>
                    </li>
                    <li className="flex flex-col gap-2 py-5">
                      <p className="font-medium tracking-tight">Posted on</p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold tracking-tight">
                          12 Jun &apos;24, 06:25 pm
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="-mt-11 mb-20 flex min-h-screen w-full flex-col">
        {/* <div className="mt-10 px-20">
        <Card className="rounded-md">
          <div className="h-8 w-full bg-[#F9627D] " />
          <div className="p-3 pt-2">
            <CardHeader className="font-bold text-2xl tracking-tight">
              Welcome to Apostles Society!
            </CardHeader>
            <CardBody className="pt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              nostrum repellendus sapiente consectetur quo molestiae dolorem
              impedit, iusto odit nam consequatur officiis, reprehenderit
              dignissimos ratione. Hic nostrum dolor necessitatibus corrupti?
            </CardBody>
          </div>
        </Card>
      </div> */}
        <section className="flex w-full items-center justify-center bg-[url('/bg.jpeg')] bg-cover bg-repeat-round py-20 hue-rotate-[320deg]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-7">
              <div className="flex flex-col items-center justify-center space-y-6 text-center">
                <h1
                  className={`z-10 w-full text-center text-[30px] font-black tracking-tight text-white md:text-[4rem] md:leading-[0.9]`}>
                  Welcome to Apostles Society!
                </h1>
                <p
                  className={`mx-auto max-w-[700px] text-center text-base font-medium text-white sm:max-w-[75%] md:text-xl md:leading-[1.1]`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora nostrum repellendus sapiente consectetur quo molestiae
                  dolorem impedit, iusto odit nam consequatur officiis,
                  reprehenderit dignissimos ratione. Hic nostrum dolor
                  necessitatibus corrupti?
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="flex w-full items-center px-20 mt-10 gap-40">
        <Input
          startContent={<SearchIcon size={20} className="mr-2 text-zinc-500" />}
          placeholder="Search discussions..."
        />
        <div className="flex items-center gap-4">
          <Button variant="flat">Sort</Button>
          <Button variant="flat">Filter</Button>
          <Button color="secondary" className=" text-white" size="md">
            New Discussion
          </Button>
        </div>
      </div>
      <div className="flex flex-1 mt-10 px-20 w-full">
        <main className="flex-1 w-full">
          <div className="flex items-center justify-between">
          </div>
          <div>
            <ul role="list" className="divide-y divide-gray-100">
      {discussions.map((discussion, index) => (
        <li
          key={index}
          className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap"
        >
          <div>
            <p className="text-sm font-semibold leading-6 text-gray-900">
              <a href={discussion.href} className="hover:underline">
                {discussion.title}
              </a>
            </p>
            <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
              <p>
                <a href={discussion.author.href} className="hover:underline">
                  {discussion.author.name}
                </a>
              </p>
              <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <p>
                <time dateTime={discussion.dateTime}>{discussion.date}</time>
              </p>
            </div>
          </div>
          <dl className="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
            <div className="flex -space-x-0.5">
              <dt className="sr-only">Commenters</dt>
              {discussion.commenters.map((commenter) => (
                <dd key={commenter.id}>
                  <img
                    alt={commenter.name}
                    src={commenter.imageUrl}
                    className="h-6 w-6 rounded-full bg-gray-50 ring-2 ring-white"
                  />
                </dd>
              ))}
            </div>
            <div className="flex w-16 gap-x-1.5">
              <dt>
                <span className="sr-only">Total comments</span>
                {discussion.status === 'resolved' ? (
                  <CircleCheck aria-hidden="true" className="h-6 w-6 text-gray-400" />
                ) : (
                  <MessageCircleIcon aria-hidden="true" className="h-6 w-6 text-gray-400" />
                )}
              </dt>
              <dd className="text-sm leading-6 text-gray-900">{discussion.totalComments}</dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
          </div>
        </main>
      </div> */}
        <div className="mt-10 grid grid-cols-12">
          <div className="col-span-3 px-7">
            {/* <div className="flex flex-col">
              <p className="text-xl font-bold tracking-tight">Categories</p>
            </div>
            <div className="mt-1 flex flex-col space-y-1">
              <Button
                variant="light"
                className="justify-start text-base h-auto py-2 rounded-md gap-2"
              >
                <span className="size-1.5 bg-rose-500 rounded-full"></span>
                Poetry
              </Button>
              <Button
                variant="light"
                className="justify-start text-base h-auto py-2 rounded-md gap-2"
              >
                <span className="size-1.5 bg-amber-500 rounded-full"></span>
                Fiction
              </Button>
              <Button
                variant="light"
                className="justify-start text-base h-auto py-2 rounded-md gap-2"
              >
                <span className="size-1.5 bg-sky-500 rounded-full"></span>
                Non-Fiction
              </Button>
              <Button
                variant="light"
                className="justify-start text-base h-auto py-2 rounded-md gap-2"
              >
                <span className="size-1.5 bg-emerald-500 rounded-full"></span>
                Art
              </Button>
            </div>
            <div className="mt-4">
              <Card className=" w-full p-4">
                <CardHeader className="pt-0 px-0">
                  <p className="font-bold text-lg">Most Helpful</p>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>
                    Make beautiful websites regardless of your design
                    experience.
                  </p>
                </CardBody>
                <Divider />
              </Card>
            </div> */}
            <SideCard />
          </div>
          <div className="col-span-9">
            <div className="flex w-full items-center gap-40 px-10">
              <Input
                startContent={
                  <SearchIcon size={20} className="mr-2 text-zinc-500" />
                }
                placeholder="Search discussions..."
              />
              <div className="flex items-center gap-4">
                <Button variant="flat">Sort</Button>
                <Button variant="flat">Filter</Button>
                <Button color="secondary" className="text-white" size="md">
                  New Discussion
                </Button>
              </div>
            </div>
            <div className="mt-5 flex w-full flex-1 px-10">
              <main className="w-full flex-1">
                <div className="flex items-center justify-between" />
                <div>
                  {/* {discussions.map((discussion, index) => (
              <Card key={index} className="mt-4 w-full">
                <div className="p-4 w-full">
                  <CardHeader className="font-bold text-lg pb-0">
                    {discussion.title}
                  </CardHeader>
                  <CardBody className="pt-0 truncate w-full block opacity-50">{discussion.description}</CardBody>
                  <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {discussion.tags.map((tag, index) => (
                              <span key={index} className="inline-flex items-center rounded-md bg-[#40C9A2] px-2 py-1 text-xs font-medium text-white">
                              {tag}
                            </span>
                      ))}
                    </div>
                  </CardFooter>
                </div>
              </Card>
            ))} */}
                  <div className="mt-4 gap-y-1 space-y-2">
                    {discussions.map((discussion, index) => (
                      // <li
                      //   key={index}
                      //   className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap"
                      // >
                      //   <div>
                      //     <p className="text-sm font-semibold leading-6 text-gray-900">
                      //       <a href={discussion.href} className="hover:underline">
                      //         {discussion.title}
                      //       </a>
                      //     </p>
                      //     <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                      //       <p>
                      //         <a
                      //           href={discussion.author.href}
                      //           className="hover:underline"
                      //         >
                      //           {discussion.author.name}
                      //         </a>
                      //       </p>
                      //       <svg
                      //         viewBox="0 0 2 2"
                      //         className="h-0.5 w-0.5 fill-current"
                      //       >
                      //         <circle r={1} cx={1} cy={1} />
                      //       </svg>
                      //       <p>
                      //         <time dateTime={discussion.dateTime}>
                      //           {discussion.date}
                      //         </time>
                      //       </p>
                      //     </div>
                      //   </div>
                      //   <dl className="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
                      //     <div className="flex -space-x-0.5">
                      //       <dt className="sr-only">Commenters</dt>
                      //       {discussion.commenters.map((commenter) => (
                      //         <dd key={commenter.id}>
                      //           <img
                      //             alt={commenter.name}
                      //             src={commenter.imageUrl}
                      //             className="h-6 w-6 rounded-full bg-gray-50 ring-2 ring-white"
                      //           />
                      //         </dd>
                      //       ))}
                      //     </div>
                      //     <div className="flex w-16 gap-x-1.5">
                      //       <dt>
                      //         <span className="sr-only">Total comments</span>
                      //         {discussion.status === "resolved" ? (
                      //           <CircleCheck
                      //             aria-hidden="true"
                      //             className="h-6 w-6 text-gray-400"
                      //           />
                      //         ) : (
                      //           <MessageCircleIcon
                      //             aria-hidden="true"
                      //             className="h-6 w-6 text-gray-400"
                      //           />
                      //         )}
                      //       </dt>
                      //       <dd className="text-sm leading-6 text-gray-900">
                      //         {discussion.totalComments}
                      //       </dd>
                      //     </div>
                      //   </dl>
                      // </li>
                      <motion.div
                        layoutId={`card-${discussion.title}-${id}`}
                        key={discussion.title}
                        onClick={() => setActive(discussion)}
                        // className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                      >
                        <DiscussionCard key={index} discussion={discussion} />
                      </motion.div>
                    ))}
                  </div>
                  {/* <ExpandableCardDemo /> */}
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// "use client";
import SideCard from '@/components/sideCard';

function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 size-full bg-black/20"
          />
        )}
      </AnimatePresence>

      {/* Original Cards */}
      <ul className="mx-auto grid w-full max-w-2xl grid-cols-1 items-start gap-4 md:grid-cols-2">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="flex cursor-pointer flex-col rounded-xl p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800">
            <div className="flex w-full flex-col gap-4">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                {/* <Image
                  width={100}
                  height={100}
                  src={card.src as string}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                /> */}
              </motion.div>
              <div className="flex flex-col items-center justify-center">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="text-center text-base font-medium text-neutral-800 dark:text-neutral-200 md:text-left">
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-center text-base text-neutral-600 dark:text-neutral-400 md:text-left">
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>

      {/* Expanded Card Overlay */}
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-white lg:hidden"
              onClick={() => setActive(null)}>
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex size-full max-w-[500px] flex-col overflow-hidden bg-white dark:bg-neutral-900 sm:rounded-3xl md:h-fit md:max-h-[90%]">
              <motion.div layoutId={`image-${active.title}-${id}`}>
                {/* <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src as string}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                /> */}
              </motion.div>

              <div>
                <div className="flex items-start justify-between p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-base font-medium text-neutral-700 dark:text-neutral-200">
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-base text-neutral-600 dark:text-neutral-400">
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="rounded-full bg-green-500 px-4 py-3 text-sm font-bold text-white">
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="relative px-4 pt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-xs text-neutral-600 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] dark:text-neutral-400 md:h-fit md:text-sm lg:text-base">
                    {typeof active.content === 'function'
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: 'Lana Del Rey',
    title: 'Summertime Sadness',
    // src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: 'Visit',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
  },
  {
    description: 'Babbu Maan',
    title: 'Mitran Di Chhatri',
    // src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: 'Visit',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },

  {
    description: 'Metallica',
    title: 'For Whom The Bell Tolls',
    // src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: 'Visit',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      );
    },
  },
  {
    description: 'Lord Himesh',
    title: 'Aap Ka Suroor',
    // src: "https://assets.aceternity.com/demos/aap-ka-suroor.jpeg",
    ctaText: 'Visit',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          Himesh Reshammiya, a renowned Indian music composer, singer, and
          actor, is celebrated for his distinctive voice and innovative
          compositions. Born in Mumbai, India, he has become a prominent figure
          in the Bollywood music industry. <br /> <br /> His songs often feature
          a blend of contemporary and traditional Indian music, capturing the
          essence of modern Bollywood soundtracks. With a career spanning over
          two decades, Himesh Reshammiya has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },
];
