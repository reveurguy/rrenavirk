import { cn } from '@/lib/utils';
import * as TabsPrimitives from '@radix-ui/react-tabs';
import React from 'react';

const Tabs = (
  props: Omit<
    React.ComponentPropsWithoutRef<typeof TabsPrimitives.Root>,
    'orientation'
  >
) => {
  return <TabsPrimitives.Root {...props} />;
};

Tabs.displayName = 'Tabs';

type TabsListVariant = 'line' | 'solid';

const TabsListVariantContext = React.createContext<TabsListVariant>('line');

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitives.List> {
  variant?: TabsListVariant;
}

const variantStyles: Record<TabsListVariant, string> = {
  line: cn(
    // base
    'flex items-center justify-start border-b',
    // border color
    'border-zinc-200 dark:border-zinc-800'
  ),
  solid: cn(
    // base
    'inline-flex items-center justify-center rounded-md p-1',
    // border color
    // "border-zinc-200 dark:border-zinc-800",
    // background color
    'bg-zinc-100 dark:bg-zinc-800'
  ),
};

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitives.List>,
  TabsListProps
>(({ className, variant = 'line', children, ...props }, forwardedRef) => (
  <TabsPrimitives.List
    ref={forwardedRef}
    className={cn(variantStyles[variant], className)}
    {...props}>
    <TabsListVariantContext.Provider value={variant}>
      {children}
    </TabsListVariantContext.Provider>
  </TabsPrimitives.List>
));

TabsList.displayName = 'TabsList';

function getVariantStyles(tabVariant: TabsListVariant) {
  switch (tabVariant) {
    case 'line':
      return cn(
        // base
        '-mb-px items-center justify-center whitespace-nowrap border-b-4 border-transparent px-4 pb-1 text-lg font-medium tracking-tight transition-all focus:outline-0 focus-visible:outline-0 focus:ring-transparent focus-visible:ring-transparent focus:border-transparent focus-visible:border-transparent focus-visible:outline-offset-0',
        // text color
        'text-zinc-500 dark:text-zinc-500',
        // hover
        'hover:text-zinc-700 hover:dark:text-zinc-400',
        // border hover
        // selected
        'data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:font-semibold',
        // disabled
        'disabled:pointer-events-none',
        'disabled:text-zinc-300 disabled:dark:text-zinc-700'
      );
    case 'solid':
      return cn(
        // base
        'inline-flex items-center justify-center whitespace-nowrap rounded px-3 py-1 transition-all text-sm font-medium',
        // text color
        'text-zinc-500 dark:text-zinc-400',
        // hover
        'hover:text-zinc-700 hover:dark:text-zinc-200',
        // selected
        ' data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow',
        'data-[state=active]:dark:bg-black data-[state=active]:dark:text-zinc-50',
        // disabled
        'disabled:pointer-events-none disabled:text-zinc-400 disabled:dark:text-zinc-600 disabled:opacity-50'
      );
  }
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitives.Trigger>
>(({ className, children, ...props }, forwardedRef) => {
  const variant = React.useContext(TabsListVariantContext);
  return (
    <TabsPrimitives.Trigger
      ref={forwardedRef}
      className={cn(getVariantStyles(variant), className)}
      {...props}>
      {children}
    </TabsPrimitives.Trigger>
  );
});

TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitives.Content>
>(({ className, ...props }, forwardedRef) => (
  <TabsPrimitives.Content
    ref={forwardedRef}
    className={cn('outline-none', className)}
    {...props}
  />
));

TabsContent.displayName = 'TabsContent';

export { Tabs, TabsContent, TabsList, TabsTrigger };
