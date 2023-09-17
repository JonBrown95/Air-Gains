import Link from 'next/link';
import { useAuthContext } from "@/context/AuthContext";

export const Navbar = () => {
  const { user } = useAuthContext();

  return (
    <>
      <nav className='flex items-center justify-between bg-gray-900 p-3 '>
        <Link legacyBehavior href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              Air Gains
            </span>
          </a>
        </Link>
        <div className="hidden md:flex space-x-4 ">
          
        <h1 className="text-white text-2xl font-semibold">Recipes</h1>
        <h1 className="text-white text-2xl font-semibold">Submit</h1>
          <h1 className="text-white text-2xl font-semibold">{user.email}</h1>
          
        </div>
      </nav>
    </>
  );
};
