import styles from "./page.module.scss"
import { MainButton } from "@/components/buttons"

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
    </>
  )
}
