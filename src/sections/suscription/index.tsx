import React from "react"
import styles from "./styles.module.scss"
import { MainButton } from "@/components/buttons"

const Suscription = () => {
  return (
    <aside className={styles.suscription}>
      <div className={styles.suscription__content}>
        <h2>Subscribe now for get special features!</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <MainButton
        size="large"
        text="Subscribe now"
        variant="primary"
        link="#"
      />
    </aside>
  )
}

export default Suscription
