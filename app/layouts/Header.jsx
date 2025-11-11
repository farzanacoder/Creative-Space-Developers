import Image from 'next/image'
import React from 'react'
import Logo from '@/public/Layer_1.png'
import Link from 'next/link'
import List from '@/app/components/List'

export default function Header() {
  return (
    <header className='container mx-auto flex justify-between items-center py-5'>
      <div>
      <Image src={Logo} alt="Logo" width={100} height={50} />
      </div>


      <nav className='flex justify-between gap-5'>
        {/* Navigation items go here */}
        <Link href="/">
        <List list='Home'></List>
        </Link>
        <Link href="/about">
        <List list='About'></List>
        </Link>
        <Link href="/services">
        <List list='Services'></List>
        </Link>
        <Link href="/projects">
        <List list='Projects'></List>
        </Link>
        <Link href="/contact">
        <List list='Contact'></List>
        </Link>
      </nav>
    </header>
  )
}
