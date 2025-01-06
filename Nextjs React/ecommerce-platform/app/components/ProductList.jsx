import React from 'react'
import ProductItem from './ProductItem'
import Image from "next/image";
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ProductItemDetails from './ProductItemDetails';

function ProductList({productList}) {
  return (
    <div className='mt-10'>
        <h2 className='text-5xl font-bold text-center'>Our latest arrivals</h2>
        <h3 className='mt-4 text-gray-600 font-light	text-center text-lg max-w-2xl mx-auto'>Explore Our Latest Arrivals: Fresh Picks to Inspire and Delight You</h3>
        {/* <div>
            {productList.map((product,index)=>(
                <ProductItem product={product}/>
            ))}
        </div> */}
        <div className='grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-5
        px-6'>
          <div className='mt-5 p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg'>
            <Image src={'/jacket1.jpg'}
            width={500}
            height={200}
            alt={'Jacket Origin'}
            className='h-[300px] w-[200px]'/>
            <h2>Jacket Origin</h2>
            <h2>1.599.000 VND</h2>
            <Dialog>
              <DialogTrigger>
                <Button variant="outline"
                className="hover:text-white hover:bg-black">See Details</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription>
                    <ProductItemDetails/>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className='mt-5 p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg'>
            <Image src={'/Shirt Viscose.jpg'}
            width={500}
            height={200}
            alt={'Shirt'}
            className='h-[300px] w-[200px]'/>
            <h2>Shirt Viscose</h2>
            <h2>899.000 VND</h2>
            <Button variant="outline">Add to cart</Button>
          </div>
          
          <div className='mt-5 p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg'>
            <Image src={'/Blazer Denim Linen.jpg'}
            width={500}
            height={200}
            alt={'Blazer'}
            className='h-[300px] w-[200px]'/>
            <h2>Blazer Denim Linen</h2>
            <h2>1.999.000 VND</h2>
            <Button variant="outline">Add to cart</Button>
          </div>

          <div className='mt-5 p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg'>
            <Image src={'/Shirt SeerSucker.jpg'}
            width={500}
            height={200}
            alt={'Jacket Origin'}
            className='h-[300px] w-[200px]'/>
            <h2>Shirt SeerSucker</h2>
            <h2>799.000 VND</h2>
            <Button variant="outline">Add to cart</Button>
          </div>
          
        </div>
        

    </div>
  )
}

export default ProductList
