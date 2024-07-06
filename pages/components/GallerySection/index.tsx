import React from 'react'
import s from './style.module.css'
import Image from 'next/image'

export default function GallerySection() {
    return (
        <div className='container margin_each_section'>
            <div className={s.tittle}>
                <div className={s.content}>
                    <h3>Album Trung thu 2024</h3>
                </div>
                <div className={s.background}>
                    <Image className={s.item} src={'/album/trung_thu_givral_2024_36.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                </div>
            </div>
            <section className={s.gallery_section}>

                <Image className={s.item} src={'/album/trung_thu_givral_2024_1.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_2.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_3.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_4.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_5.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_6.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_7.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_8.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_22.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_10.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_11.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_24.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_20.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_14.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_15.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_16.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />
                <Image className={s.item} src={'/album/trung_thu_givral_2024_17.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: 'auto', height: '100%' }} />

            </section>
        </div>
    )
}
