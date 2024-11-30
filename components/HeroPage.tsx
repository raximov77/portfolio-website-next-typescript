"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';

const slides = [
  {
    title: "LET'S MAKE A BETTER Planet",
    description:
      'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!',
    image: '/images/img-hero.png',
    buttonText: 'SHOP NOW',
  },
  {
    title: "Grow Your Green Dream",
    description:
      'Explore our exclusive collection of indoor plants. Perfect for homes and offices, bringing nature closer to you.',
    image: '/images/img-hero2.png',
    buttonText: 'DISCOVER MORE',
  },
  {
    title: "Nature at Your Doorstep",
    description:
      'Fast delivery, best price, and guaranteed quality. Start your green journey today with our wide variety of plants.',
    image: '/images/img-hero3.png',
    buttonText: 'GET STARTED',
  },
];

const HeroPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-auto overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full flex items-center justify-between p-6">
            <div className="w-[557px] pt-[68px] pl-[43px]">
              <p className="text-[14px] font-medium leading-[16px]">
                WELCOME TO GREENSHOP
              </p>
              <h2 className="text-[70px] font-black leading-[70px] my-[7px]">
                {slide.title.split(' ')[0]}{' '}
                <span className="text-[#46A358]">
                  {slide.title.split(' ').slice(1).join(' ')}
                </span>
              </h2>
              <p className="text-[14px] font-normal mb-[44px] leading-[24px]">
                {slide.description}
              </p>
              <Button
                title={slide.buttonText}
                type="button"
                extraClass="text-[16px] font-bold py-[9px] px-[26px] flex items-center justify-center"
              />
            </div>
            <div>
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                width={518}
                height={518}
                className="rounded-md"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#46A358] text-white p-3 rounded-full hover:bg-[#46A358] transition-colors duration-300">
        <span></span>
      </button>
      
      <div className="absolute bottom-4 flex justify-center w-full space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#46A358]' : 'bg-gray-300'}`}>
           </button>))}
      </div>
    </div>
  );
};

export default HeroPage;
