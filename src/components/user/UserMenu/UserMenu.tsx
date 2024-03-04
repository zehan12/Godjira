'use client';

import { cn } from '@/lib/utils';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { DollarSign, LogOut, Receipt, Settings, Store, Terminal, User } from 'lucide-react';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';

export const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="relative h-8 w-8 rounded-full">
          <Avatar>
            <AvatarImage className="m-1 h-8 w-8 rounded-full" src="https://github.com/shadcn.png" />
            <AvatarFallback className="m-1 h-8 w-8 rounded-full">CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{'zehan'}</p>
            <p className="text-xs leading-none text-muted-foreground">{'zehan9211@gmail.com'}</p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/dashboard/stores" className="flex items-center">
              <Store className="mr-2 h-4 w-4" aria-hidden="true" />
              Stores
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/dashboard/billing" className="flex items-center">
              <Receipt className="mr-2 h-4 w-4" aria-hidden="true" />
              Billing
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/dashboard/account" className="flex items-center">
              <User className="mr-2 h-4 w-4" aria-hidden="true" />
              Account
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/dashboard/settings" className="flex items-center">
              <Settings className="mr-2 h-4 w-4" aria-hidden="true" />
              Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/dashboard/purchases" className="flex items-center">
              <DollarSign className="mr-2 h-4 w-4" aria-hidden="true" />
              Purchases
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/dashboard/admin" className="flex items-center">
              <Terminal className="mr-2 h-4 w-4" aria-hidden="true" />
              Admin Page
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link
            href="/sign-out"
            className={cn(buttonVariants({ variant: 'outline' }), 'start mr-2 w-full px-3')}
          >
            <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
            Log Out
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
