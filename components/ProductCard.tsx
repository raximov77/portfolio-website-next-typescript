import { Context } from '@/context/Context'
import { useAxios } from '@/hook/useAxios'
import { BasketCount, LikeIcon } from '@/public/images/icon'
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
        <Image onClick={() => router.push(`/shop/${item.product_id}`)} src={item.image_url ? item.image_url[0] : "/Logo.svg"} priority style={{width:"250px", height:"250px", /* backgroundColor:"#F5F5F5" */}} alt={item.product_name} width={250} height={250}/>
        <h2 className='text-[16px] font-normal leading-[16px] mt-[31px]'>{item.product_name}</h2>
        <p className='text-[18px] font-bold leading-[16px] text-[#46A358] mt-[6px]'>${item.cost}.00</p>
        <div className='flex items-center space-x-5'>
          <button onClick={() => mutation.mutate()} className={item.liked ? "text-red-500" : ""}><LikeIcon/></button>
          <button onClick={() => basketMutation.mutate()} className={item.basket ? "text-green-500" : ""}><BasketCount/></button>
        </div>
    </div>
  )
}

export default ProductCard