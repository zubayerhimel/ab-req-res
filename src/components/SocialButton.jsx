const SocialButton = ({ icon, text }) => {
  return (
    <div role='button' className='flex items-center w-auto gap-2 px-6 py-4 text-base font-medium rounded-2xl bg-slate-100 text-neutral-500'>
      {icon} {text}
    </div>
  );
};

export default SocialButton;
