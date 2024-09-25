/* eslint-disable @next/next/no-img-element */
import { PlanItemTypes } from "@/types"
import React from "react"
import styles from "./styles.module.scss"
import { MainButton } from "@/components/buttons"
import { CheckIcon } from "@/components/icons"

type PlanProps = PlanItemTypes & {
  active: boolean
  onClick: (price: number) => void
}

const Plan = ({ features, price, title, active, onClick }: PlanProps) => {
  return (
    <div
      className={[styles.plan, active && styles["plan--active"]]
        .filter(Boolean)
        .join(" ")}
      onClick={() => onClick(price)}
    >
      <img src="/assets/premium.png" alt="Premium plan" loading="lazy" />
      <h5 className={styles.plan__title}>{title}</h5>
      <ul className={styles.plan__features}>
        {features.map((feature, index) => {
          return (
            <li key={index}>
              <CheckIcon />
              {feature}
            </li>
          )
        })}
      </ul>
      <p className={styles.plan__price}>
        {" "}
        <b>
          {price === 0 ? "Free" : `$${price} `}
          {price > 0 && <span>/</span>}{""}
        </b>{""}
        {price > 0 && <span>mo</span>}
      </p>
      <MainButton className={styles.plan__button} size="medium" text="Select" variant="primary" />
    </div>
  )
}

export default Plan
