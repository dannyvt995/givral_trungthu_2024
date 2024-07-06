"use client"
import Head from 'next/head'
import s from '../styles/Home.module.css'
import FooterSection from './components/FooterSection'
import NavbarSection from './components/NavbarSection'
import WidgetSection from './components/WidgetSection'
import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import ComboSection from './components/ComboSection'
import PriceSection from './components/PriceSection'
import BoxSection from './components/BoxSection'
import GallerySection from './components/GallerySection'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
export default function Home() {
  return (
    <ReactLenis root>
      <div className={s.container}>
        <Head>
          <title>Trang chủ - Bánh trung thu Givral 2024</title>
          <meta name="description" content="Đại lý phân phối Bánh trung thu Givral 2024" />
          <link rel="icon" href="/logo_givral_mooncake.ico" />
        </Head>
        <NavbarSection />
        <WidgetSection />
        <main className={s.main}>
          <HeroSection />
          <IntroSection />
          <ComboSection />
          <PriceSection />
          <GallerySection />
        </main>

        <FooterSection />
      </div>
    </ReactLenis>

  )
}
