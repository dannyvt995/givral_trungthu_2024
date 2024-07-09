"use client"
import s from './style.module.css'
import Image from 'next/image'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


export default function GallerySection() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='container margin_each_section' id="album_section">
            {/*    <div className={s.tittle}>
                <div className={s.content}>
                    <h3>Album Trung thu 2024</h3>
                </div>
                <div className={s.background}>
                    <Image className={s.item} src={'/album/trung_thu_givral_2024_36.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                </div>
            </div> */}
            <div className='tittle_component'>
                <h2>ALBUM TRUNG THU GIVRAL 2024</h2>
                <p>Dưới đây là danh sách hình sản phẩm trung thu givral 2024.</p>
           </div>
            <section className={s.gallery_section}>

                {/*  <Image className={s.item} src={'/album/trung_thu_givral_2024_1.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_2.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_3.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_4.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_5.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_6.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_7.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_8.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_30.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_10.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_11.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_31.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_20.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_14.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_15.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_16.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_17.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} /> */}




                <Swiper
                    /* style={{
                        "--swiper-navigation-color": "#fff",
                        '--swiper-pagination-color': '#fff',
                    }} */
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                        <img src="/album/trung_thu_givral_2024_1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/album/trung_thu_givral_2024_2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/album/trung_thu_givral_2024_3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/album/trung_thu_givral_2024_4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/album/trung_thu_givral_2024_5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/album/trung_thu_givral_2024_6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/album/trung_thu_givral_2024_7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/album/trung_thu_givral_2024_8.jpg" />
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="/album/trung_thu_givral_2024_1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/album/trung_thu_givral_2024_2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/album/trung_thu_givral_2024_3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/album/trung_thu_givral_2024_4.jpg" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/album/trung_thu_givral_2024_5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/album/trung_thu_givral_2024_6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/album/trung_thu_givral_2024_7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/album/trung_thu_givral_2024_8.jpg" />
                    </SwiperSlide>
                  
                </Swiper>
            </section>


        </div>
    )
}
