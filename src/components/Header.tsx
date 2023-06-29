import { Link } from 'react-router-dom';

import LogoIcon from '../assets/logo-icon.svg';

const Header = () => {
  return (
    <header className="mb-12">
      <nav className="flex justify-between items-center container mx-auto py-6 font-semibold">
        <Link to="/" className="flex gap-2">
          <img src={LogoIcon} alt="house icon" className="w-15" />
          <span className="self-end text-2xl whitespace-nowrap font-bold">
            DreamscapeRealty
          </span>
        </Link>
        <div className="flex items-center gap-6 text-lg">
          <Link to="" className="hover:text-violet-900 transition">
            Log in
          </Link>
          <Link
            to=""
            className=" bg-slate-600 hover:bg-violet-900 text-white px-3 py-2 rounded-lg transition"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
