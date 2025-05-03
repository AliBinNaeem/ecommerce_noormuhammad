import React from 'react'
import HeaderMenu from "@/components/HeaderMenu";
import Logo from "@/components/Logo";
import Container from './Container';
import MobileMenu from './MobileMenu';
import { Search } from 'lucide-react';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';

const Header = () => {
  return (
    <header className='border-b border-b-grey-400 py-5'>
       
     <Container 
     className='flex items-center justify-between gap-7 text-lightColor '
     >
        <HeaderMenu/>
        <div className='w-auto md:w-1/3 flex items-center justify-center gap-2.5'> 
        {/* https://youtu.be/3hepJA56KF8?t=4129 */}
        <MobileMenu/>
        <Logo
        // className='italic text-blue-500' //https://youtu.be/3hepJA56KF8?t=3940
         >Tulos</Logo>
        </div>
        <div 
        className='w-auto md:w-1/3 flex items-center justify-end gap-5'
        >
          {/* right */}
          <SearchBar/>
          <CartIcon/>
          <div className='text-sm font-semibold hover:text-darkcolor hoverEffect'>
            Login
          </div>
        </div>
     </Container>
        {/* Right bar */} 
        {/* //https://youtu.be/3hepJA56KF8?t=2592 */}
       
    </header>
  )
}

export default Header
