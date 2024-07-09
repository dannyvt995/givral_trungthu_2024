import React from 'react'
import s from './style.module.css'
import Image from 'next/image'
export default function HeroSection() {
  return (
    <section className={s.hero_section} id="hero_section">
       <div className={s.list_img}>
        <Image src={'/banner_1.jpg'} width={0} height={0} sizes='100%' style={{transform: 'scale(1.05)',width:'100%',height:'auto'}} alt="Logo"/>
       </div>
    </section>
  )
}
