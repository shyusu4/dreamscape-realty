import { Link } from 'react-router-dom';

import LogoIcon from '../assets/logo-icon.svg';

const Header = () => {
  return (
    <header className="mb-12">
      <nav className="flex justify-between items-center container mx-auto pt-6 font-semibold">
        <div className="flex justify-between items-center gap-8">
          <Link to="/" className="flex gap-2">
            <img src={LogoIcon} alt="house icon" className="w-14" />
            <span className="self-end text-2xl whitespace-nowrap font-extrabold">
              DreamscapeRealty
            </span>
          </Link>
          <div className="flex gap-6">
            <Link
              to=""
              className="text-neutral-500 hover:text-black transition"
            >
              Home
            </Link>
            <Link
              to=""
              className="text-neutral-500 hover:text-black transition"
            >
              About Us
            </Link>
            <Link
              to=""
              className="text-neutral-500 hover:text-black transition"
            >
              Support
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link to="" className="text-neutral-500 hover:text-black transition">
            Log in
          </Link>
          <Link
            to=""
            className="bg-black text-white px-3 py-2 rounded-lg transition"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
