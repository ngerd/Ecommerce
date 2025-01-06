import React from 'react'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ProductItemDetails from './ProductItemDetails'

function ProductItem({product}) {
  return (
    // <div>
    //     <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+
    //         product?.images?.[0]?.url}
    //         width={500}
    //         height={200}
    //         alt={product.name}/>
    // </div>
    <div className='mt-5 p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg'>
      <Image src={'/jacket1.jpg'}
      width={500}
      height={200}
      alt={'Jacket Origin'}
      className='h-[300px] w-[200px]'/>
      {/* <h2>product.name</h2> */}
      {/* <h2>product.mrp</h2> */}
      <h2>Jacket Origin</h2>
      <h2>1.599.000 VND</h2>
      <Dialog>
      <DialogTrigger>
        <Button variant="outline">Add to cart</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <ProductItemDetails product={product}/>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

    </div>
  )
}

export default ProductItem
