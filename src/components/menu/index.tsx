import React from "react"
import styles from "./styles.module.scss"
import { Logo } from "../icons"
import Link from "next/link"
import { MenuItems } from "@/data/menu"
import { MainButton } from "../buttons"

const Menu = () => {
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
        <div className={styles.menu__options}>
          <div className={styles.menu__options__items}>
            {MenuItems.map((item, index) => {
              return (
                <Link key={index} href={item.url}>
                  {item.title}
                </Link>
              )
            })}
          </div>
          <div className={styles.menu__options__auth}>
            <Link
              href="#signin"
              className={styles["menu__options__auth--signin"]}
            >
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
        </div>
      </nav>
    </header>
  )
}

export default Menu
