import Image from 'next/image';
import Garden from "../public/images/garden.png"
import Plant from "../public/images/plant.png"
import Watering from "../public/images/watering.png"
import Visa from "../public/images/visa.png"
import Mastercard from "../public/images/mastercard.png"
import AmericanExpress from "../public/images/american-express.png"
import Paypal from "../public/images/paypal.png"
import { EmailIcon, FacebookIcon, InstaIcon, LinklnIcon, LocationIcon, TelIcon, TwitIcon, YoutubeIcon } from '@/public/images/icon';

export default function Footer() {
  return (
    <footer className="bg-[#FBFBFB]">
      <div className="container mx-auto">
        <div className="flex justify-between px-[23px] py-[25px]">
          <div className='flex items-center gap-5'>
            <div className='w-[230px] pl-9'>
                <Image priority style={{width:"115px", height:"120px"}} className='cursor-pointer' src={Garden} alt="Garden Care"/>
                <h3 className="text-[17px] font-bold mt-4 leading-[16px] text-[#3D3D3D]">Garden Care</h3>
                <p className="text-[14px] font-normal mt-2 leading-[22px]">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
            <div className='w-[230px] border-l border-[#46A3581A] pl-9'>
                <Image priority style={{width:"115px", height:"120px"}} className='cursor-pointer' src={Plant} alt="Plant Renovation"/>
                <h3 className="text-[17px] font-bold mt-7 leading-[16px] text-[#3D3D3D]">Plant Renovation</h3>
                <p className="text-[14px] font-normal mt-2 leading-[22px]">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
            <div className='w-[230px] border-l border-[#46A3581A] pl-9'>
                <Image priority style={{width:"115px", height:"120px"}} className='cursor-pointer' src={Watering} alt="Watering Garden"/>
                <h3 className="text-[17px] font-bold mt-7 leading-[16px] text-[#3D3D3D]">Watering Garden</h3>
                <p className="text-[14px] font-normal mt-2 leading-[22px]">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
          </div>
          <div className="w-[354px] mt-10">
              <p className="text-[18px] leading-[16px] font-bold text-[#3D3D3D] mb-[18px]">Would you like to join our newsletters?</p>
              <form className="flex mb-[17px]" autoComplete='off'>
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className=" rounded-[6px] bg-[#FFFFFF] px-[11px] outline-none w-[269px]"
                />
                <button
                  type="submit"
                  className="bg-[#46A358] text-white px-6 py-2 rounded-r-[6px]"
                >
                  Join
                </button>
              </form>
              <p className="text-[13px] leading-[22px] font-normal text-[#727272]">
              We usually post offers and challenges in newsletter. We're your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! 
              </p>
        </div>
        </div>

        <div className="flex items-center gap-[87px] bg-[#46A358]/10 border-b-[#D7E9DA] border-[2px] px-[23px] py-[22px]">
            <Image priority style={{width:"150px", height:"34px"}} className='cursor-pointer' src={"/Logo.svg"} alt='Logo Img' width={150} height={34}/>
            <div className="flex items-center gap-[60px]">
              <button className='flex items-center gap-[9px]'>
                  <LocationIcon/>
                  <p className='text-[14px] leading-[22px] text-[#3D3D3D] font-normal'>70 West Buckingham Ave. <br /> Farmingdale, NY 11735</p>
              </button>
              <button className='flex items-center gap-[9px]'>
                  <EmailIcon/>
                  <p className='text-[14px] leading-[22px] text-[#3D3D3D] font-normal'>contact@greenshop.com</p>
              </button>   
              <button className='flex items-center gap-[9px]'>
                  <TelIcon/>
                  <p className='text-[14px] leading-[22px] text-[#3D3D3D] font-normal'>+88 01911 717 490</p>
              </button>
              
            </div>  
        </div>

        <div className="flex  gap-[155px] px-[23px] py-[25px] border-b-[#46A358]/40 border-b-[2px]">
          <div>
            <h4 className="text-lg font-semibold text-[#3D3D3D]">My Account</h4>
            <ul className="text-sm mt-4 space-y-2">
              <li><a href="#" className="hover:underline text-[#3D3D3D]">My Account</a></li>
              <li><a href="#" className="hover:underline text-[#3D3D3D]">Our Stores</a></li>
              <li><a href="#" className="hover:underline text-[#3D3D3D]">Contact Us</a></li>
              <li><a href="#" className="hover:underline text-[#3D3D3D]">Career</a></li>
              <li><a href="#" className="hover:underline text-[#3D3D3D]">Specials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#3D3D3D]">Help & Guide</h4>
            <ul className="text-sm mt-4 space-y-2">
              <li><a href="#" className="hover:underline text-[#3D3D3D]">Help Center</a></li>
              <li><a href="#" className="hover:underline text-[#3D3D3D]">How to Buy</a></li>
              <li><a href="#" className="hover:underline text-[#3D3D3D]">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:underline text-[#3D3D3D]">Product Policy</a></li>
              <li><a href="#" className="hover:underline text-[#3D3D3D]">How to Return</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#3D3D3D]">Categories</h4>
            <ul className="text-sm mt-4 space-y-2">
              <li><a href="#" className="hover:underline text-[#3D3D3D]">House Plants</a></li>
              <li><a href="#" className="hover:underline text-[#3D3D3D]">Potter Plants</a></li>
              <li><a href="#" className="hover:underline text-[#3D3D3D]">Seeds</a></li>
              <li><a href="#" className="hover:underline text-[#3D3D3D]">Small Plants</a></li>
              <li><a href="#" className="hover:underline text-[#3D3D3D]">Accessories</a></li>
            </ul>
          </div>

          <div className=''>
            <h4 className="text-[18px] font-bold leading-[18px] text-[#3D3D3D] mb-[20px]">Social Media</h4>
            <div className='flex items-center gap-[10px]'>
              <a href="https://www.facebook.com/" target='_blank' className='border border-[#46A358]/60 px-3 py-2 rounded-md cursor-pointer'>
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/" target='_blank' className='border border-[#46A358]/60 px-2 py-2 rounded-md cursor-pointer'>
                <InstaIcon />
              </a>
              <a href="https://x.com/?lang=ru" target='_blank' className='border border-[#46A358]/60 px-2 py-2 rounded-md cursor-pointer'>
                <TwitIcon />
              </a>
              <a href="https://uz.linkedin.com/" target='_blank' className='border border-[#46A358]/60 px-2 py-2 rounded-md cursor-pointer'>
                <LinklnIcon />
              </a>
              <a href="https://www.youtube.com/" target='_blank' className='border border-[#46A358]/60 px-2 py-2 rounded-md cursor-pointer'>
                <YoutubeIcon />
              </a>
          </div>
            <div className='mt-[33px]'>
              <span className='text-[18px] font-bold leading-[16px] text-[#3D3D3D]'>We accept</span>
              <div className='flex items-center gap-4'>
                <a href="https://www.paypal.com/ru/home" target='_blank'>
                  <Image priority style={{width:"50px", height:"50px"}} className='cursor-pointer' src={Paypal} alt='Icon' />
                </a>
                <a href="https://www.mastercard.uz/ru-uz.html" target='_blank'>
                  <Image priority style={{width:"50px", height:"50px"}} className='cursor-pointer' src={Mastercard} alt='Icon' />
                </a>
                <a href="https://cis.visa.com/" target='_blank'>
                  <Image priority style={{width:"50px", height:"50px"}} className='cursor-pointer' src={Visa} alt='Icon'/>
                </a>
                <a href="https://www.americanexpress.com/" target='_blank'>
                  <Image  priority style={{width:"50px", height:"50px"}}className='cursor-pointer' src={AmericanExpress} alt='Icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center pb-[13px] pt-[7px] cursor-pointer' >
          © 2021 GreenShop. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
