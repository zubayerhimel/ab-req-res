import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default function GuestGuard({ children }) {
  const token = localStorage.getItem('token');

  if (token) {
    return <Navigate to='/app/dashboard' />;
  }

  return <>{children}</>;
}
