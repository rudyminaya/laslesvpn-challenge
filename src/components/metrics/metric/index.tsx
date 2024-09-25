import React from "react"
import styles from "./styles.module.scss"
import { MetricItemTypes } from "@/types"

const Metric = ({ icon, quantity, description }: MetricItemTypes) => {
  return (
    <div className={styles.metric}>
      {icon}
      <div className={styles.metric__details}>
        <h5>{quantity}+</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Metric
