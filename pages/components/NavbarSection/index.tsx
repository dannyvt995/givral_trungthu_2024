import React from 'react'
import s from './style.module.css'
import Image from 'next/image'
export default function NavbarSection() {
  return (


    <div className={s.navbar_section}>
{/*       <div className='container'>
        <div className='flex'> */}
          <div className={s.navbar}>
            <div className={s.logo}>
              <Image src={'/logo_givral_mooncake.svg'} width={0} height={0} sizes='100%' style={{ width: '100%', height: 'auto' }} alt="Logo" />
            </div>
            <nav className={s.menu}>
              <ul className={s.menuitem}>
                <li className={s.item}><a>Bánh lẻ</a></li>
                <li className={s.item}><a>Combo 2024</a></li>
                <li className={s.item}><a>Bảng giá</a></li>
                <li className={s.item}><a>Mẫu hộp</a></li>
                <li className={s.item}><a>Liên hệ</a></li>
              </ul>
            </nav>
          </div>
    {/*     </div>
      </div> */}
    </div>


  )
}
