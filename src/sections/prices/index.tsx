"use client"
import { PlanItemTypes } from "@/types"
import React, { useEffect, useRef, useState } from "react"
import styles from "./styles.module.scss"
import Plan from "../../components/plan"

type Props = {
  data: PlanItemTypes[]
}

const Prices = ({ data }: Props) => {
  
  const [activePlan, setActivePlan] = useState<number>(
    data.find(
      (plan) => plan.price === Math.max(...data.map((plan) => plan.price))
    )?.price ?? 0
  )

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    }
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.prices}>
        <h5>Choose your plan</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </p>

        <div className={styles["container-plans"]} ref={containerRef}>
          <div className={styles["container-plans__items"]}>
            {data.map((plan, index) => {
              return (
                <Plan
                  key={`${plan.title.trim()}-${index}`}
                  {...plan}
                  onClick={setActivePlan}
                  active={plan.price === activePlan}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prices
