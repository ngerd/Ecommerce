"use client"; 

import React, { useEffect, useState } from 'react'
import { Layout, LayoutGrid, Search, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import GlobalApi from '../_utils/GlobalApi'
import Link from 'next/link';

function Header() {
  
  const [CategoryList, setCategoryList] = useState([]);
  useEffect(()=>{
    getCategoryList();
  },[])

  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      setCategoryList(resp.data.data);
    })
  }
  
  return (
    <div className='flex border shadow-sm justify-between'>
        <div className='flex'>
            <h2 className='items-center font-bold p-3 px-10'>Ecommerce</h2>
            <h2 className='hidden md:flex items-center p-3 px-4'>About</h2>
            
            <DropdownMenu>
            <DropdownMenuTrigger asChild><h2 className='hidden md:flex items-center p-3 px-7 cursor-pointer'>Shop</h2></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Men</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {CategoryList.map((category, index)=>(
                <DropdownMenuItem key={category.id || index}>
                {category.name}
              </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
            </DropdownMenu>


            <div className='md:flex gap-2 items-center p-3 px-8
            hidden'>
                <Search/>
                <input type='text' 
                placeholder='Search'
                className='outline-none'/>
            </div>
        </div>
        
        <div className='flex gap-5 items-center px-10'>
            <h2 className='flex gap-2 items-center p-1'><ShoppingBag/> 0 </h2>
            <Link href="/login" passHref>
              <Button>Login</Button>
            </Link>
        </div>
    </div>

  )
}

export default Header
