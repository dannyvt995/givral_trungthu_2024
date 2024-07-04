import Head from 'next/head'
import s from '../styles/Home.module.css'
import FooterSection from './components/FooterSection'
import NavbarSection from './components/NavbarSection'

export default function Home() {
  return (
    <div className={s.container}>
      <Head>
        <title>Trang chủ - Bánh trung thu Givral 2024</title>
        <meta name="description" content="Đại lý phân phối Bánh trung thu Givral 2024" />
        <link rel="icon" href="/logo_givral_mooncake.ico" />
      </Head>
      <NavbarSection/>
      <main className={s.main}>

      </main>

      <FooterSection/>
    </div>
  )
}
