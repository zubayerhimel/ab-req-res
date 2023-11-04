import { useEffect } from 'react';
import { Bell, LayoutDashboard, Search, User } from 'lucide-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Sidebar } from '../components/Sidebar';
import { logout } from '../features/auth/authSlice';
import user from '../assets/user.png';

const sidebarNavItems = [
  {
    title: 'Dashboard',
    href: '/app/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Users',
    href: '/app/users',
    icon: User,
  },
];

const AuthenticatedLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      navigate('/auth/sign-in');
    }
  }, [token, dispatch, navigate]);

  return (
    <>
      <div className='block px-2 pt-0 space-y-6'>
        <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-4 lg:space-y-0'>
          <aside className='px-5 -mx-4 lg:w-1/5'>
            <Sidebar items={sidebarNavItems} />
          </aside>
          <div className='flex-1 min-h-screen p-2 border-l'>
            <div className='flex items-center h-16 px-4 mb-10'>
              <div className='relative w-[500px]'>
                <div className='absolute inset-y-0 flex items-center pl-3 pointer-events-none right-4'>
                  <Search className='w-4 h-4 text-slate-500' />
                </div>
                <input type='search' id='default-search' class='block w-full p-4 pl-4 text-sm text-gray-900 border rounded-2xl bg-slate-100' placeholder='Search' required />
              </div>
              <div className='flex items-center ml-auto space-x-4'>
                <Bell className='w-5 h-5 text-slate-500' />
                <div role='button' className='overflow-hidden rounded-full' onClick={() => dispatch(logout())}>
                  <img src={user} className='w-8 h-8' alt='logged in user' />
                </div>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthenticatedLayout;
