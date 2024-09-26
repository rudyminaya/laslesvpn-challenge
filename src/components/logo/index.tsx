import React from "react"
import styles from "./styles.module.scss"
import { Logo } from "../icons"

const LaslesLogo = () => {
  return (
    <div className={styles.logo}>
      <Logo />
      Lasles<b>VPN</b>
    </div>
  )
}
export default LaslesLogo
