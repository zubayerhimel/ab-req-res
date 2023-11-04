import React, { useEffect, useState } from 'react';
import { useGetUserListQuery } from '../features/user/userAction';
import { ChevronLeft, ChevronRight, Loader, MoreHorizontal } from 'lucide-react';
import { cn } from '../lib/utils';

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);

  const { data, isLoading } = useGetUserListQuery(currentPage);

  useEffect(() => {
    // making array from number to populate the pagination number
    if (data) {
      const pages = [...Array(data?.total_pages + 1).keys()].slice(1);
      setPages(pages);
    }
  }, [data]);

  const onPrevious = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const onNext = () => {
    if (currentPage !== data?.total_pages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div>
      <h1 className='text-3xl font-bold text-slate-700'>Users List</h1>
      {isLoading ? (
        <Loader className='w-4 h-4 animate-spin' />
      ) : (
        <div className='relative mt-6 overflow-x-auto'>
          <table className='w-full text-sm text-left text-slate-500 '>
            <thead className='text-xs text-gray-700 uppercase bg-slate-50'>
              <tr>
                <th scope='col' className='px-6 py-4 rounded-l-xl'>
                  # ID
                </th>
                <th scope='col' className='px-6 py-4'>
                  User
                </th>
                <th scope='col' className='px-6 py-4'>
                  Email
                </th>
                <th scope='col' className='px-6 py-4 rounded-r-xl'>
                  Options
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((el) => (
                <tr className='bg-white border-b' key={el.id}>
                  <td className='px-6 py-4 font-medium text-slate-800 whitespace-nowrap '>{el.id}</td>
                  <td className='flex items-center gap-2 px-6 py-4 font-medium text-slate-800 whitespace-nowrap'>
                    <img src={el.avatar} className='object-cover w-8 h-8 rounded-lg' alt={`${el.id}-user`} />
                    <div>
                      {el.first_name} {el.last_name}
                    </div>
                  </td>
                  <td className='px-6 py-4 font-medium text-slate-800 whitespace-nowrap '>{el.email}</td>
                  <td className='px-6 py-4 font-medium text-slate-800 whitespace-nowrap '>
                    <MoreHorizontal />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <nav aria-label='Page navigation example'>
        <ul className='flex items-center h-8 gap-1 mt-4 text-sm'>
          <li>
            <button
              className={cn(
                'flex items-center justify-center h-8 px-1 ml-0 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700',
                currentPage === 1 && 'pointer-events-none hover:cursor-not-allowed'
              )}
              onClick={onPrevious}>
              <span className='sr-only'>Previous</span>
              <ChevronLeft />
            </button>
          </li>
          {pages?.map((page) => (
            <li key={page} onClick={() => setCurrentPage(page)}>
              <button
                className={cn(
                  'flex items-center justify-center px-3 h-8 rounded-lg text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700',
                  data?.page === page && 'bg-blue-600 text-white'
                )}>
                {page}
              </button>
            </li>
          ))}

          <li>
            <button
              className={cn(
                'flex items-center justify-center h-8 px-1 ml-0 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700',
                currentPage === data?.total_pages && 'pointer-events-none cursor-not-allowed'
              )}
              onClick={onNext}>
              <span className='sr-only'>Next</span>
              <ChevronRight />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Users;
