'use client';

import { Github } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { tv } from 'tailwind-variants';

import { dashboardConfig, siteConfig } from '../../../config/site-config';

import { ThemeSwitch } from '@/components/shared/ThemeSwitch';
import { Button } from '@/components/ui/button';
import { UserMenu } from '@/components/user/UserMenu';

import { MainMenu } from '../MainMenu';
import { MobileMenu } from '../MobileMenu';

type HeaderProps = {
  border?: boolean;
  sticky?: boolean;
};

const NavbarStyles = tv({
  base: 'w-full border-b border-transparent bg-background/95 backdrop-blur-sm',
  variants: {
    border: {
      true: 'border-border'
    },
    sticky: {
      true: 'sticky top-0 z-40'
    },
    animated: {
      true: 'duration-slow animate-in fade-in slide-in-from-top-full'
    }
  }
});

export const Header = ({
  border = true,
  sticky = true // todo: fix browser's console warn if true
}: HeaderProps) => {
  return (
    <header className={NavbarStyles({ border, sticky })}>
      <nav className="container flex h-16 items-center justify-between">
        <MainMenu items={siteConfig.mainNav} />
        <MobileMenu
          MainMenuItems={siteConfig.mainNav}
          sidebarNavItems={dashboardConfig.sidebarNav}
        />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeSwitch />
          <div className="flex items-center justify-center gap-2">
            <Button variant={'ghost'}>
              <Link href={'https://github.com/zehan12/Godjira'}>
                <Github />
              </Link>
            </Button>
            <UserMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};
