/* eslint-disable @next/next/no-img-element */
import React from "react"
import styles from "./styles.module.scss"
import { CheckIcon } from "../icons"

type Props = {
  data: string[]
  id: string
}

const Features = ({ data, id }: Props) => {
  return (
    <section id={id} className={styles.container}>
      <div className={styles.features}>
        <img
          src="/assets/features-guy.png"
          alt="Guy with a laptop showing features"
          loading="lazy"
        />
        <div className={styles.features__details}>
          <h5>We provide many features you can use</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
            arcu id purus ullamcorper. Vel vel erat semper augue.
          </p>
          <ul className={styles.features__details__list}>
            {data.map((feature, index) => {
              return (
                <li key={index}>
                  <CheckIcon /> {feature}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Features
