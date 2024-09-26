import Link from "next/link"
import React from "react"
import styles from "./styles.module.scss"

type ButtonProps = {
  onClick?: () => void
  link?: string
  text: string
  variant: "primary" | "secondary"
  size: "small" | "medium" | "large"
  className?: string
}

export const MainButton = ({
  onClick,
  link,
  text,
  variant,
  className,
  size = "medium",
}: ButtonProps) => {
  if (link) {
    return (
      <Link href={link}>
        <button
          className={[
            styles["main-button"],
            styles[`main-button--${variant}`],
            styles[size],
            className,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {text}
        </button>
      </Link>
    )
  }
  return (
    <button
      onClick={onClick}
      className={[
        styles["main-button"],
        styles[`main-button--${variant}`],
        styles[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {text}
    </button>
  )
}
