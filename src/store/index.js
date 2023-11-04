import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice';
import { userAPI } from '../features/user/userAction';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAPI.middleware),
});
export default store;
