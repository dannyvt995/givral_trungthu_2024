import React from 'react'
import s from './style.module.css'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HeroSection() {
  return (
    <section className={s.hero_section} id="hero_section">
      <div className={s.list_img}>
        <Swiper
         
        
         
          effect={'fade'}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
     
          modules={[EffectFade, Autoplay]}
          className={`mySwiper  ${s.slider_hero}`}
        >
          <SwiperSlide><Image src={'/banner_1.jpg'} width={0} height={0} sizes='100%' style={{  width: '100%', height: 'auto' }} alt="Logo" /></SwiperSlide>
          <SwiperSlide><Image src={'/banner-trang-chu-2.jpg'} width={0} height={0} sizes='100%' style={{  width: '100%', height: 'auto' }} alt="Logo" /></SwiperSlide>
          <SwiperSlide><Image src={'/banner-trang-chu-3.jpg'} width={0} height={0} sizes='100%' style={{  width: '100%', height: 'auto' }} alt="Logo" /></SwiperSlide>
        
          <SwiperSlide><Image src={'/banner-trang-chu-5.jpg'} width={0} height={0} sizes='100%' style={{  width: '100%', height: 'auto' }} alt="Logo" /></SwiperSlide>
          <SwiperSlide><Image src={'/banner-trang-chu-6.jpg'} width={0} height={0} sizes='100%' style={{  width: '100%', height: 'auto' }} alt="Logo" /></SwiperSlide>
       
          <SwiperSlide><Image src={'/banner-trang-chu-8.jpg'} width={0} height={0} sizes='100%' style={{  width: '100%', height: 'auto' }} alt="Logo" /></SwiperSlide>
          <SwiperSlide><Image src={'/banner-trang-chu-9.jpg'} width={0} height={0} sizes='100%' style={{  width: '100%', height: 'auto' }} alt="Logo" /></SwiperSlide>
          <SwiperSlide><Image src={'/banner-trang-chu-10.jpg'} width={0} height={0} sizes='100%' style={{  width: '100%', height: 'auto' }} alt="Logo" /></SwiperSlide>
        </Swiper>
        
      </div>
    </section>
  )
}
