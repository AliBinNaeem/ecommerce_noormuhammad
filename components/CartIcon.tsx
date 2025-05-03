import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const CartIcon = () => {
  return <Link href={'/cart'} className='group relative'>
    <ShoppingBag className='w-5 h-5 group-hover:text-darkcolor hoverEffect'/>
    <span 
    className='absolute -top-1 -right-1 bg-darkcolor  h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center'
    //https://youtu.be/3hepJA56KF8?t=4321
    >0</span>
  </Link>
  
}

export default CartIcon
 