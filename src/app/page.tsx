/* eslint-disable @next/next/no-img-element */
import Metrics from "@/sections/metrics"
import styles from "./page.module.scss"
import { MainButton } from "@/components/buttons"
import { FeaturesItems, MetricsItems, PlanItems } from "@/data"
import Features from "@/components/features"
import Prices from "@/sections/prices"

export default function Home() {
  return (
    <>
      <main className={styles.banner}>
        <div className={styles.banner__description}>
          <h1>
            Want anything to be easy with <b>LaslesVPN</b>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
            arcu id purus ullamcorper. Vel vel erat semper augue.
          </p>
          <MainButton
            size="large"
            link="#"
            text="Get started"
            variant="primary"
          />
        </div>
        <img
          className={styles.banner__image}
          src="/assets/social-laslesvpn.png"
          alt="Community manager working on their laptop"
        />
      </main>
      <Metrics data={MetricsItems} />
      <Features data={FeaturesItems}/>
      <Prices data={PlanItems}/>
    </>
  )
}
