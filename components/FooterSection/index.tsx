import React from 'react'
import s from './style.module.css'
import { useLenisContext } from '../../contexts/LenisContext';
export default function FooterSection() {
  const lenis = useLenisContext();
  const scrollToSection = (event: React.MouseEvent<any>) => {
    const scrollTo = event.currentTarget.getAttribute('data-scrollto');
    console.log(lenis);
    if (lenis && scrollTo) {
      lenis.scrollTo(`#${scrollTo}`);
    }
  };
  return (
    <footer className={s.footer} id="footer_section">
      <div className={`${s.rowItem} container flex flex_row flex_space_between`}>
        <div className={s.info_footer}>
          <h3>Liên hệ</h3>
          <span className={s.info_footer_h3_lineBot}></span>
          <div className={s.group_info}>
            <a className={`${s.item_info} ${s.hover_underline}`}>
              Địa chỉ: Toà Nhà Safira Khang Điền, 454 Võ Chí Công, Phường Phú Hữu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam
            </a>
            <a className={`${s.item_info} ${s.hover_underline}`}>
              Email: trungthugivral1950@gmail.com
            </a>
            <a href='tel:934127409' className={`${s.item_info} ${s.hover_underline}`}>
              Hotline: 093.412.7409
            </a>
            <a className={`${s.item_info} ${s.hover_underline}`}>
              Website: www.givralbakery1950.com
            </a>
          </div>
        </div>
        <div className={s.menu_footer}>
          <h3>Thông tin</h3>
          <span className={s.info_footer_h3_lineBot}></span>
          <ul>
            <li><a className={`${s.hover_underline}`} onClick={scrollToSection} data-scrollto="price_section">Bảng giá Trung Thu 2024</a></li>
            <li><a className={`${s.hover_underline}`} onClick={scrollToSection} data-scrollto="combo_section" >Bánh Trung Thu 2024</a></li>

            <li><a className={`${s.hover_underline}`}  onClick={scrollToSection} data-scrollto="combo_section" >Mẫu hộp 2024</a></li>

            <li><a className={`${s.hover_underline}`}  onClick={scrollToSection} data-scrollto="form_section">In Logo</a></li>
            <li><a className={`${s.hover_underline}`}>Phương thức thanh toán</a></li>
          </ul>
        </div>
        <div className={s.more_footer}>
          <h3>Dịch vụ</h3>
          <span className={s.info_footer_h3_lineBot}></span>
          <ul>
            <li><a className={`${s.hover_underline}`} onClick={scrollToSection} data-scrollto="form_section">Hỗ trợ tư vấn</a></li>
            <li><a className={`${s.hover_underline}`}>Giao hàng miễn phí</a></li>
            <li><a className={`${s.hover_underline}`}>Hỗ trợ tham khảo mẫu hộp tận nơi</a></li>
            <li><a className={`${s.hover_underline}`}  href='tel:934127409'>Xuất hóa đơn</a></li>
            <li><a className={`${s.hover_underline}`}>Lên mẫu logo miễn phí</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
