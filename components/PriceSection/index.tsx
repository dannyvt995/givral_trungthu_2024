import React from 'react'
import s from './style.module.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from 'next/image';
import ButtonDowload from '../ButtonDowload';

export default function PriceSection() {
    return (
        <div className='container'>

            <section className={`${s.price_section} margin_each_section`} id="price_section">
                <div className='tittle_component'>
                    <h2>COMBO TRUNG THU GIVRAL 2024</h2>
                    <p>Dưới đây là bảng giá bánh trung thu givral 2023, mời quý khách hàng tham khảo.</p>
    
                    <ButtonDowload url='/banner_1.jpg' /* content='Tải File Bảng Giá' */ />
                </div>
                <Tabs>
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
                                <Image className={s.item} src={'/bang_gia/combo/0.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto' }} />
                                <Image className={s.item} src={'/bang_gia/combo/1.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto' }} />
                                <Image className={s.item} src={'/bang_gia/combo/2.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto' }} />
                                <Image className={s.item} src={'/bang_gia/combo/3.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto' }} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={s.image}>
                                <Image className={s.item} src={'/bang_gia/banh_deo/0.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto' }} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={s.image}>
                                <Image className={s.item} src={'/bang_gia/banh_khong_trung/0.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto' }} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={s.image}>
                                <Image className={s.item} src={'/bang_gia/banh_ngu_sac/0.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto' }} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={s.image}>
                                <Image className={s.item} src={'/bang_gia/banh_nhan_man/0.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto' }} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={s.image}>
                                <Image className={s.item} src={'/bang_gia/banh_nhan_ngot/0.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto' }} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={s.image}>
                                <Image className={s.item} src={'/bang_gia/banh_dac_biet/0.jpg'} alt="" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto' }} />
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </section>
        </div>
    )
}
