"use client"
import Button, { ButtonType } from '@/components/Button'
import Footer from '@/components/Footer'
import HeroPage from '@/components/HeroPage'
import OurBlog from '@/components/OurBlog'
import { Context } from '@/context/Context'
import Categories from '@/service/Categories'
import Product from '@/service/Product'
import React, { useContext } from 'react'

interface TagTypes {
  tagName:string,
  path:null | string
}

const page:React.FC<ButtonType> = () => {
  const {setTags} = useContext(Context)
  const tags:TagTypes[] = [
    {
      tagName: "All Plants",
      path:null
    },
    {
      tagName: "New Arrivals",
      path:"new-arrivals"
    },
    {
      tagName: "Sale",
      path:"sale"
    }
  ];

  return (
    <div className='w-[1200px] mx-auto '>
      <div className='flex items-center justify-between bg-[#F5F5F5] mt-[12px]'>
        <HeroPage/>
      </div>
      <div className='flex justify-between gap-[50px] mt-[46px]'>
          <div className='w-[25%]  px-[18px] py-[16px] bg-[#FBFBFB]'>
            <h2 className='text-[23px] font-bold leading-[16px] text-[#3D3D3D] mb-[18px]'>Categories</h2>
              <div className='pl-3'>
                <Categories />
              </div>
          </div>
          <div className='w-[75%]'>
              <ul className='flex items-center space-x-[37px]'>{tags.map((item:TagTypes, index:number) => <li onClick={() => setTags(item.path)} className='text-[17px] text-[#3D3D3D] mb-[38px] font-normal leading-[16px] cursor-pointer' key={index}>{item.tagName}</li> )}</ul>
              <Product />
          </div>
      </div>
      <OurBlog/>
      <Footer/>
    </div>
  )
}

export default page