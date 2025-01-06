import React from 'react'
import Image from "next/image";
import { Button } from '@/components/ui/button';

function ProductItemDetails() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black'>
        <Image
            src={'/Shirt Viscose 2.jpg'}
            alt='image'
            width={500}
            height={200}
            className=''
        />

        <div className='flex flex-col gap-3 pl-3'>
            {/* product.name */}
            <h2 className='text-2xl font-bold'>Jacket Origin</h2>
            {/* product.description */}
            <h2 className='text-sm font-bold text-gray-500'>Áo khoác vải pha len, dáng regular fit. Cổ ve lật, dài tay, cổ tay bo và cài khuy. Có túi may viền hai bên hông. Một túi ở lớp vải lót bên trong. Cài khuy phía trước.</h2>
            <div className='flex gap-3'>
                <h2 className='font-bold text-3xl'>1.599.000 VND</h2>
            </div>
            <div className='flex flex-col items-baseline gap-3'>
                <div className='p-2 border flex gap-10 itemts-center px-5'>
                    <button>-</button>
                    <h2>1</h2>
                    <button>+</button>
                </div>
                <Button className='flex gap-3'>
                    Add To Cart
                </Button>
            </div>
            {/* prodcut.category */}
            <h2 className='font-bold'>Jacket</h2>
        </div>
    </div>
  )
}

export default ProductItemDetails
