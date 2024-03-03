'use client';

import ListItem from './ListItem';
import { cn } from '@/lib/utils';
import { Workflow } from 'lucide-react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

import { siteConfig } from '../../config/site-config';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '../ui/navigation-menu';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function MainMenu(props: any) {
  const { items } = props;
  const segment = useSelectedLayoutSegment();
  const main_menu_experimental = false;
  return (
    <div className="hidden gap-6 lg:flex">
      <Link aria-label="Home" href="/" className="hidden items-center space-x-2 lg:flex">
        <Workflow className="h-6 w-6" />
        <span className="font-heading hidden font-bold lg:inline-block">Godjira</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {items?.[0]?.items ? (
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-auto">{items[0].title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        aria-label="Home"
                        className="flex h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href={siteConfig.company.link}
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">{siteConfig.name}</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {siteConfig.company.name}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
                  {items[0].items.map((item: any) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : null}
          {items
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            ?.filter((item: any) => item.title !== items[0]?.title)
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            .map((item: any) =>
              item?.items ? (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger className="h-auto capitalize">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
                      {item.items.map((item: any) => (
                        <ListItem key={item.title} title={item.title} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                item.href && (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), 'font-heading h-auto')}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )
            )}
          {main_menu_experimental && items?.length ? (
            <nav className="hidden gap-6 md:flex">
              {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
              {items.map((item: any, index: any) => (
                <Link
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={index}
                  href={item.disabled ? '#' : item.href ?? `${item.title}`}
                  className={cn(
                    'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                    item.href?.startsWith(`/${segment}`) ? 'text-foreground' : 'text-foreground/60',
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
