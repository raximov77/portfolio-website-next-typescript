"use client"
import Button, { ButtonType } from '@/components/Button'
import { Context } from '@/context/Context'
import Categories from '@/service/Categories'
import Product from '@/service/Product'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

interface TagTypes {
  tagName:string,
  path:null | string
}

const page:React.FC<ButtonType> = ({title, type,extraClass}) => {
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
    <>
      <div className='flex items-center justify-between bg-[#F5F5F5] w-[1200px] mx-auto mt-[12px]'>
        <div className='w-[557px] pt-[68px] pl-[43px]'>
          <p className='text-[14px] font-medium leading-[16px]'>WELCOME TO GREENSHOP</p>
          <h2 className='text-[70px] font-black leading-[70px] my-[7px]'>LET'S MAKE A BETTER <span className='text-[#46A358]'>Planet</span></h2>
          <p className='text-[14px] font-normal mb-[44px] leading-[24px]'>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
          <Button title='SHOP NOW' type='button' extraClass='text-[16px] font-bold py-[9px] px-[26px] flex items-center justify-center'/>
        </div>
        <div>
            <Image className='cursor-pointer' src={"/images/img-hero.png"} alt='Img' width={518} height={518}/>
        </div>
      </div>
      <div className='flex justify-between w-[1200px] gap-[50px] mx-auto mt-[46px] '>
          <div className='w-[25%]  px-[18px] py-[16px] bg-[#FBFBFB]'>
            <h2 className='text-[25px] font-bold leading-[16px] text-[#3D3D3D] mb-[18px]'>Categories</h2>
              <Categories />
          </div>
          <div className='w-[75%]'>
              <ul className='flex items-center space-x-[37px]'>{tags.map((item:TagTypes, index:number) => <li onClick={() => setTags(item.path)} className='text-[17px] text-[#3D3D3D] mb-[38px] font-normal leading-[16px] cursor-pointer' key={index}>{item.tagName}</li> )}</ul>
              <Product />
          </div>
      </div>
    </>
  )
}

export default page