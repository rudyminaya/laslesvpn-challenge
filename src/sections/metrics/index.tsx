import { MetricItemTypes } from "@/types"
import React from "react"
import styles from "./styles.module.scss"
import Metric from "../../components/metric"

type MetricsProps = {
  data: MetricItemTypes[]
}

const Metrics = ({ data }: MetricsProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.metrics}>
        {data.map((metric, index) => {
          return (
            <Metric key={`${metric.description.trim()}-${index}`} {...metric} />
          )
        })}
      </div>
    </section>
  )
}

export default Metrics
