import Footer from '@/components/Footer'
import Product from '@/service/Product'
import React from 'react'

const page = () => {
  return (
    <div className='pt-[50px]'>
      <h2 className='text-[22px] font-bold leading-[26px] text-[#3D3D3D] mb-5'>Products</h2>
      <Product/>
      <Footer/>
    </div>
  )
}

export default page