import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import GuestLayout from './layouts/GuestLayout';
import AuthenticatedLayout from './layouts/AuthenticatedLayout';

import GuestGuard from './guards/GuestGuard';
import AuthGuard from './guards/AuthGuard';

const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Users = lazy(() => import('./pages/Users'));

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <GuestLayout />,
      children: [
        {
          element: (
            <GuestGuard>
              <SignIn />
            </GuestGuard>
          ),
          index: true,
        },
      ],
    },
    {
      path: '/auth',
      element: <GuestLayout />,
      children: [
        {
          path: 'sign-in',
          element: (
            <GuestGuard>
              <SignIn />
            </GuestGuard>
          ),
        },
        {
          path: 'sign-up',
          element: (
            <GuestGuard>
              <SignUp />
            </GuestGuard>
          ),
        },
      ],
    },
    {
      path: '/app',
      element: <AuthenticatedLayout />,
      children: [
        {
          path: 'dashboard',
          element: (
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          ),
        },
        {
          path: 'users',
          element: (
            <AuthGuard>
              <Users />
            </AuthGuard>
          ),
        },
      ],
    },
  ]);
};

export default Router;
