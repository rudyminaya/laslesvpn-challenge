import { SeoLinksType } from "@/types"
import React from "react"
import styles from "./styles.module.scss"
import Link from "next/link"

type FooterLinksProps = {
  data: SeoLinksType[]
  title: string
}

const FooterLinks = ({ data, title }: FooterLinksProps) => {
  return (
    <div className={styles.footerlinks}>
      <h3 className={styles.footerlinks__title}>{title}</h3>
      {data.map((item, index) => (
        <Link className={styles.footerlinks__link} key={`${item.name.trim()}-0${index}`} href={item.url}>
          {item.name}
        </Link>
      ))}
    </div>
  )
}

export default FooterLinks
