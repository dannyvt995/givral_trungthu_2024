import React from 'react'
import s from './style.module.css'
import Image from 'next/image'
export default function IntroSection() {
    return (
        <section className={`${s.intro_section}`}>
                <div className={s.intro_full}>
                        <Image src={"/PNG/intro.png"} width={0} height={0} sizes='100%' style={{ width: '100%', height: 'auto' }} alt="hi" />
                    </div>
           {/*  <div className='container'>
                <div className="flex">
                    <div className={s.intro_left}>
                        <div className={s.slogan}>
                            <span>“Thành ý gửi trao</span>
                            <span>Tâm giao nhân khắp”...</span>
                        </div>
                        <p>“Nét đẹp truyền thống của Tết Trung thu từ bao lâu đã luôn khắc sâu
                            'rong tâm trí mỗi người. Như ánh trăng lung nh, như tia sáng lấp lánh
                            ổa ra từ đôi mắt bé thơ trong trẻo, lổng đèn ông sao đủ sắc màu,
                            những chiếc bánh trồng trăng thơm lừng, tách trà nóng thoảng
                            hương nhài, cái nắm tay, những câu chuyện kể... Và còn điều gì nữa
                            nếu không là những tình cảm ấm áp chan hòa, mối thâm tình kết giao.
                            bền chặt, lòng tri ân từng ân tình mến thương,</p>
                        <br />
                        <p>Chính vì bao điều trân quý ấy, Gival đã dành trọn tâm huyết trong
                            từng hộp bánh Trung thu năm nay. Những dải hoa văn thổ cổm đa.
                            sắc màu với đường nét đặc trưng ẩn hiện lần đầu tiên được Givral
                            khéo léo đưa vào từng chiếc hộp bánh sang trọng và ấn tượng, mang
                            ý nghĩa về ngày Tết Trung thu sum váy, may mắn và tài lộc.”</p>

                    </div>
                    <div className={s.intro_right}>
                        <Image src={"/album/trung_thu_givral_2024_8.jpg"} width={0} height={0} sizes='100%' style={{ width: '100%', height: 'auto' }} alt="hi" />
                    </div>
                 
                </div>
            
            </div> */}
        </section>
    )
}
