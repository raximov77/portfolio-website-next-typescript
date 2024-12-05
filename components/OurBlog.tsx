import Image from 'next/image'
import React from 'react'
import CactusImg from "../public/images/Cactus.png"
import BestImg from "../public/images/best.png"
import TopImg from "../public/images/Top.png"
import CactiImg from "../public/images/Cacti.png"
import StylingImg from "../public/images/styling.png"
import SummerImg from "../public/images/summer.png"
import { ArrowIcon, ArrowIconWhite } from '@/public/images/icon'


const OurBlog = () => {
  return (
    <div className='pt-[146px] pb-[100px]'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center bg-[#FBFBFB] relative rounded-md'>
                <Image priority style={{width:"292px", height:"292px"}} src={SummerImg} alt='Img'/>
                <div className='w-[292px] text-end pt-[37px] pr-[30px]'>
                    <h3 className='text-[18px] text-[#3D3D3D] font-black leading-[24px] mb-4'>Summer cactus <br /> & succulents</h3>
                    <p className='text-[14px] text-[#727272] font-normal leading-[24px] mb-5'>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                    <button className='absolute right-[30px] rounded-[6px] bg-[#46A358] text-white px-7 py-[7px] flex items-center gap-[3px]'>Find More  <ArrowIconWhite/></button>
                </div>
            </div>
            <div className='flex items-center bg-[#FBFBFB] relative rounded-md'>
                <Image priority style={{width:"287px", height:"287px"}} src={StylingImg} alt='Img' />
                <div className='w-[292px] text-end pt-[37px] pr-[30px]'>
                    <h3 className='text-[18px] text-[#3D3D3D] font-black leading-[24px] mb-4'>Styling Trends <br /> & much more</h3>
                    <p className='text-[14px] text-[#727272] font-normal leading-[24px] mb-5'>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                    <button className='absolute right-[30px] rounded-[6px] bg-[#46A358] text-white px-7 py-[7px] flex items-center gap-[3px]'>Find More  <ArrowIconWhite/></button>
                </div>
            </div>
        </div>
    <div className='pt-[138px]'>
        <h3 className='text-[30px] text-[#3D3D3D] leading-[16px] font-bold text-center mb-[15px]'>Our Blog Posts</h3>
        <p className='text-[14px] text-[#727272] leading-[24px] font-normal text-center mb-[35px]'>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
        <div className='flex gap-[44px]'> 
            <div className='w-[268px]'>
                <Image  priority style={{width:"268px", height:"195px"}} className='cursor-pointer' src={CactusImg} alt='Img' />
                <div className='bg-[#FBFBFB] pt-[9px] pr-[11px] pl-[15px] pb-[12px]'>
                    <p className='text-[14px] text-[#46A358] leading-[16px] font-medium'>September 12  | Read in 6 minutes</p>
                    <h4 className='text-[20px] text-[#3D3D3D] leading-[26px] font-bold my-[4px]'>Cactus & Succulent Care Tips</h4>
                    <p className='text-[14px] text-[#727272] leading-[22px] font-normal mb-[9px]'>Cacti are succulents are easy care plants for any home or patio. </p>
                    <button className='text-[14px] text-[#3D3D3D] leading-[16px] font-medium flex items-center gap-[3px]'>Read More  <ArrowIcon/> </button>
                </div>
            </div>
            <div className='w-[268px]'>
                <Image priority style={{width:"268px", height:"195px"}} className='cursor-pointer' src={TopImg} alt='Img' />
                <div className='bg-[#FBFBFB] pt-[9px] pr-[11px] pl-[15px] pb-[12px]'>
                    <p className='text-[14px] text-[#46A358] leading-[16px] font-medium'>September 12  | Read in 6 minutes</p>
                    <h4 className='text-[20px] text-[#3D3D3D] leading-[26px] font-bold my-[4px]'>Top 10 Succulents for Your Home</h4>
                    <p className='text-[14px] text-[#727272] leading-[22px] font-normal mb-[9px]'>Best in hanging baskets. Prefers medium to high light.</p>
                    <button className='text-[14px] text-[#3D3D3D] leading-[16px] font-medium flex items-center gap-[3px]'>Read More  <ArrowIcon/> </button>
                </div>
            </div>
            <div className='w-[268px]'>
                <Image priority style={{width:"268px", height:"195px"}} className='cursor-pointer' src={CactiImg} alt='Img' />
                <div className='bg-[#FBFBFB] pt-[9px] pr-[11px] pl-[15px] pb-[12px]'>
                    <p className='text-[14px] text-[#46A358] leading-[16px] font-medium'>September 12  | Read in 6 minutes</p>
                    <h4 className='text-[20px] text-[#3D3D3D] leading-[26px] font-bold my-[4px]'>Cacti & Succulent Care Tips</h4>
                    <p className='text-[14px] text-[#727272] leading-[22px] font-normal mb-[9px]'>Cacti and succulents thrive in containers and because most are.</p>
                    <button className='text-[14px] text-[#3D3D3D] leading-[16px] font-medium flex items-center gap-[3px]'>Read More  <ArrowIcon/> </button>
                </div>
            </div>
            <div className='w-[268px]'>
                <Image priority style={{width:"268px", height:"195px"}} className='cursor-pointer' src={BestImg} alt='Img' />
                <div className='bg-[#FBFBFB] pt-[9px] pr-[11px] pl-[15px] pb-[12px]'>
                    <p className='text-[14px] text-[#46A358] leading-[16px] font-medium'>September 12  | Read in 6 minutes</p>
                    <h4 className='text-[20px] text-[#3D3D3D] leading-[26px] font-bold my-[4px]'>Best Houseplants Room by Room</h4>
                    <p className='text-[14px] text-[#727272] leading-[22px] font-normal mb-[9px]'>The benefits of houseplants are endless. In addition to..</p>
                    <button className='text-[14px] text-[#3D3D3D] leading-[16px] font-medium flex items-center gap-[3px]'>Read More  <ArrowIcon/> </button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default OurBlog