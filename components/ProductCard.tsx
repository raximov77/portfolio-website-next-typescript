import { Context } from '@/context/Context'
import { useAxios } from '@/hook/useAxios'
import { BasketCount, LikeIcon, SearchIcon } from '@/public/images/icon'
import { ProductType } from '@/service/Product'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

const ProductCard:React.FC<{item:ProductType}> = ({item}) => {
  const {token}:any = useContext(Context)
  const router = useRouter()
  const queryClient = useQueryClient()

  async function likeClick() {
    if(token.access_token){
      const response = await useAxios().post(`/like/${item.product_id}`, {}, {
        headers:{
          "Authorization": `Bearer ${token.access_token}`
       }
      })
      return response.data
    }
    else{
      alert("Ro'yxatdan o'tish kerak")
    }
  }

  async function basketClick() {
    if(token.access_token){
      const response = await useAxios().post(`/basket/`, {productsId:item.product_id}, {
        headers:{
          "Authorization": `Bearer ${token.access_token}`
       }
      })
      return response.data
    }
    else{
      alert("Ro'yxatdan o'tish kerak")
    }
  }

  const mutation = useMutation({
    mutationFn:() => likeClick(),
    onSuccess:() => queryClient.invalidateQueries({queryKey:['products']})
  })

  const basketMutation = useMutation({
    mutationFn:() => basketClick(),
    onSuccess:() => queryClient.invalidateQueries({queryKey:['products']})
  })

  return (
    <div className='w-[250px]'>
        <div className='relative group'>
          <Image onClick={() => router.push(`/shop/${item.product_id}`)} src={item.image_url ? item.image_url[0] : "/Logo.svg"} priority style={{width:"250px", height:"250px", cursor:'pointer'}} title='Click to enter details'  alt={item.product_name} width={250} height={250}/>
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#46A358] opacity-0 group-hover:opacity-100  duration-300" />
        </div>
        <div className='flex items-center justify-center space-x-5 mt-[10px] mb-[20px]'>
          <button onClick={() => mutation.mutate()} className={item.liked ? "text-red-500" : ""}><LikeIcon/></button>
          <button onClick={() => basketMutation.mutate()} className={item.basket ? "text-green-500" : ""}><BasketCount/></button>
          <SearchIcon/>
        </div>
        <h2 className='text-[16px] font-normal leading-[16px]'>{item.product_name}</h2>
        <div className='flex items-center gap-[16px] mt-[6px]'>
          <p className='text-[18px] font-bold leading-[16px] text-[#46A358]'>${item.cost}.00</p>
          <p className='text-[20px] leading-[6px] text-[#A5A5A5] font-medium line-through'>${item.discount}.00</p>
        </div>
    </div>
  )
}

export default ProductCard