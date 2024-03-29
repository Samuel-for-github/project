"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import img1 from "@/public/images/cooking.jpg";
import img2 from "@/public/images/dictionary.jpg";
import Link from "next/link";
import img3 from "@/public/images/nutrition.jpg";
import img4 from "@/public/images/tourism.jpeg";
import img5 from "@/public/images/history.jpeg";
import img6 from "@/public/images/weather.jpeg";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <>
      <div className="container">
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination]}
          className="w-[220px]"
        >
          <SwiperSlide>
            <div className="text-center">
              <Link href={"/CookingPage"}>
                <Image src={img1} width={220} alt="mo" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <Link href={"/DictionaryPage"}>
                <Image src={img2} width={220} alt="mo" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <Link href={"/NutritionPage"}>
                <Image src={img3} width={220} alt="mo" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <Link href={"/TourismPage"}>
                <Image src={img4} width={220} alt="mo" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <Link href={"/HistoryPage"}>
                <Image src={img5} width={220} alt="mo" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <Link href={"/WeatherPage"}>
                <Image src={img6} width={220} alt="mo" />
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
