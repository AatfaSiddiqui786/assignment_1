import React from 'react'
import Link from "next/link"
import styles from "../../app../../../Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Header Content</h1>
      <nav>
      <ul  className={styles.navList}>
      <li><Link href="/">Home</Link></li>
      
      <li><Link href="/about">About</Link></li>
      
      <li><Link href="/contact-us">Contact Us</Link></li>
      </ul>
      </nav>
    </header>
  )
}

export default Header