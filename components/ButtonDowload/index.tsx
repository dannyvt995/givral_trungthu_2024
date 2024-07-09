import React from 'react'
import s from './style.module.css'
import Image from 'next/image'

interface IButtonDowload {
    url:string,
    content?:string
}

export default function ButtonDowload({
    url:url,
    content:content,
}:IButtonDowload) {
  return (
    <div className={s.group_button_dowload}>
        <span className={s.tittle_button}>Tải File Bảng Giá</span>
        <a className={s.button_dowload} href={url} target="_blank">
            {content?content:(
            <Image className={s.item} src={'/pdf_dowload.png'} alt="" width={200} height={50} />
            )}
        </a>
    </div>
  )
}
