import Button, { ButtonType } from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const page:React.FC<ButtonType> = ({title, type,extraClass}) => {
  return (
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
  )
}

export default page