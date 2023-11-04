import { Activity } from 'lucide-react';
import React from 'react';

const Dashboard = () => {
  return (
    <div className='flex flex-col items-center justify-center h-1/2'>
      <Activity className='w-10 h-10 text-cyan-500' />
      <span className='text-3xl font-medium'>Dashboard</span>
    </div>
  );
};

export default Dashboard;
