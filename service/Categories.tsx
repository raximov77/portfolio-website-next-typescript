"use client"
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


const Categories = () => {
    const {setCategory, setMinPrice, setMaxPrice} = useContext(Context)
    const [rangeValue, setRangeValue] = useState({min:15, max:500})

    const [min, setMin] = useState(1)
    const [max, setMax] = useState(1000)

    const {data:categories = []}:any = useQuery({
        queryKey:['categories'],
        queryFn:() => useAxios().get("/categories", {
            params:{page:1, limit:100}
        }).then(res => res.data.categories)
    })
    
    function handleChangeRange(value:{min:number, max:number} | any){
        setRangeValue(value)
        setMin(value.min)
        setMax(value.max)
    }
    const minPrice = useDebounce(min, 1000)
    const maxPrice = useDebounce(max, 1000)

    useEffect(() => {
        if(minPrice && maxPrice){
            setMinPrice(minPrice)
            setMaxPrice(maxPrice)
        }
    }, [minPrice, maxPrice])

  return (
    <div className='space-y-5'>
        {categories.map((item:CategoryType) => <p onClick={() => setCategory(item.category_name)} style={{fontWeight: 'bold',fontSize: '20px',color: '#3D3D3D',lineHeight: '40px', cursor:'pointer'}} key={item.category_id}>{item.category_name}</p> )}
        <InputRange
            value={rangeValue}
            maxValue={1000}
            minValue={1}
            onChange={handleChangeRange}/>
    </div>
  )
}

export default Categories