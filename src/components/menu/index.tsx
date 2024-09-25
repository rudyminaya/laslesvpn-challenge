"use client"
import React, { useEffect, useState } from "react"
import styles from "./styles.module.scss"
import { Logo } from "../icons"
import Link from "next/link"
import { MenuItems } from "@/data"
import { MainButton } from "../buttons"

const MenuLinks = () => (
  <div className={styles.menu__options__items}>
    {MenuItems.map((item, index) => (
      <Link key={index} href={item.url}>
        {item.title}
      </Link>
    ))}
  </div>
)

const AuthLinks = () => (
  <div className={styles.menu__options__auth}>
    <Link href="#signin" className={styles["menu__options__auth--signin"]}>
      Sign in
    </Link>
    <MainButton
      className={styles["menu__options__auth--signup"]}
      text="Sign up"
      variant="secondary"
      link="#signup"
      size="small"
    />
  </div>
)

const MenuNavItems = () => (
  <>
    <MenuLinks />
    <AuthLinks />
  </>
)

const Menu = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 919)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className={styles.container}>
      <nav className={styles.menu}>
        <div className={styles.menu__logo}>
          <Logo />
          Lasles<b>VPN</b>
        </div>
        <input
          type="checkbox"
          className={styles.menu__checkbox}
          id="menu__toggle"
        />
        <label htmlFor="menu__toggle" className={styles["menu__toggle-button"]}>
          <div></div>
        </label>
        {isMobile ? (
          <div className={styles.menu__options}>
            <MenuNavItems />
          </div>
        ) : (
          <MenuNavItems />
        )}
      </nav>
    </header>
  )
}

export default Menu
