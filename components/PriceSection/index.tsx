import React from 'react'
import s from './style.module.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from 'next/image';
import ButtonDowload from '../ButtonDowload';
import IconSVG from '../IconSVG';
import { useLenisContext } from '../../contexts/LenisContext';
export default function PriceSection() {
    const lenis = useLenisContext();
    const scrollToSection = () => {
      if (lenis) {
        lenis.scrollTo(`#table_price`);
      }
    };
    return (
        <div className='container'>

            <section className={`${s.price_section} margin_each_section`} id="price_section">
                <div className='tittle_component'>
                <div className='tittle_wrap'>
                        <span className='tittle_ic'>
                            <IconSVG src="/i_star.svg"/>
                          
                        </span>
                        <h2>Bảng giá trung thu Givral 2024</h2>
                    </div>
                    <div className='tittle_wrap_2'>
                        <span className='tittle_icd'></span>
                        <p>Dưới đây là bảng giá bánh trung thu givral 2023, mời quý khách hàng tham khảo.</p>
                    </div>

    
                   <div className='tittle_wrap_btn'>
                   <ButtonDowload url='/banner_1.jpg' /* content='Tải File Bảng Giá' */ />
                   </div>
                </div>
                <Tabs  onSelect={scrollToSection} id="table_price">
                    <TabList>

                        <Tab>Combo Trung thu 2024</Tab>
                        <Tab>Bánh Dẻo</Tab>
                        <Tab>Bánh 0 Trứng</Tab>
                        <Tab>Bánh Ngũ Sắc</Tab>
                        <Tab>Bánh Nhân Mặn</Tab>
                        <Tab>Bánh Nhân Ngọt</Tab>
                        <Tab>Bánh Đặc Biệt</Tab>
                    </TabList>

                    <div className={s.tabpanel}>
                        <div className={s.tabpanel_background} >
                            <Image className={s.item} src={'/bang_dinh.png'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <TabPanel>
                            <div className={s.image}>
                                <Image className={s.item} src={'/bang_gia/combo/0.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto', display: 'block' }} />
                                <Image className={s.item} src={'/bang_gia/combo/1.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto', display: 'block' }} />
                                <Image className={s.item} src={'/bang_gia/combo/2.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto', display: 'block' }} />
                                <Image className={s.item} src={'/bang_gia/combo/3.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={s.image}>
                                <Image className={s.item} src={'/bang_gia/banh_deo/0.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={s.image}>
                                <Image className={s.item} src={'/bang_gia/banh_khong_trung/0.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={s.image}>
                                <Image className={s.item} src={'/bang_gia/banh_ngu_sac/0.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={s.image}>
                                <Image className={s.item} src={'/bang_gia/banh_nhan_man/0.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={s.image}>
                                <Image className={s.item} src={'/bang_gia/banh_nhan_ngot/0.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={s.image}>
                                <Image className={s.item} src={'/bang_gia/banh_dac_biet/0.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </section>
        </div>
    )
}
