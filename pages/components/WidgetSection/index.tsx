import React from 'react'
import s from './style.module.css'
import Image from 'next/image'
import IconSVG from '../IconSVG'

export default function WidgetSection() {
  return (
    <section className={s.widget_section}>
        <div className={s.list_button}>
            <a className={s.button} href='tel:+935289747' target='_blank'>
                <span className={s.icon} >
                    <Image src={'/i_phone_foot.svg'} width={0} height={0} sizes='100%' style={{width:'100%',height:'auto'}} alt="Logo"/>
                </span>
                <p className={s.detail}>Hotline: 093.528.9747</p>
            </a>
        </div>
        <a className={s.button_scrollToTop}>
          ^
        </a>
        <a className={s.call}>
          <IconSVG src='/i_phone_foot.svg' />
         {/*  <Image className={s.call_icon} src={'/i_phone_foot.svg'} width={0} height={0} sizes='100%' style={{width:'100%',height:'auto'}} alt="Logo"/> */}
        </a>
        <a className={s.zalo}>Zalo</a>
    </section>
  )
}
