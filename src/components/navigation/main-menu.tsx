import { Workflow } from 'lucide-react';
import Link from 'next/link';

export function MainMenu() {
  return (
    <div className="hidden gap-6 lg:flex">
      <Link aria-label="Home" href="/" className="hidden items-center space-x-2 lg:flex">
        <Workflow className="h-6 w-6" />
        <span className="font-heading hidden font-bold lg:inline-block">Godjira</span>
      </Link>
    </div>
  );
}
