import React from 'react'
import s from './style.module.css'

export default function FooterSection() {
  return (
    <footer className={s.footer}>
      <div className={`${s.rowItem} container flex flex_row flex_space_between`}>
        <div className={s.info_footer}>
          <h3>Liên hệ</h3>
          <div className={s.group_info}>
            <a className={`${s.item_info} ${s.hover_underline}`}>
              Địa chỉ: Toà Nhà Safira Khang Điền, 454 Võ Chí Công, Phường Phú Hữu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam
            </a>
            <a className={`${s.item_info} ${s.hover_underline}`}>
              Email: trungthugivral1950@gmail.com
            </a>
            <a className={`${s.item_info} ${s.hover_underline}`}>
              Hotline: 093.528.9747
            </a>
            <a className={`${s.item_info} ${s.hover_underline}`}>
              Website: www.givralbakery1950.com
            </a>
          </div>
        </div>
        <div className={s.menu_footer}>
          <h3>Thông tin</h3>
          <ul>
            <li><a className={`${s.hover_underline}`}>Bảng giá Trung Thu 2024</a></li>
            <li><a className={`${s.hover_underline}`}>Bánh Trung Thu 2024</a></li>
            <li><a className={`${s.hover_underline}`}>Combo 2024</a></li>
            <li><a className={`${s.hover_underline}`}>Mẫu hộp 2024</a></li>
            <li><a className={`${s.hover_underline}`}>Album Trung Thu 2024</a></li>
            <li><a className={`${s.hover_underline}`}>In Logo</a></li>
            <li><a className={`${s.hover_underline}`}>Phương thức thanh toán</a></li>
          </ul>
        </div>
        <div className={s.more_footer}>
          <h3>Dịch vụ</h3>
          <ul>
            <li><a className={`${s.hover_underline}`}>Hỗ trợ tư vấn</a></li>
            <li><a className={`${s.hover_underline}`}>Giao hàng miễn phí</a></li>
            <li><a className={`${s.hover_underline}`}>Hỗ trợ tham khảo mẫu hộp tận nơi</a></li>
            <li><a className={`${s.hover_underline}`}>Xuất hóa đơn</a></li>
            <li><a className={`${s.hover_underline}`}>Lên mẫu logo miễn phí</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
