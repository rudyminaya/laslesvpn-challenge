import { FeatureItemTypes } from "@/types"
import React from "react"
import styles from "./styles.module.scss"
import Feature from "./feature"

type FeaturesProps = {
  data: FeatureItemTypes[]
}

const Features = ({ data }: FeaturesProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.features}>
        {data.map((feature, index) => {
          return (
            <Feature
              key={`${feature.description.trim()}-${index}`}
              {...feature}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Features
