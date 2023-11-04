import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/logo.png';
import { cn } from '../lib/utils';

export function Sidebar({ className, items, ...props }) {
  const location = useLocation();

  return (
    <div>
      <img src={logo} className='w-auto h-auto' alt='logo' />

      <nav className={cn('flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1', className)} {...props}>
        <span className='text-sm text-slate-500'>Pages</span>
        {items.map((item) => (
          <Link
            to={item.href}
            key={item.href}
            className={cn('flex items-center gap-2 py-4 px-3 font-medium rounded-2xl text-slate-500 hover:bg-slate-50', location.pathname === item.href && 'bg-slate-100')}>
            <item.icon className='w-5 h-5' /> {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
