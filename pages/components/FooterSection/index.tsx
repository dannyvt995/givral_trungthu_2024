import React from 'react'
import s from './style.module.css'

export default function FooterSection() {
  return (
    <footer className={s.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {'Distribution Agent Givral Moon Cake'}
          <span className={s.logo}>
           {/*  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </span>
        </a>
      </footer>
  )
}
