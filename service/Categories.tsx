"use client"
import Button from '@/components/Button'
import { Context } from '@/context/Context'
import { useAxios } from '@/hook/useAxios'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import InputRange from 'react-input-range'
import "react-input-range/lib/css/index.css"
import SaleImg from "../public/images/category-b-img.png"

interface CategoryType {
    category_id:string,
    category_name:string
}

type Range = {min:number, max:number}

const Categories = () => {
    const {setCategory, setMinPrice, setMaxPrice} = useContext(Context)
    const [rangeValue, setRangeValue] = useState<Range>({min:15, max:500})
    const [activeCategory, setActiveCategory] = useState<string>('');

    const {data:categories = []}:any = useQuery({
        queryKey:['categories'],
        queryFn:() => useAxios().get("/categories", {
            params:{page:1, limit:100}
        }).then(res => res.data.categories)
    })
    
    const handleChangeRange = (value:number | Range) => {
        if(typeof value === "object"){
            setRangeValue(value)
        }
        else{
            setRangeValue({ min: value, max: rangeValue.max })
        }
    }

    const handleFilterClick = () => {
        setMinPrice(rangeValue.min)
        setMaxPrice(rangeValue.max)
        console.log(`Filter applied with Min Price: ${rangeValue.min}, Max Price: ${rangeValue.max}`)
    }

    const handleCategoryClick = (categoryName: string) => {
        setCategory(categoryName);
        setActiveCategory(categoryName);
      };
   
  return (
    <div className='space-y-5'>
       {categories.map((item: CategoryType) => (
        <p onClick={() => handleCategoryClick(item.category_name)}
          className={`font-semibold text-[21px] leading-[40px] cursor-pointer ${
            activeCategory === item.category_name ? 'text-[#46A358] underline' : 'text-[#3D3D3D]'}`} key={item.category_id}>
          {item.category_name}
        </p>
      ))}
        &nbsp;
        <h3 className='text-[25px] font-bold leading-[16px] text-[#3D3D3D]'>Price Range</h3>
        <div>
            &nbsp;
            <InputRange
                value={rangeValue}
                maxValue={1000}
                minValue={1}
                onChange={handleChangeRange}/>
            &nbsp;
            <p className='text-[17px] font-normal leading-16px'>Price:&nbsp;
                <span className='text-[#46A358] font-bold'>
                    ${rangeValue.min} - ${rangeValue.max}
                </span>
            </p>
            &nbsp;
            <Button
                onClick={handleFilterClick}
                title="Filter"
                type="button"
                extraClass="text-[16px] font-bold py-[9px] leading-[20px] px-[26px] flex items-center justify-center mt-7"
            />   
        </div>
        &nbsp;
        <div>
            <h4 className='text-[18px] font-bold text-[#3D3D3D] leading-[16px]'>Size</h4>
            &nbsp;
            <div className='flex items-center justify-between pl-3'>
                <div className='text-[15px] font-normal text-[#3D3D3D] leading-[40px]'>Small</div>
                <div className='text-[15px] font-normal text-[#3D3D3D] leading-[40px]'>(119)</div>
            </div>
            &nbsp;
            <div className='flex items-center justify-between pl-3'>
                <div className='text-[15px] font-normal text-[#3D3D3D] leading-[40px]'>Medium</div>
                <div className='text-[15px] font-normal text-[#3D3D3D] leading-[40px]'>(86)</div>
            </div>
            &nbsp;
            <div className='flex items-center justify-between pl-3'>
                <div className='text-[15px] font-normal text-[#3D3D3D] leading-[40px]'>Large</div>
                <div className='text-[15px] font-normal text-[#3D3D3D] leading-[40px]'>(78)</div>
            </div>
        </div>
        <div className='cursor-pointer'>
            <Image src={SaleImg} alt='Sale Img' width={370} height={370}/>
        </div>
    </div>
  )
}

export default Categories