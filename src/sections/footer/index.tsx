import React from "react"
import styles from "./styles.module.scss"
import LaslesLogo from "@/components/logo"
import { FacebookIcon, WhatsappIcon, YoutubeIcon } from "@/components/icons"
import Link from "next/link"
import { SeoLinks } from "@/data"
import FooterLinks from "@/components/footerLinks"
import { FooterLinksTypes } from "@/types"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles["footer__content--info"]}>
          <LaslesLogo />
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
            arcu id purus ullamcorper. Vel vel erat semper augue.
          </p>
          <div>
            <Link href="#">
              <FacebookIcon />
            </Link>
            <Link href="#">
              <WhatsappIcon />
            </Link>
            <Link href="#">
              <YoutubeIcon />
            </Link>
          </div>
        </div>
        <div className={styles["footer__content--links"]}>
          {Object.keys(SeoLinks).map((key) => (
            <FooterLinks
              key={`seo-link${key}`}
              data={SeoLinks[key as keyof FooterLinksTypes]}
              title={key}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
