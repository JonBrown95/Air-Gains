import Link from 'next/link';

export const Navbar = () => {
  return (
    <>
      <nav className='flex items-center flex-wrap bg-green-300 p-3 '>
        <Link legacyBehavior href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              Air Gains
            </span>
          </a>
        </Link>
      </nav>
    </>
  );
};