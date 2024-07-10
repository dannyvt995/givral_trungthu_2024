import React from 'react'
import s from './style.module.css'
import Image from 'next/image'
import ButtonCall from '../ButtonCall'
import IconSVG from '../IconSVG'

export default function ComboSection() {
    return (
        <section className={`${s.combo_section} margin_each_section`} id="combo_section">

            <div className='container'>
                <div className='tittle_component'>
                    <div className='tittle_wrap'>
                        <span className='tittle_ic'>
                            <IconSVG src="/i_star.svg" />

                        </span>
                        <h2>Combo trung thu Givral 2024</h2>
                    </div>
                    <div className='tittle_wrap_2'>
                        <span className='tittle_icd'></span>
                        <p>Dưới đây là danh sách combo bánh trung thu givral 2024,<br />mời quý khách hàng tham khảo.</p>
                    </div>
                </div>
                <div className={s.typeCombo}>
                    <div className={`${s.rowItem} flex flex_row flex_space_around`}>
                        <div className={s.item}>
                            <div className={s.itemImage}>
                                <div className={s.image}>
                                    <Image src={'/album/trung_thu_givral_2024_25.jpg'} width={0} height={0} sizes='100%' style={{ width: '100%', height: '100%' }} alt="sdf" />
                                </div>
                                <h3 className={s.name}>Hộp 4 bánh</h3>
                                <ul className={s.ul_w}>
                                    <li>4 Bánh (200gr / 250gr) + 1 Hộp trà 10gr</li>
                                </ul>
                            
                                <p className={s.detail}>Chiếc hộp xanh như được dệt nên từ hoa văn thổ cẩm vô cùng
                                    sinh động, dịu dàng mà vững chãi một miền núi sông. Màu xanh
                                    lá đậm tỏa rộng làm nổi bật những họa tiết thổ cẩm óng ánh, như.
                                    Ước mong An Vui - Sung Túc cho khắp mọi người, mọi nhà</p>
                            </div>
                            <div className={s.itemBtn}>
                                <ButtonCall />
                            </div>

                        </div>
                        <div className={s.item}>
                            <div className={s.itemImage}>
                                <div className={s.image}>
                                    <Image src={'/album/trung_thu_givral_2024_26.jpg'} width={0} height={0} sizes='100%' style={{ width: '100%', height: '100%' }} alt="sdf" />
                                </div>
                                <h3 className={s.name}>Hộp 4 bánh nhỏ</h3>
                                <ul className={s.ul_w}>
                                    <li>4 Bánh (200gr / 250gr) + 1 Hộp trà 10gr</li>
                                </ul>
                            
                               
                                <p className={s.detail}>Sắc vàng trong trẻo của hộp 4 bánh nhỏ tựa như những cánh đồng đang gần mùa thu
                                    hoạch. Hay cũng chính là ánh trăng sáng dịu của mùa trăng Đoàn Viên -_ An Nhiên.
                                    “Từng họa tiết như nét chỉ thêu tỉnh xảo khắc họa những bông lúa nhỏ, những hoa văn
                                    tươi sắc đặc trưng của thổ cẩm.</p>
                            </div>

                            <div className={s.itemBtn}>
                                <ButtonCall />
                            </div>
                        </div>
                    </div>
                    <div className={`${s.rowItem} flex flex_row flex_space_around`}>
                        <div className={s.item}>
                            <div className={s.itemImage}>
                                <div className={s.image}>
                                    <Image src={'/album/trung_thu_givral_2024_27.jpg'} width={0} height={0} sizes='100%' style={{ width: '100%', height: '100%' }} alt="sdf" />
                                </div>
                                <h3 className={s.name}>Hộp 6 bánh</h3>
                                <ul className={s.ul_w}>
                                    <li>6 Bánh (150gr / 200gr / 250gr) + 1 Hộp trà 10gr</li>
                                    <li>** Phụ thu hộp: 50.000 VND</li>
                                </ul>
                             
                                <p className={s.detail}>Như bức họa sắc màu gửi gắm bao tình thân, chiếc hộp 6 bánh tràn đầy sắc màu hoa văn thổ cầm của Givral
                                    thay lời chúc Gần Kết - Yêu Thương cho một Tết Trung thu đắm ấm sum vầy. Những trái tim nhỏ xinh lung lĩnh
                                    đắn hiện bên khung cửa với kỹ thuật in ấn nh tế, hộp 6 bánh là lựa chọn trang trọng không thể bỏ qua.</p>
                            </div>

                            <div className={s.itemBtn}>
                                <ButtonCall />
                            </div>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemImage}>
                                <div className={s.image}>
                                    <Image src={'/album/trung_thu_givral_2024_29.jpg'} width={0} height={0} sizes='100%' style={{ width: '100%', height: '100%' }} alt="sdf" />
                                </div>
                                <h3 className={s.name}>Hộp đặc biệt</h3>
                                <ul className={s.ul_w}>
                                    <li>4 Bánh + 1 Hộp trà 50gr</li>
                                    <li>** Phụ thu hộp: 350.000 VND</li>
                                </ul>

                                <p className={s.detail}>Hộp bánh Trung thu đặc biệt được chạm khắc tinh xảo, cùng với sắo màu đỏ sang trọng tạo điểm nhấn nổi bật,
                                    một món quả cách điệu mang thông điệp Trung thu Như Ý cho tất cả mọi người, mọi nhà khắp nơi nơi.</p>
                            </div>

                            <div className={s.itemBtn}>
                                <ButtonCall />
                            </div>
                        </div>
                    </div>
                    <div className={`${s.rowItem} flex flex_row flex_space_around`}>
                        <div className={s.item}>
                            <div className={s.itemImage}>
                                <div className={s.image}>
                                    <Image src={'/album/trung_thu_givral_2024_30.jpg'} width={0} height={0} sizes='100%' style={{ width: '100%', height: '100%' }} alt="sdf" />
                                </div>
                                <h3 className={s.name}>Hộp 1 bánh</h3>
                                <ul className={s.ul_w}>
                                    <li>1 Bánh (200gr / 250gr)</li>
                                </ul>
                            
                           
                                <p className={s.detail}>Được thiết kế tối giản toát lên sự tính tố như một chiếc lồng đèn ông sao.
                                    lấp lánh đêm trăng rằm, gợi nhớ kỷ ức tuổi thơ đầy niềm vui và yêu thương.</p>
                            </div>

                            <div className={s.itemBtn}>
                                <ButtonCall />
                            </div>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemImage}>
                                <div className={s.image}>
                                    <Image src={'/album/trung_thu_givral_2024_30.jpg'} width={0} height={0} sizes='100%' style={{ width: '100%', height: '100%' }} alt="sdf" />
                                </div>
                                <h3 className={s.name}>Hộp 2 bánh</h3>
                                <ul className={s.ul_w}>
                                    <li>2 Bánh (200gr / 250gr)</li>
                                </ul>
                              
                                <p className={s.detail}>Được thiết kế tối giản toát lên sự tính tố như một chiếc lồng đèn ông sao.
                                    lấp lánh đêm trăng rằm, gợi nhớ kỷ ức tuổi thơ đầy niềm vui và yêu thương.</p>

                            </div>

                            <div className={s.itemBtn}>
                                <ButtonCall />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
