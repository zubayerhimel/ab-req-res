import { Loader } from 'lucide-react';
import { Suspense } from 'react';
import { Toaster } from 'sonner';

import Router from './routes';

import './App.css';

function App() {
  return (
    <Suspense
      fallback={
        <div className='flex items-center justify-center h-full'>
          <Loader className='w-12 h-12 animate-spin' />
        </div>
      }>
      <Toaster />
      <Router />
    </Suspense>
  );
}

export default App;
