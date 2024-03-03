'use client';

import ListItem from './ListItem';
import { Workflow } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { siteConfig } from '../../config/site-config';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '../ui/navigation-menu';

export function MainMenu(props: any) {
  const { items } = props;
  console.log(props, 'props');
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
                  {items[0].items.map((item: any) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : null}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
