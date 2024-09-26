import React from "react"
import styles from "./styles.module.scss"

const Suscription = () => {
  return (
    <aside className={styles.suscription}>
      <div className={styles.suscription__content}>
        <h2 className={styles.suscription__content__title}>
          Subscribe now for get special features!
        </h2>
        <p className={styles.suscription__content__description}>
          Lorem ipsum dolor sit amet
        </p>
      </div>
      <button className={styles.suscription__button}>Subscribe now</button>
    </aside>
  )
}

export default Suscription
