"use client"
import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function SliderGallery({ options }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>

            <Swiper
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
            {options === true && (
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
            )}

        </>
    )
}
