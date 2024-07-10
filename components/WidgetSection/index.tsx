import React from 'react'
import s from './style.module.css'
import Image from 'next/image'
import IconSVG from '../IconSVG'
import { useLenisContext } from '../../contexts/LenisContext';

export default function WidgetSection() {
  const lenis = useLenisContext();

  function scrollToTop() {
    if (lenis) lenis.scrollTo("#hero_section");
  }
  return (
    <section className={s.widget_section}>
        <div className={s.list_button}>
            <a className={s.button} href='tel:+934127409' target='_blank'>
                <span className={s.icon} >
                    <Image src={'/i_phone_foot.svg'} width={0} height={0} sizes='100%' style={{width:'100%',height:'auto'}} alt="Logo"/>
                </span>
                <p className={s.detail}>Hotline: 093.412.7409</p>
            </a>
            <a className={s.button} href='https://zalo.me/0934127409' target='_blank'>
                <span className={s.icon} >
                    <Image src={'/i_lien_he.svg'} width={0} height={0} sizes='100%' style={{width:'100%',height:'auto'}} alt="Logo"/>
                </span>
                <p className={s.detail}>Zalo: 093.412.7409</p>
            </a>
        </div>
        <a className={s.button_scrollToTop} onClick={scrollToTop}>
          ^
        </a>
        <a className={s.call} href='tel:+934127409'>
          <IconSVG src='/i_phone_foot.svg' />
         {/*  <Image className={s.call_icon} src={'/i_phone_foot.svg'} width={0} height={0} sizes='100%' style={{width:'100%',height:'auto'}} alt="Logo"/> */}
        </a>
        <a className={s.zalo} href='https://zalo.me/0934127409'>Zalo</a>
    </section>
  )
}
