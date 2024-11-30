"use client"
import { useAxios } from '@/hook/useAxios'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import React from 'react'

const SinglePage = () => {
    const {id} = useParams()
    

    const {data:SingleData = {}} = useQuery({
        queryKey:['single-products'],
        queryFn:() => useAxios().get(`/product/${id}`).then(res => res.data)
    })
    console.log(SingleData);
    
  return (
    <div>SinglePage</div>
  )
}

export default SinglePage