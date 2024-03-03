import React from 'react';
import { tv } from 'tailwind-variants';

import { MainMenu } from '../main-menu';

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
        <MainMenu />
      </nav>
    </header>
  );
};
