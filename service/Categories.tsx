"use client"
import Button from '@/components/Button'
import { Context } from '@/context/Context'
import { useAxios } from '@/hook/useAxios'
import useDebounce from '@/hook/useDebounce'
import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect, useState } from 'react'
import InputRange from 'react-input-range'
import "react-input-range/lib/css/index.css"

interface CategoryType {
    category_id:string,
    category_name:string
}

type Range = {min:number, max:number}

const Categories = () => {
    const {setCategory, setMinPrice, setMaxPrice} = useContext(Context)
    const [rangeValue, setRangeValue] = useState<Range>({min:15, max:500})

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
   
  return (
    <div className='space-y-5'>
        {categories.map((item:CategoryType) => <p onClick={() => setCategory(item.category_name)} style={{fontWeight: 'bold',fontSize: '20px',color: '#3D3D3D',lineHeight: '40px', cursor:'pointer'}} key={item.category_id}>{item.category_name}</p> )}
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
            <p className='text-[17px] font-normal leading-16px'>Price:
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
    </div>
  )
}

export default Categories