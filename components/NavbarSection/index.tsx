import React from 'react'
import s from './style.module.css'
import Image from 'next/image'
import { useLenisContext } from '../../contexts/LenisContext';

export default function NavbarSection() {
  const lenis = useLenisContext();
  const scrollToSection = (event: React.MouseEvent<any>) => {
    const scrollTo = event.currentTarget.getAttribute('data-scrollto');
    console.log(lenis);
    if (lenis && scrollTo) {
      lenis.scrollTo(`#${scrollTo}`);
    }
  };
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
                <li className={s.item}><a onClick={scrollToSection} data-scrollto="price_section">Bánh lẻ</a></li>
                <li className={s.item}><a onClick={scrollToSection} data-scrollto="combo_section">Combo 2024</a></li>
                <li className={s.item}><a onClick={scrollToSection} data-scrollto="price_section">Bảng giá</a></li>
                <li className={s.item}><a onClick={scrollToSection} data-scrollto="combo_section">Mẫu hộp</a></li>
                <li className={s.item}><a onClick={scrollToSection} data-scrollto="form_section">Liên hệ</a></li>
              </ul>
            </nav>
          </div>
    {/*     </div>
      </div> */}
    </div>


  )
}
