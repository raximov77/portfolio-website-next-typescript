"use client";
import Footer from '@/components/Footer';
import { useAxios } from '@/hook/useAxios';
import { EmailIcon0, FacebookIcon0, LikeIcon, LinklnIcon0, SearchIcon, TwitIcon0} from '@/public/images/icon';
import { ProductType } from '@/service/Product';
import { useQuery } from '@tanstack/react-query';
import { Rate } from 'antd';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

const SinglePage:React.FC<{item:ProductType}> = ({item}) => {
  const { id } = useParams();
  const [value, setValue] = useState(3);
  const [quantity, setQuantity] = useState(1);

  const { data: SingleData = {} } = useQuery({
    queryKey: ['single-product', id],
    queryFn: () =>
      useAxios()
        .get(`/product/${id}`)
        .then((res) => res.data),
  });

  console.log(SingleData);

  const images = SingleData.image_url || [];
  const sizes = SingleData.size || [];

  const handleChange = (value: number) => {
    setValue(value);
    console.log(`Selected rating: ${value}`);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const handleBuyNow = () => {
    console.log('Buying product:', { id, quantity });
  };

  const handleAddToCart = () => {
    console.log('Adding to cart:', { id, quantity });
  };

  return (
    <>
      <div className='mt-[43px] flex items-center justify-between'>
      <div className='flex gap-[29px] items-center'>
        <div className='flex flex-col gap-[16px]'>
          {images.map((url: string, index: number) => (
            <img key={index} src={url} alt={`Product image ${index + 1}`} width={100} height={100}/>
          ))}
          {images.map((url: string, index: number) => (
            <img key={index} src={url} alt={`Product image ${index + 1}`} width={100} height={100}/>
          ))}
          {images.map((url: string, index: number) => (
            <img key={index} src={url} alt={`Product image ${index + 1}`} width={100} height={100}/>
          ))}
          {images.map((url: string, index: number) => (
            <img key={index} src={url} alt={`Product image ${index + 1}`} width={100} height={100}/>
          ))}
        </div>
         <div className='flex items-center bg-[#FBFBFB] relative'>
         <div className='cursor-pointer'>
          {images.map((url: string, index: number) => (
              <img key={index} src={url} alt={`Product image ${index + 1}`} width={404} height={404}/>
            ))}
         </div>
          <div className='absolute top-0 right-0 cursor-pointer'>
            <SearchIcon/>
          </div>
         </div>
      </div>
      <div className='w-[574px]'>
        <h2 className='text-[28px] leading-[16px] text-[#3D3D3D] font-bold mb-[21px]'>{SingleData.product_name}</h2>
        <div className='flex items-center justify-between border-b-2 pb-[20px] border-[#46A358]/50'>
        <div className='flex items-center gap-3'>
          <b className='text-[22px] leading-[6px] text-[#46A358] font-bold'>
            ${SingleData.cost}.00
          </b>
          {SingleData.discount && (
            <b className='text-[20px] leading-[6px] text-[#727272] font-medium line-through'>
              ${SingleData.discount}.00
            </b>
          )}
      </div>
          <div className='flex items-center gap-[11px]'>
            <Rate onChange={handleChange} value={value} />
            <p className='text-[15px] text-[#3D3D3D] leading-[16px] font-normal'>19 Customer Review</p>
          </div>
        </div>
        <h3 className='text-[15px] leading-[16px] text-[#3D3D3D] font-medium mb-[10px] mt-[15px]'>Short Description:</h3>
        <p className='text-[14px] leading-[24px] text-[#727272] font-normal mb-[24px]'>{SingleData.product_description}</p>
        <div>
          <h4 className='text-[15px] text-[#3D3D3D] leading-[16px] font-medium mb-[11px]'>Size:</h4>
            <ul className='flex gap-[10px]'>{sizes.map((size: string, index: number) => (
              <li className="border-[2px] border-[#727272]/60 rounded-full w-[28px] h-[28px]  flex items-center justify-center text-[14px] font-medium leading-[16px]"
              key={index}> {size[0]}
              </li>))}
            </ul>
        </div>
        <div className="flex items-center gap-4 mt-[23px]">
          <button onClick={decrementQuantity} className="bg-[#46A358] text-white border px-3 py-1 rounded-full text-lg">
            -
          </button>
          <span className="text-lg font-medium text-[#3D3D3D] w-[20px] text-center">{quantity}</span>
          <button  onClick={incrementQuantity} className="bg-[#46A358] text-white border px-3 py-1 rounded-full text-lg">
            +
          </button>
          <button onClick={handleBuyNow} className="bg-[#46A358] text-white px-6 py-2 rounded-md">
            Buy Now
          </button>
          <button onClick={handleAddToCart} className="border text-[#46A358] border-[#46A358] px-6 py-2 rounded-md">
            Add to Cart
          </button>
          <div className="relative group">
            <button
              className="border border-[#46A358] text-[#46A358] px-3 py-2 rounded-md">
              <LikeIcon/>
            </button>
          </div>
        </div>
        <div className='text-[15px] leading-[16px] font-normal text-[#3D3D3D] mt-[26px]'><b className='text-[15px] leading-[16px] font-normal text-[#727272]'>SKU:</b> 1995751877966</div>
        <div className='text-[15px] leading-[16px] font-normal text-[#3D3D3D] mb-[10px] mt-[10px]'><b className='text-[15px] leading-[16px] font-normal text-[#727272]'>Categories:</b> Potter Plants</div>
        <div className='text-[15px] leading-[16px] font-normal text-[#3D3D3D] mb-[18px]'><b className='text-[15px] leading-[16px] font-normal text-[#727272]'>
          Tags: 
          </b> {SingleData.tags}</div>
        <div className='flex items-center gap-[16px]'>
          <div className='text-[15px] leading-[16px] font-medium text-[#3D3D3D]'>Share this products:</div>
          <div className='flex gap-[20px] items-center'>
            <a href="https://www.facebook.com/" target='_blank'>
              <FacebookIcon0/>
            </a>
            <a href="https://x.com/?lang=ru" target='_blank'>
              <TwitIcon0/>
            </a>
            <a href="https://uz.linkedin.com/" target='_blank'>
              <LinklnIcon0/>
            </a>  
            <a href="https://mail.google.com/" target='_blank'>
              <EmailIcon0/>
            </a>
          </div>
        </div>
      </div>
      </div>
      <div className='mt-[92px]'>
        <div className=' border-[#46A358]/30 border-b-[2px] mb-[12px]'>
              <div className='flex gap-[30px]'>
                <b className='text-[17px] leading-[16px] font-bold text-[#46A358] border-b-[3px] border-[#46A358] pb-[12px]'>Product Description</b>
                <b className='text-[17px] leading-[16px] font-normal text-[#3D3D3D]'>Reviews (19)</b>
              </div>
        </div>
        <div>
            <p className='text-[14px] leading-[24px] text-[#727272] font-normal mb-[24px]'>
            {SingleData.product_description}
            </p>
            <p className='text-[14px] leading-[24px] text-[#727272] font-normal mb-[24px]'>
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. 
            </p>
            <b className='text-[14px] leading-[24px] font-bold text-[#3D3D3D]'>Living Room:</b>
            <p className='text-[14px] leading-[24px] text-[#727272] font-normal mb-[18px]'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <b className='text-[14px] leading-[24px] font-bold text-[#3D3D3D]'>Dining Room:</b>
            <p className='text-[14px] leading-[24px] text-[#727272] font-normal mb-[18px]'>The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.</p>
            <b className='text-[14px] leading-[24px] font-bold text-[#3D3D3D]'>Office:</b>
            <p className='text-[14px] leading-[24px] text-[#727272] font-normal'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='mt-[127px]'>
            <h4 className='text-[17px] leading-[16px] font-bold text-[#46A358] border-[#46A358]/30 border-b-[2px] pb-[12px]'>Releted Products</h4>
            <div>
           {/* There carusel */}
            </div>
        </div>
      </div>

      {/* Footer */}
      <div className='pt-[128px]'>
        <Footer/>
      </div>
    </>
  );
};

export default SinglePage;
