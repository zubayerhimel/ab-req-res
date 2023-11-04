import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default function AuthGuard({ children }) {
  const token = localStorage.getItem('token');
  const { pathname } = useLocation();

  if (!token) {
    return <Navigate to='/auth/sign-in' state={pathname} />;
  }

  return <>{children}</>;
}
