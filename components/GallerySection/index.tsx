"use client"
import s from './style.module.css'

import React from 'react';
import SliderGallery from '../SliderGallery';


export default function GallerySection() {
 
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
                <SliderGallery options={true}/>
            </section>


        </div>
    )
}
