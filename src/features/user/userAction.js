import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    getUserList: builder.query({
      query: (page) => ({
        url: `api/users/?page=${page}`, // Include a parameter, e.g., page
        method: 'GET',
      }),
    }),
  }),
});

// Export hooks for usage in functional components, with consistent names
export const { useGetUserListQuery } = userAPI;
