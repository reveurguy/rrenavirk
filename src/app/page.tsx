'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from '@/components/ui/minimal-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  const cards = [
    {
      title: 'Title',
      description: 'Username',
    },
    {
      title: 'Title',
      description: 'Username',
    },
    {
      title: 'Title',
      description: 'Username',
    },
    {
      title: 'Title',
      description: 'Username',
    },
    {
      title: 'Title',
      description: 'Username',
    },
  ];

  const liked = [
    {
      id: 1,
      content: 'Liked',
      target: 'The Poetry of Silence',
      by: 'Emily Dickinson',
      href: '#',
      date: 'Jul 14',
      datetime: '2023-07-14',
      icon: HeartIcon,
      iconBackground: 'bg-pink-500',
    },
    {
      id: 2,
      content: 'Liked',
      target: 'How to Write Vivid Descriptions',
      by: 'Haruki Murakami',
      href: '#',
      date: 'Aug 1',
      datetime: '2023-08-01',
      icon: HeartIcon,
      iconBackground: 'bg-yellow-500',
    },
    {
      id: 3,
      content: 'Liked',
      target: 'The Power of Metaphors',
      by: 'Sylvia Plath',
      href: '#',
      date: 'Aug 15',
      datetime: '2023-08-15',
      icon: HeartIcon,
      iconBackground: 'bg-teal-500',
    },
    {
      id: 4,
      content: 'Liked',
      target: 'Mastering the Short Story',
      by: 'Ernest Hemingway',
      href: '#',
      date: 'Aug 29',
      datetime: '2023-08-29',
      icon: HeartIcon,
      iconBackground: 'bg-indigo-500',
    },
    {
      id: 5,
      content: 'Liked',
      target: 'Exploring Themes in Fiction',
      by: 'Virginia Woolf',
      href: '#',
      date: 'Sep 5',
      datetime: '2023-09-05',
      icon: HeartIcon,
      iconBackground: 'bg-purple-500',
    },
  ];

  const commented = [
    {
      id: 1,
      content: 'Commented',
      target: 'Narrative Voice in Modern Fiction',
      by: 'George Orwell',
      href: '#',
      date: 'Jul 20',
      datetime: '2023-07-20',
      icon: ChatIcon,
      iconBackground: 'bg-red-500',
    },
    {
      id: 2,
      content: 'Commented',
      target: 'Writing Realistic Dialogue',
      by: 'Toni Morrison',
      href: '#',
      date: 'Aug 3',
      datetime: '2023-08-03',
      icon: ChatIcon,
      iconBackground: 'bg-orange-500',
    },
    {
      id: 3,
      content: 'Commented',
      target: 'The Importance of Setting',
      by: 'F. Scott Fitzgerald',
      href: '#',
      date: 'Aug 10',
      datetime: '2023-08-10',
      icon: ChatIcon,
      iconBackground: 'bg-green-500',
    },
    {
      id: 4,
      content: 'Commented',
      target: 'Character Arcs and Growth',
      by: 'J.R.R. Tolkien',
      href: '#',
      date: 'Aug 24',
      datetime: '2023-08-24',
      icon: ChatIcon,
      iconBackground: 'bg-blue-500',
    },
    {
      id: 5,
      content: 'Commented',
      target: 'The Role of Conflict in Storytelling',
      by: 'Agatha Christie',
      href: '#',
      date: 'Sep 12',
      datetime: '2023-09-12',
      icon: ChatIcon,
      iconBackground: 'bg-purple-500',
    },
  ];

  const saved = [
    {
      id: 1,
      content: 'Saved',
      target: 'Guide to Writing Plot Twists',
      by: 'Gillian Flynn',
      href: '#',
      date: 'Jul 18',
      datetime: '2023-07-18',
      icon: SavedIcon,
      iconBackground: 'bg-gray-500',
    },
    {
      id: 2,
      content: 'Saved',
      target: 'Creating Believable Characters',
      by: 'Stephen King',
      href: '#',
      date: 'Aug 5',
      datetime: '2023-08-05',
      icon: SavedIcon,
      iconBackground: 'bg-blue-500',
    },
    {
      id: 3,
      content: 'Saved',
      target: 'Building Tension in Your Story',
      by: 'James Patterson',
      href: '#',
      date: 'Aug 14',
      datetime: '2023-08-14',
      icon: SavedIcon,
      iconBackground: 'bg-green-500',
    },
    {
      id: 4,
      content: 'Saved',
      target: 'Writing Compelling Villains',
      by: 'Neil Gaiman',
      href: '#',
      date: 'Aug 25',
      datetime: '2023-08-25',
      icon: SavedIcon,
      iconBackground: 'bg-purple-500',
    },
    {
      id: 5,
      content: 'Saved',
      target: 'Understanding Point of View',
      by: 'Margaret Atwood',
      href: '#',
      date: 'Sep 3',
      datetime: '2023-09-03',
      icon: SavedIcon,
      iconBackground: 'bg-yellow-500',
    },
  ];

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
  }

  const genres = [
    'Poetry',
    ' Fiction',
    'Non-Fiction',
    'Prose',
    'Mystery',
    'Drama',
  ];

  return (
    <main className="w-full">
      <div className="flex w-full items-center justify-between pr-20">
        <p className="px-12 text-2xl font-medium tracking-tight">
          Welcome Back, <span className="font-extrabold">John!</span>
        </p>
        <Carousel
          className="w-full max-w-md"
          opts={{
            slidesToScroll: 2,
            containScroll: 'trimSnaps',
          }}>
          <CarouselContent className="-ml-1">
            {Array.from(genres).map((data, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card className="cursor-pointer hover:bg-zinc-100">
                    <CardContent className="flex items-center justify-center p-1">
                      <span className="font-bold tracking-tight">{data}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="grid grid-cols-2 gap-4 p-6">
        <div className="col-span-1">
          <div className="w-full max-w-4xl">
            <div className="flex min-h-[500px] flex-col justify-center space-y-4 px-6">
              <div className="relative grid grid-cols-1 gap-8">
                {cards.map((card, index) => (
                  <MinimalCard className="p-3" key={index}>
                    <div className="flex gap-3">
                      <div className="flex w-full flex-col items-start justify-between p-2">
                        <div>
                          <MinimalCardTitle className="flex items-center gap-2">
                            {card.title}
                            <span className="inline-flex items-center rounded-md bg-[#F9627D]/10 px-2 py-0.5 text-xs font-medium text-[#F9627D]">
                              Format type
                            </span>
                          </MinimalCardTitle>
                          <MinimalCardDescription className="-mt-0.5">
                            {card.description}
                          </MinimalCardDescription>
                        </div>
                        <div className="line-clamp-5 text-sm leading-[1.2] text-black opacity-70">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Laboriosam impedit reprehenderit suscipit
                          exercitationem est natus soluta mollitia excepturi
                          debitis. Numquam incidunt modi temporibus ea
                          recusandae voluptatum fuga quod officia dolorem. Eos
                          culpa ipsam sit quasi optio! Velit iste in enim vel
                          unde aspernatur porro est eius accusamus ab, minus
                          quis iusto ea neque dolore hic! Ipsum sunt dicta
                          eveniet fugiat.
                        </div>
                        <div className="mt-5 flex items-center">
                          <span className="pr-2 text-xs font-medium tracking-tight">
                            100 views
                          </span>
                          <span className="mx-1 size-1 rounded-full bg-[#f9627d]" />
                          <span className="pl-2 text-xs font-medium tracking-tight">
                            100 likes
                          </span>
                        </div>
                      </div>
                      <MinimalCardImage
                        alt="Image"
                        src="https://www.cult-ui.com/basic-img.png"
                      />
                    </div>
                  </MinimalCard>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 h-fit">
          <div className="relative z-10 size-full rounded-lg bg-gradient-to-b from-[#F9627D]/40 via-[#F9627D]/30 to-[#f9627d]/20 shadow-xl">
            {/* <div className="absolute bottom-0 left-0 rounded-lg right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f26_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f26_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}
            {/* <div className="relative h-full w-full bg-slate-950"> */}
            {/* <div className="absolute bottom-0 -z-20 rounded-lg left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f26_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f26_1px,transparent_1px)] bg-[size:14px_24px]"></div> */}
            {/* </div> */}
            <div className="size-full rounded-lg bg-[url('/film_grain.png')] bg-cover bg-no-repeat p-8">
              <Card className="relative border-0 bg-white shadow-xl">
                {/* <div className="absolute inset-0 backdrop-blur-[5px] bg-white/60 rounded-lg m-2 z-20 flex items-center justify-center">
              <Crown />
              <p className="text-[#F9627d] text-3xl font-black">
                Premium Feature
              </p>
            </div> */}
                <CardHeader className="pb-4">
                  <CardTitle className="text-3xl font-black tracking-tight">
                    Library
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="liked">
                    <TabsList variant="line">
                      <TabsTrigger value="liked" className="inline-flex gap-2">
                        <HeartIcon />
                        Liked
                      </TabsTrigger>
                      <TabsTrigger
                        value="commented"
                        className="inline-flex gap-2">
                        <ChatIcon />
                        Commented
                      </TabsTrigger>
                      <TabsTrigger value="saved" className="inline-flex gap-2">
                        <SavedIcon />
                        Saved
                      </TabsTrigger>
                    </TabsList>
                    <div className="mt-2">
                      <TabsContent value="liked">
                        <div className="flow-root">
                          <ul role="list" className="-mb-2 mt-1 px-5">
                            {liked.map((event, eventIdx) => (
                              <li
                                key={event.id}
                                className="border-b last:border-b-0">
                                <div className="relative z-10 py-2">
                                  <div className="relative flex space-x-3">
                                    <div>
                                      <span
                                        className={classNames(
                                          'flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 ring-8 ring-white'
                                        )}>
                                        <event.icon aria-hidden="true" />
                                      </span>
                                    </div>
                                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                      <div>
                                        <p className="text-sm text-gray-500">
                                          {event.content}{' '}
                                          <a
                                            href={event.href}
                                            className="font-medium text-black">
                                            {event.target}
                                          </a>
                                          <span className="mx-1">by</span>
                                          <a
                                            href={event.href}
                                            className="font-medium text-black">
                                            {event.by}
                                          </a>
                                        </p>
                                      </div>
                                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                        <time dateTime={event.datetime}>
                                          {event.date}
                                        </time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>
                      <TabsContent value="commented">
                        <div className="flow-root">
                          <ul role="list" className="-mb-2 mt-1 px-5">
                            {commented.map((event, eventIdx) => (
                              <li
                                key={event.id}
                                className="border-b last:border-b-0">
                                <div className="relative z-10 py-2">
                                  <div className="relative flex space-x-3">
                                    <div>
                                      <span
                                        className={classNames(
                                          'flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 ring-8 ring-white'
                                        )}>
                                        <event.icon aria-hidden="true" />
                                      </span>
                                    </div>
                                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                      <div>
                                        <p className="text-sm text-gray-500">
                                          {event.content}{' '}
                                          <a
                                            href={event.href}
                                            className="font-medium text-black">
                                            {event.target}
                                          </a>
                                          <span className="mx-1">by</span>
                                          <a
                                            href={event.href}
                                            className="font-medium text-black">
                                            {event.by}
                                          </a>
                                        </p>
                                      </div>
                                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                        <time dateTime={event.datetime}>
                                          {event.date}
                                        </time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>
                      <TabsContent value="saved">
                        <div className="flow-root">
                          <ul role="list" className="-mb-2 mt-1 px-5">
                            {saved.map((event, eventIdx) => (
                              <li
                                key={event.id}
                                className="border-b last:border-b-0">
                                <div className="relative z-10 py-2">
                                  <div className="relative flex space-x-3">
                                    <div>
                                      <span
                                        className={classNames(
                                          'flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 ring-8 ring-white'
                                        )}>
                                        <event.icon aria-hidden="true" />
                                      </span>
                                    </div>
                                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                      <div>
                                        <p className="text-sm text-gray-500">
                                          {event.content}{' '}
                                          <a
                                            href={event.href}
                                            className="font-medium text-black">
                                            {event.target}
                                          </a>
                                          <span className="mx-1">by</span>
                                          <a
                                            href={event.href}
                                            className="font-medium text-black">
                                            {event.by}
                                          </a>
                                        </p>
                                      </div>
                                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                        <time dateTime={event.datetime}>
                                          {event.date}
                                        </time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>
                    </div>
                  </Tabs>
                </CardContent>
              </Card>
              <Card className="mt-10 border-0 bg-white shadow-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-3xl font-black tracking-tight">
                    Notice Board
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="follow">
                    <TabsList variant="line">
                      <TabsTrigger value="follow" className="inline-flex gap-2">
                        <HeartIcon />
                        Following
                      </TabsTrigger>
                      <TabsTrigger
                        value="community"
                        className="inline-flex gap-2">
                        <ChatIcon />
                        Community
                      </TabsTrigger>
                    </TabsList>
                    <div className="mt-5">
                      <TabsContent value="follow" className="space-y-4 px-5">
                        <Card>
                          <CardHeader className="flex-row items-center gap-2 space-y-0 pb-2 pt-4">
                            <svg
                              className="size-6"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor">
                              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" />
                            </svg>
                            <CardTitle>Notice</CardTitle>
                          </CardHeader>
                          <CardContent className="leading-[1.2]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iure laborum rerum impedit, aut alias autem
                            inventore quia fugit excepturi harum, exercitationem
                            velit rem ipsam veritatis in? Magnam ducimus eius
                            voluptas?
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="flex-row items-center gap-2 space-y-0 pb-2 pt-4">
                            <svg
                              className="size-6"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor">
                              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" />
                            </svg>
                            <CardTitle>Notice</CardTitle>
                          </CardHeader>
                          <CardContent className="leading-[1.2]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iure laborum rerum impedit, aut alias autem
                            inventore quia fugit excepturi harum, exercitationem
                            velit rem ipsam veritatis in? Magnam ducimus eius
                            voluptas?
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="community" className="space-y-4 px-5">
                        <Card>
                          <CardHeader className="flex-row items-center gap-2 space-y-0 pb-2 pt-4">
                            <svg
                              className="size-6"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor">
                              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" />
                            </svg>
                            <CardTitle>Notice</CardTitle>
                          </CardHeader>
                          <CardContent className="leading-[1.2]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iure laborum rerum impedit, aut alias autem
                            inventore quia fugit excepturi harum, exercitationem
                            velit rem ipsam veritatis in? Magnam ducimus eius
                            voluptas?
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="flex-row items-center gap-2 space-y-0 pb-2 pt-4">
                            <svg
                              className="size-6"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor">
                              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" />
                            </svg>
                            <CardTitle>Notice</CardTitle>
                          </CardHeader>
                          <CardContent className="leading-[1.2]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iure laborum rerum impedit, aut alias autem
                            inventore quia fugit excepturi harum, exercitationem
                            velit rem ipsam veritatis in? Magnam ducimus eius
                            voluptas?
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </div>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#F9627D"
    className="size-4">
    <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z" />
  </svg>
);

const ChatIcon = () => (
  <svg
    fill="#F0BB40"
    className="size-4"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455Z" />
  </svg>
);

const SavedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="size-4"
    fill="rgba(70,146,221,1)">
    <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2Z" />
  </svg>
);

const Crown = () => (
  <svg
    className="mr-2 size-10"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="rgba(240,187,64,1)">
    <path d="M2.80577 5.20006L7.00505 7.99958L11.1913 2.13881C11.5123 1.6894 12.1369 1.58531 12.5863 1.90631C12.6761 1.97045 12.7546 2.04901 12.8188 2.13881L17.0051 7.99958L21.2043 5.20006C21.6639 4.89371 22.2847 5.01788 22.5911 5.47741C22.7228 5.67503 22.7799 5.91308 22.7522 6.14895L21.109 20.1164C21.0497 20.62 20.6229 20.9996 20.1158 20.9996H3.8943C3.38722 20.9996 2.9604 20.62 2.90115 20.1164L1.25792 6.14895C1.19339 5.60045 1.58573 5.10349 2.13423 5.03896C2.37011 5.01121 2.60816 5.06832 2.80577 5.20006ZM12.0051 14.9996C13.1096 14.9996 14.0051 14.1042 14.0051 12.9996C14.0051 11.895 13.1096 10.9996 12.0051 10.9996C10.9005 10.9996 10.0051 11.895 10.0051 12.9996C10.0051 14.1042 10.9005 14.9996 12.0051 14.9996Z" />
  </svg>
);
