import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='flex items-center justify-between px-20 py-4'>
      <img src={logo} className='w-auto h-auto' alt='logo' />
      <select id='countries' defaultValue={'UK'} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-[150px] p-2.5 '>
        <option value='UK'>English (UK)</option>
        <option value='US'>English (US)</option>
        <option value='FR'>France</option>
        <option value='DE'>Germany</option>
      </select>
    </div>
  );
};

export default Header;
