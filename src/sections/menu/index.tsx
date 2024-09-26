"use client"
import React, { useEffect, useState } from "react"
import styles from "./styles.module.scss"
import Link from "next/link"
import { MenuItems } from "@/data"
import { MainButton } from "../../components/buttons"
import LaslesLogo from "@/components/logo"

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
    <Link href="#" className={styles["menu__options__auth--signin"]}>
      Sign in
    </Link>
    <MainButton
      className={styles["menu__options__auth--signup"]}
      text="Sign up"
      variant="secondary"
      link="#"
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
  const [isSticky, setIsSticky] = useState<boolean>(true)
  const [lastScrollTop, setLastScrollTop] = useState<number>(0)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 919)
    }

    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop

      if (currentScroll > lastScrollTop) {
        setIsSticky(false)
      } else if (currentScroll <= 0) {
        setIsSticky(true)
      } else if (currentScroll < lastScrollTop) {
        setIsSticky(true)
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollTop])

  return (
    <header
      className={[styles.container, !isSticky ? styles.hidden : ""].join(" ")}
      style={{ position: isSticky ? "sticky" : "relative" }}
    >
      <nav className={styles.menu}>
        <LaslesLogo />
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
