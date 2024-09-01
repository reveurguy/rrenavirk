import { Button } from '@nextui-org/react';
import { HeartIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
];

export default function SideCard() {
  return (
    <div>
      <div>
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="font-bold">Categories</CardTitle>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex flex-col">
              <Button
                variant="light"
                className="h-auto justify-start gap-2 rounded-md py-2 text-base">
                <span className="size-1.5 rounded-full bg-rose-500" />
                Poetry
              </Button>
              <Button
                variant="light"
                className="h-auto justify-start gap-2 rounded-md py-2 text-base">
                <span className="size-1.5 rounded-full bg-amber-500" />
                Fiction
              </Button>
              <Button
                variant="light"
                className="h-auto justify-start gap-2 rounded-md py-2 text-base">
                <span className="size-1.5 rounded-full bg-sky-500" />
                Non-Fiction
              </Button>
              <Button
                variant="light"
                className="h-auto justify-start gap-2 rounded-md py-2 text-base">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Art
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-4">
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center gap-2 border-b">
            <CardTitle className="font-bold">Most Popular</CardTitle>
            <p className="text-sm">last 30 days</p>
          </CardHeader>
          <CardContent className="px-4 pb-3">
            <div className="flex flex-col">
              <ul role="list" className="mt-2 divide-y divide-gray-100">
                {people.map((person) => (
                  <li
                    key={person.email}
                    className="flex items-center justify-between py-2.5">
                    <div className="flex gap-x-2">
                      <img
                        alt=""
                        src={person.imageUrl}
                        className="size-7 flex-none rounded-full bg-gray-50"
                      />
                      <p className="text-base font-medium leading-6 text-gray-900">
                        {person.name}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <HeartIcon className="size-4 fill-rose-400 stroke-rose-500" />
                      <span className="text-xs font-medium tracking-tight">
                        100
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
