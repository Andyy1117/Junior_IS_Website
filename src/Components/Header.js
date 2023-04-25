// import dependencies
import Logo from '../img/Header/logo3.svg';
import Socials from './Socials';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';

const Header = () => {
  
  // Render the Header component
  return (
    <header
      className={`fixed w-full px-[30px] lg:px-[100px] z-30 h-[80px] lg:h-[120px] flex items-center bg-gray-100 shadow-sm '}`}
    >
      <div className='flex flex-col xl:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <Link to={'/'} className='max-w-[200px]'>
          <img src={Logo} alt='' />
        </Link>
        {/* nav - initially hidden - show on desktop mode */}
        <nav className='hidden xl:flex gap-x-12 font-semibold text-lg'>
          <Link
            to={'/'}
            className='text-gray-600 hover:text-blue-500 transition-colors duration-300'
          >
            Home
          </Link>
          <Link
            to={'/about'}
            className='text-gray-600 hover:text-blue-500 transition-colors duration-300'
          >
            About
          </Link>
          <Link
            to={'/portfolio'}
            className='text-gray-600 hover:text-blue-500 transition-colors duration-300'
          >
            Portfolio
          </Link>
          <Link
            to={'/contact'}
            className='text-gray-600 hover:text-blue-500 transition-colors duration-300'
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* socials */}
      <Socials />
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;