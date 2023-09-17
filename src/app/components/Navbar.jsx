import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";

export const Navbar = () => {
  const { user } = useAuthContext();

  return (
    <nav className="bg-gray-900 border-b-2 border-white">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link legacyBehavior href="/homepage">
          <a className="text-xl text-[#fef250] font-bold uppercase tracking-wide">
            Air Gains
          </a>
        </Link>
        <div className="hidden md:flex space-x-3 items-center">
          <Link legacyBehavior href="/recipes">
            <a className="text-white text-1xl font-semibold hover:text-[#fef250] transition-colors">
              Recipes
            </a>
          </Link>
          <Link legacyBehavior href="/submit">
            <a className="text-white text-1xl font-semibold hover:text-[#fef250] transition-colors">
              Submit
            </a>
          </Link>
          <h1 className="text-white text-1xl font-semibold">{user.email}</h1>
        </div>
      </div>
    </nav>
  );
};
