import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

const GuestLayout = () => {
  return (
    <div className='flex flex-col'>
      <Header />
      <Outlet />
    </div>
  );
};

export default GuestLayout;
