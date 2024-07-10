"use client"

import Head from 'next/head'
import s from '../styles/Home.module.css'
import FooterSection from '../components/FooterSection'
import NavbarSection from '../components/NavbarSection'
import WidgetSection from '../components/WidgetSection'
import HeroSection from '../components/HeroSection'
import IntroSection from '../components/IntroSection'
import ComboSection from '../components/ComboSection'
import PriceSection from '../components/PriceSection'
import BoxSection from '../components/BoxSection'
import GallerySection from '../components/GallerySection'
import { ReactLenis } from '@studio-freight/react-lenis'
import { useEffect, useRef,useState } from 'react'
import { LenisContext } from '../contexts/LenisContext';
import FormContact from '../components/FormContact'


declare global {
  interface Window {
    lenis: any;
  }
}


export default function Home() {
  const lenisRef = useRef<{ lenis: any } | null>(null);
  const [lenisInstance, setLenisInstance] = useState(null);

  useEffect(() => {
    if (lenisRef.current) {
      setLenisInstance(lenisRef.current.lenis);
    }
  }, [lenisRef.current]);

  return (
    <LenisContext.Provider value={lenisInstance}>
      <ReactLenis ref={lenisRef} root>
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
           {/*  <GallerySection /> */}
          <FormContact/>
          </main>

          <FooterSection />
        </div>
      </ReactLenis>
    </LenisContext.Provider>


  )
}
