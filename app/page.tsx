'use client'

import React from "react";
import { useContext } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import img1 from "@/public/images/cooking.jpg";
import img2 from "@/public/images/dictionary.jpg";
import Link from "next/link";
import img3 from "@/public/images/nutrition.jpg";
import img4 from "@/public/images/tourism.jpg";
import img5 from "@/public/images/history.jpg";
import img6 from "@/public/images/weather.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 
import { useUserContext } from "./context/UserContextProvider";

export default function Home() {
  const { setUser } = useUserContext();
  const sizeW = 720;
  const sizwH = 500;
  return (
    <>
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          className="w-[220px]"
          autoplay={{ delay: 1000 }}
        >
          <SwiperSlide>
            <div className="text-center">
              <Link href={"/CookingPage"}>
                <Image onClick={() => setUser("Cooking")} src={img1} width={sizeW} height={sizwH} alt="mo" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <Link href={"/DictionaryPage"}>
                <Image onClick={() => setUser("Dictionary")} src={img2} width={sizeW} height={sizwH} alt="mo" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <Link href={"/NutritionPage"}>
                <Image onClick={() => setUser("Nutrition")} src={img3} width={sizeW} height={sizwH} alt="mo" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <Link href={"/TourismPage"}>
                <Image src={img4} onClick={() => setUser("Tourism")} width={sizeW} height={sizwH} alt="mo" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <Link href={"/HistoryPage"}>
                <Image onClick={() => setUser("History")} src={img5} width={sizeW} height={sizwH} alt="mo" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <Link href={"/WeatherPage"}>
                <Image onClick={() => setUser("Weather")} src={img6} width={sizeW} height={sizwH} alt="mo" />
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
