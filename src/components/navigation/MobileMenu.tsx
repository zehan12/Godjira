'use client';

import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { siteConfig } from '../../config/site-config';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';

import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

interface MobileMenuProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  MainMenuItems: any;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  sidebarNavItems: any;
}
export function MobileMenu({ MainMenuItems, sidebarNavItems }: MobileMenuProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Menu className={isOpen ? 'rotate-90 transition delay-75 ease-in-out' : ''} />
          <span className="sr-only">Toggle Menu</span>
          <span className="font-heading ml-2 hidden tracking-wide md:block">{siteConfig.name}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0">
        <div className="px-7">
          <Link
            aria-label="Home"
            href="/"
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <span className="font-heading">{siteConfig.name}</span>
          </Link>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="pl-1 pr-7">
            <Accordion type="single" collapsible className="w-full">
              {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
              {MainMenuItems?.map((item: any, index: number) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <AccordionItem value={item.title} key={index}>
                  <AccordionTrigger className="text-sm capitalize">{item.title}</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2">
                      {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
                      {item.items?.map((subItem: any, index: number) =>
                        subItem.href ? (
                          <MobileLink
                            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                            key={index}
                            href={String(subItem.href)}
                            pathname={pathname}
                            setIsOpen={setIsOpen}
                            disabled={subItem.disabled}
                          >
                            {subItem.title}
                          </MobileLink>
                        ) : (
                          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                          <div key={index} className="text-foreground/70 transition-colors">
                            {item.title}
                          </div>
                        )
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
              <AccordionItem value="sidebar">
                <AccordionTrigger className="text-sm">Sidebar Menu</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">
                    {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
                    {sidebarNavItems?.map((item: any, index: number) =>
                      item.href ? (
                        <MobileLink
                          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                          key={index}
                          href={String(item.href)}
                          pathname={pathname}
                          setIsOpen={setIsOpen}
                          disabled={item.disabled}
                        >
                          {item.title}
                        </MobileLink>
                      ) : (
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        <div key={index} className="text-foreground/70 transition-colors">
                          {item.title}
                        </div>
                      )
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps {
  children?: React.ReactNode;
  href: string | null;
  disabled?: boolean;
  pathname: string | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileLink({ children, href, disabled, pathname, setIsOpen }: MobileLinkProps) {
  return (
    <Link
      href={`${href}`}
      className={cn(
        'text-foreground/70 transition-colors hover:text-foreground',
        pathname === href && 'text-foreground',
        disabled && 'pointer-events-none opacity-60'
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );
}
