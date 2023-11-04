import { useNavigate } from 'react-router-dom';
import SignInForm from '../components/SignInForm';
import SocialButton from '../components/SocialButton';

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center w-full max-w-lg mx-auto space-y-2'>
          <div className='flex justify-between gap-2'>
            <SocialButton
              icon={
                <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill='none'>
                  <path
                    d='M22.7141 10.4599H21.875V10.4167H12.5V14.5833H18.387C17.5281 17.0089 15.2203 18.75 12.5 18.75C9.04845 18.75 6.25001 15.9516 6.25001 12.5C6.25001 9.04843 9.04845 6.25 12.5 6.25C14.0932 6.25 15.5427 6.85104 16.6464 7.83281L19.5927 4.88645C17.7323 3.1526 15.2438 2.08333 12.5 2.08333C6.74741 2.08333 2.08334 6.74739 2.08334 12.5C2.08334 18.2526 6.74741 22.9167 12.5 22.9167C18.2526 22.9167 22.9167 18.2526 22.9167 12.5C22.9167 11.8016 22.8448 11.1198 22.7141 10.4599Z'
                    fill='#FFC107'
                  />
                  <path
                    d='M3.28436 7.65156L6.70676 10.1615C7.6328 7.86874 9.87551 6.24999 12.5 6.24999C14.0932 6.24999 15.5427 6.85104 16.6463 7.83281L19.5927 4.88645C17.7323 3.1526 15.2437 2.08333 12.5 2.08333C8.49895 2.08333 5.02915 4.34218 3.28436 7.65156Z'
                    fill='#FF3D00'
                  />
                  <path
                    d='M12.5 22.9167C15.1906 22.9167 17.6354 21.887 19.4839 20.2125L16.2599 17.4844C15.2141 18.2766 13.9141 18.75 12.5 18.75C9.79062 18.75 7.4901 17.0224 6.62344 14.6115L3.22656 17.2287C4.95052 20.6021 8.45156 22.9167 12.5 22.9167Z'
                    fill='#4CAF50'
                  />
                  <path
                    d='M22.7141 10.4599H21.875V10.4167H12.5V14.5833H18.387C17.9745 15.7484 17.225 16.7531 16.2583 17.4849L16.2599 17.4839L19.4839 20.212C19.2557 20.4193 22.9167 17.7083 22.9167 12.5C22.9167 11.8016 22.8448 11.1198 22.7141 10.4599Z'
                    fill='#1976D2'
                  />
                </svg>
              }
              text='Sign Up With Google'
            />
            <SocialButton
              icon={
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='24' viewBox='0 0 20 24' fill='none'>
                  <g clipPath='url(#clip0_6_21)'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M13.256 3.89624C14.0196 2.88584 14.5985 1.45774 14.3891 0C13.141 0.088904 11.6822 0.907396 10.831 1.97424C10.055 2.9409 9.41729 4.37889 9.66636 5.77454C11.0308 5.81828 12.439 4.98002 13.256 3.89624ZM20 17.6086C19.454 18.8561 19.1912 19.4135 18.4878 20.5185C17.5066 22.0609 16.123 23.9815 14.4069 23.9956C12.8837 24.0125 12.491 22.9725 10.4231 22.9852C8.35532 22.9965 7.92424 24.0153 6.39835 23.9998C4.6836 23.9843 3.37257 22.2514 2.39135 20.709C-0.353892 16.3992 -0.642649 11.3402 1.0502 8.64908C2.25449 6.73835 4.15399 5.6207 5.93853 5.6207C7.75455 5.6207 8.89726 6.64804 10.4013 6.64804C11.8601 6.64804 12.7483 5.61789 14.8489 5.61789C16.4391 5.61789 18.1238 6.51115 19.3226 8.05215C15.3922 10.2733 16.0286 16.0606 20 17.6086Z'
                      fill='#C1C7D0'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_6_21'>
                      <rect width='20' height='24' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              }
              text='Sign Up With Google'
            />
          </div>
          <div className='my-12 text-center border-b'>
            <div className='inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white'>OR</div>
          </div>
          <SignInForm />
          <p className='text-sm text-slate-700'>
            Don't have an account yet?{' '}
            <span role='button' onClick={() => navigate('/auth/sign-up')} className='font-bold text-blue-600'>
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
