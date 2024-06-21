import React, { useContext } from 'react';
import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';
import { GlobalContext } from '../Components/utils/global.context';

const Header = () => {
  const { state, toggleTheme } = useContext(GlobalContext);

  return (
    <div className={`${state.theme === 'dark' ? 'dark' : ''}`}>
      <Navbar className='bg-white border-b-2 dark:bg-gray-800'>
        <Link to='/' className='self-center text-sm font-semibold whitespace-nowrap sm:text-xl dark:text-white'>
          <span className='px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            DH Odonto
          </span>
        </Link>
        <div className='flex gap-2 md:order-2'>
          <Button className='hidden w-12 rounded-lg sm:inline' color='gray' pill onClick={toggleTheme}>
            <FaMoon className='text-gray-800 dark:text-white' />
          </Button>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Navbar.Link as="div">
            <Link to='/' className='dark:text-white'>Home</Link>
          </Navbar.Link>
          <Navbar.Link as="div">
            <Link to='/contact' className='dark:text-white'>Contact</Link>
          </Navbar.Link>
          <Navbar.Link as="div">
            <Link to='/favs' className='dark:text-white'>Favs</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
