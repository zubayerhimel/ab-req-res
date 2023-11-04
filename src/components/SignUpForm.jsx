import { Loader } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { registerUser } from '../features/auth/authActions';

const SignUpForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.auth);

  useEffect(() => {
    if (success) navigate('/app/dashboard');

    if (error) {
      toast.error(error);
    }
  }, [navigate, success, error]);

  const submitForm = (data) => {
    const body = {
      email: data.email.toLowerCase(),
      password: data.password,
    };

    dispatch(registerUser(body));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          className='w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 border border-gray-200 bg-slate-100 rounded-2xl focus:outline-none focus:border-gray-400 focus:bg-white'
          type='email'
          {...register('email')}
          placeholder='Email'
        />
        <input
          className='w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 border border-gray-200 bg-slate-100 rounded-2xl focus:outline-none focus:border-gray-400 focus:bg-white'
          type='text'
          {...register('full_name')}
          placeholder='Your Name'
        />

        <input
          className='w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 border border-gray-200 bg-slate-100 rounded-2xl focus:outline-none focus:border-gray-400 focus:bg-white'
          type='password'
          {...register('password')}
          placeholder='Password'
        />
        <button
          type='submit'
          className='flex justify-center w-full px-5 py-4 mt-5 text-sm font-medium text-center text-white bg-blue-600 rounded-2xl focus:ring-4 focus:outline-none disabled:cursor-not-allowed'
          disabled={loading}>
          {loading ? <Loader className='w-4 h-4 animate-spin' /> : 'Sign up'}
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
