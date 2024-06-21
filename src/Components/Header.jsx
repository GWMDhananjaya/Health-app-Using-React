// import React from 'react'
// import { Button, Navbar } from 'flowbite-react'
// import { Link } from 'react-router-dom'
// import { FaMoon } from 'react-icons/fa'

// // This component should be styled as "dark" or "light" depending on the theme from the Context
// const Header = () => {
//   return (
//     <Navbar className='border-b-2'>
//       <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
//         <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
//           DH Odonto
//         </span>
//       </Link>
//       <div className='flex gap-2 md:order-2'>
//         <Button className='w-12 rounded-lg hidden sm:inline ' color='gray' pill>
//           <FaMoon />
//         </Button> 
//         <Navbar.Toggle />
//       </div>

//       <Navbar.Collapse>
//         <Navbar.Link as="div">
//           <Link to='/'>Home</Link>
//         </Navbar.Link>
        
//         <Navbar.Link as="div">
//           <Link to='/contact'>Contact</Link>
//         </Navbar.Link>
//         <Navbar.Link as="div">
//           <Link to='/favs'>Favs</Link>
//         </Navbar.Link>
//       </Navbar.Collapse>
//     </Navbar>
//   )
// }

// export default Header

import React, { useContext } from 'react';
import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';
import { GlobalContext } from '../Components/utils/global.context';

const Header = () => {
  const { state, toggleTheme } = useContext(GlobalContext);

  return (
    <Navbar className='border-b-2'>
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          DH Odonto
        </span>
      </Link>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 rounded-lg hidden sm:inline ' color='gray' pill onClick={toggleTheme}>
          <FaMoon />
        </Button> 
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link as="div">
          <Link to='/'>Home</Link>
        </Navbar.Link>
        
        <Navbar.Link as="div">
          <Link to='/contact'>Contact</Link>
        </Navbar.Link>
        <Navbar.Link as="div">
          <Link to='/favs'>Favs</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

