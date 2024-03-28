'use client'

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import img1 from "@/public/images/img_1.jpg"
import img2 from "@/public/images/img_2.jpg"
// import img3 from "@/public/images/img_3.jpg"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <>
      <div className="container">
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination]}
          className="w-full"
        >
          <SwiperSlide>
            {/* <Image src={img1} width={120} alt='mo' /> */}
            slide 1
          </SwiperSlide>
          <SwiperSlide>
            {/* <Image src={img2} width={120} alt='mo' /> */}
            slide 2
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
