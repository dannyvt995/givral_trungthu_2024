import React from 'react'
import s from './style.module.css'
import Image from 'next/image'
import ButtonCall from '../ButtonCall'

export default function ComboSection() {
    return (
        <section className={`${s.combo_section} margin_each_section`}>
          
            <div className='container'>
            <div className='tittle_component'>
                <h2>COMBO TRUNG THU GIVRAL 2024</h2>
                <p>Dưới đây là danh sách combo bánh trung thu givral 2024, mời quý khách hàng tham khảo.</p>
                <a>Tải File Bảng Giá</a>
           </div>
                <div className={s.typeCombo}>
                    <div className={`${s.rowItem} flex flex_row flex_space_around`}>
                        <div className={s.item}>
                            <div className={s.image}>
                                <Image src={'/album/trung_thu_givral_2024_25.jpg'} width={0} height={0} sizes='100%' style={{ width: '100%', height: 'auto' }} alt="sdf" />
                            </div>
                            <h3 className={s.name}>Hộp 4 bánh</h3>
                            <span className={s.tag}>4 Bánh (200gr / 250gr) + 1 Hộp trà 10gr</span>
                            <p>Chiếc hộp xanh như được dệt nên từ hoa văn thổ cẩm vô cùng
                                sinh động, dịu dàng mà vững chãi một miền núi sông. Màu xanh
                                lá đậm tỏa rộng làm nổi bật những họa tiết thổ cẩm óng ánh, như.
                                Ước mong An Vui - Sung Túc cho khắp mọi người, mọi nhà</p>
                           <ButtonCall/>
                        </div>
                        <div className={s.item}>
                            <div className={s.image}>
                                <Image src={'/album/trung_thu_givral_2024_26.jpg'} width={0} height={0} sizes='100%' style={{ width: '100%', height: 'auto' }} alt="sdf" />
                            </div>
                            <h3 className={s.name}>Hộp 4 bánh nhỏ</h3>
                            <span className={s.tag}>4 Bánh (200gr / 250gr) + 1 Hộp trà 10gr</span>
                            <p>Sắc vàng trong trẻo của hộp 4 bánh nhỏ tựa như những cánh đồng đang gần mùa thu
                                hoạch. Hay cũng chính là ánh trăng sáng dịu của mùa trăng Đoàn Viên -_ An Nhiên.
                                “Từng họa tiết như nét chỉ thêu tỉnh xảo khắc họa những bông lúa nhỏ, những hoa văn
                                tươi sắc đặc trưng của thổ cẩm.</p>
                               <ButtonCall/>
                        </div>
                    </div>
                    <div className={`${s.rowItem} flex flex_row flex_space_around`}>
                        <div className={s.item}>
                            <div className={s.image}>
                                <Image src={'/album/trung_thu_givral_2024_27.jpg'} width={0} height={0} sizes='100%' style={{ width: '100%', height: 'auto' }} alt="sdf" />
                            </div>
                            <h3 className={s.name}>Hộp 6 bánh</h3>
                            <span className={s.tag}>6 Bánh (150gr / 200gr / 250gr) + 1 Hộp trà 10gr</span>
                            <span className={s.note}>* Phụ thu hộp: 50.000 VND</span>
                            <p>Như bức họa sắc màu gửi gắm bao tình thân, chiếc hộp 6 bánh tràn đầy sắc màu hoa văn thổ cầm của Givral
                                thay lời chúc Gần Kết - Yêu Thương cho một Tết Trung thu đắm ấm sum vầy. Những trái tim nhỏ xinh lung lĩnh
                                đắn hiện bên khung cửa với kỹ thuật in ấn nh tế, hộp 6 bánh là lựa chọn trang trọng không thể bỏ qua.</p>
                               <ButtonCall/>
                        </div>
                        <div className={s.item}>
                            <div className={s.image}>
                                <Image src={'/album/trung_thu_givral_2024_29.jpg'} width={0} height={0} sizes='100%' style={{ width: '100%', height: 'auto' }} alt="sdf" />
                            </div>
                            <h3 className={s.name}>Hộp đặc biệt</h3>
                            <span className={s.tag}>4 Bánh + 1 Hộp trà 50gr</span>
                            <span className={s.note}>* Phụ thu hộp: 350.000 VND</span>
                            <p>Hộp bánh Trung thu đặc biệt được chạm khắc tinh xảo, cùng với sắo màu đỏ sang trọng tạo điểm nhấn nổi bật,
                                một món quả cách điệu mang thông điệp Trung thu Như Ý cho tất cả mọi người, mọi nhà khắp nơi nơi.</p>
                               <ButtonCall/>
                        </div>
                    </div>
                    <div className={`${s.rowItem} flex flex_row flex_space_around`}>
                        <div className={s.item}>
                            <div className={s.image}>
                                <Image src={'/album/trung_thu_givral_2024_30.jpg'} width={0} height={0} sizes='100%' style={{ width: '100%', height: 'auto' }} alt="sdf" />
                            </div>
                            <h3 className={s.name}>Hộp 1 bánh</h3>
                            <span className={s.tag}>1 Bánh (200gr / 250gr)</span>
                            <p>Được thiết kế tối giản toát lên sự tính tố như một chiếc lồng đèn ông sao.
                                lấp lánh đêm trăng rằm, gợi nhớ kỷ ức tuổi thơ đầy niềm vui và yêu thương.</p>
                               <ButtonCall/>
                       </div>
                        <div className={s.item}>
                            <div className={s.image}>
                                <Image src={'/album/trung_thu_givral_2024_30.jpg'} width={0} height={0} sizes='100%' style={{ width: '100%', height: 'auto' }} alt="sdf" />
                            </div>
                            <h3 className={s.name}>Hộp 2 bánh</h3>
                            <span className={s.tag}>2 Bánh (200gr / 250gr)</span>
                            <p>Được thiết kế tối giản toát lên sự tính tố như một chiếc lồng đèn ông sao.
                                lấp lánh đêm trăng rằm, gợi nhớ kỷ ức tuổi thơ đầy niềm vui và yêu thương.</p>
                               <ButtonCall/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
