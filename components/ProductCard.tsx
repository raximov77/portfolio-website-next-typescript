import { ProductType } from '@/service/Product'
import Image from 'next/image'
import React from 'react'

const ProductCard:React.FC<{item:ProductType}> = ({item}) => {
  return (
    <div className='w-[250px]'>
        <Image src={item.image_url ? item.image_url[0] : "/Logo.svg"} priority style={{width:"250px", height:"250px", /* backgroundColor:"#F5F5F5" */}} alt={item.product_name} width={250} height={250}/>
        <h2 className='text-[16px] font-normal leading-[16px] mt-[31px]'>{item.product_name}</h2>
        <p className='text-[18px] font-bold leading-[16px] text-[#46A358] mt-[6px]'>${item.cost}.00</p>
    </div>
  )
}

export default ProductCard