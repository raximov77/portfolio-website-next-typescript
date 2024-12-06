"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { ArrowRightOutlined } from "@ant-design/icons";

const slides = [
  {
    title: "LET'S MAKE A BETTER Planet",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!",
    image: "/images/img-hero.png",
    buttonText: "SHOP NOW",
  },
  {
    title: "Grow Your Green Dream",
    description:
      "Explore our exclusive collection of indoor plants. Perfect for homes and offices, bringing nature closer to you.",
    image: "/images/img-hero2.png",
    buttonText: "DISCOVER MORE",
  },
  {
    title: "Nature at Your Doorstep",
    description:
      "Fast delivery, best price, and guaranteed quality. Start your green journey today with our wide variety of plants.",
    image: "/images/img-hero3.png",
    buttonText: "GET STARTED",
  },
];

const HeroPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full flex flex-col md:flex-row items-center justify-between p-6 md:p-12"
          >
            <div className="md:w-1/2 text-start space-y-6">
              <p className="text-[14px] font-medium leading-[16px] uppercase">
                Welcome to Greenshop
              </p>
              <h2 className="text-[40px] md:text-[56px] font-black leading-[1.2]">
                {slide.title.split(" ")[0]} {" "}
                <span className="text-[#46A358]">
                  {slide.title.split(" ").slice(1).join(" ")}
                </span>
              </h2>
              <p className="text-[14px] md:text-[16px] leading-[24px] text-gray-700">
                {slide.description}
              </p>
              <Button
                title={slide.buttonText}
                type="button"
                extraClass="text-[14px] md:text-[16px] font-bold py-[10px] px-[20px] bg-[#46A358] text-white rounded-md hover:bg-[#46A358]/80 transition-all"
              />
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                width={400}
                height={400}
                className="rounded-md"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#46A358] text-white p-3 rounded-full hover:bg-[#46A358]/70 transition duration-300"
        aria-label="Next Slide"
      >
        <ArrowRightOutlined />
      </button>

      <div className="absolute bottom-6 flex justify-center w-full space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-[#46A358]" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroPage;