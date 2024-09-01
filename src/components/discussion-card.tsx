export default function DiscussionCard({ discussion, onClick }: any) {
  return (
    // <Card className="shadow-none border-0 hover:bg-zinc-100 cursor-pointer flex items-center justify-between divide-x gap-3">
    //   <CardHeader className="w-full">
    //     <CardTitle>{discussion.title}</CardTitle>
    //     <CardDescription className="truncate line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, modi voluptas sint alias dolorem earum asperiores quo id! Amet quaerat sapiente beatae veniam doloremque eveniet deleniti labore fugit. Temporibus, impedit!</CardDescription>
    //   </CardHeader>
    //   <div className="flex flex-col w-full">
    //     hello
    //   </div>
    // </Card>

    // TODO: Add the discussion card from supahub
    <>
      <div className="f flex w-full overflow-hidden rounded-xl transition-all duration-300 hover:bg-zinc-100">
        <div className="flex-1 cursor-pointer p-6">
          <h2 className="line-clamp-2 font-bold">{discussion.title}</h2>
          <p
            className="text-black-500 dark:text-white-500 mt-1 line-clamp-2"
            style={{ wordBreak: 'break-word' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            quisquam non voluptatum, quo illo natus nulla odit repellat
            explicabo magni reprehenderit cumque illum, in temporibus
            asperiores? Dignissimos rerum et sint? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Aut dolorum veritatis eum at ad, amet
            suscipit, fugiat voluptas accusantium reiciendis omnis repellendus
            nostrum facere aspernatur tempore eligendi quae sint autem.
          </p>
          <div className="mt-4 flex flex-row flex-wrap items-center justify-between gap-2">
            <div className="flex flex-row flex-wrap items-center gap-2">
              <div className="relative flex" data-state="closed">
                <div className="avatar flex size-6 shrink-0 grow-0 items-center justify-center overflow-hidden rounded-full last:ml-0">
                  <img
                    alt="Matthew"
                    loading="lazy"
                    width="0"
                    height="0"
                    decoding="async"
                    data-nimg="1"
                    className="size-full object-cover"
                    sizes="100vw"
                    src={discussion.commenters[0].imageUrl}
                    // srcset="/_next/image?url=https%3A%2F%2Frofqwcnzfkmhwfneeljb.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fsupahub%2Fsystem%2Fui%2Favatar%2Fghost-avatar.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Frofqwcnzfkmhwfneeljb.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fsupahub%2Fsystem%2Fui%2Favatar%2Fghost-avatar.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Frofqwcnzfkmhwfneeljb.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fsupahub%2Fsystem%2Fui%2Favatar%2Fghost-avatar.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Frofqwcnzfkmhwfneeljb.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fsupahub%2Fsystem%2Fui%2Favatar%2Fghost-avatar.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Frofqwcnzfkmhwfneeljb.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fsupahub%2Fsystem%2Fui%2Favatar%2Fghost-avatar.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Frofqwcnzfkmhwfneeljb.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fsupahub%2Fsystem%2Fui%2Favatar%2Fghost-avatar.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Frofqwcnzfkmhwfneeljb.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fsupahub%2Fsystem%2Fui%2Favatar%2Fghost-avatar.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Frofqwcnzfkmhwfneeljb.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fsupahub%2Fsystem%2Fui%2Favatar%2Fghost-avatar.png&amp;w=3840&amp;q=75 3840w"
                    // src="/_next/image?url=https%3A%2F%2Frofqwcnzfkmhwfneeljb.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fsupahub%2Fsystem%2Fui%2Favatar%2Fghost-avatar.png&amp;w=3840&amp;q=75"
                    style={{ color: 'transparent' }}
                  />
                </div>
              </div>
              <span className="text-black-700 smalltext-medium dark:text-white-700 line-clamp-1">
                Matthew
              </span>
              <div className="smalltext-medium tag-white inline-flex h-fit max-w-[280px] items-center truncate rounded-full px-2 py-1 sm:max-w-[240px]">
                <div className="inline-flex items-center truncate">
                  <span className="truncate px-1"> 📝 Poetry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-6 inline-block w-px shrink-0 grow-0 bg-slate-300" />
        <div className="flex flex-row">
          <div className="smalltext-medium group flex h-full w-16 min-w-[40px] cursor-pointer flex-col items-center justify-center rounded-none px-2 py-1.5 ring-black transition-all duration-300 hover:bg-secondary/10 hover:ring-secondary">
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
        </div>
      </div>
      <div className="mr-4 inline-block h-px w-full shrink-0 grow-0 bg-zinc-200" />
    </>
  );
}
