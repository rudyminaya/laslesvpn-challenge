/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './styles.module.scss'
import { TestimonialItemsTypes } from '@/types'
import { StarIcon } from '../icons'

type Props = TestimonialItemsTypes & {
    onClick: (id:number) => void
    active: boolean
}

const SlideItem = ({id, photo, name, job, stars, description, onClick, active}: Props) => {
  return (
    <div className={[styles["slide-item"],active && styles["slide-item--active"]].filter(Boolean).join(" ")} onClick={()=>onClick(id)}>
        <div className={styles["slide-item__header"]}>
            <img
                src={photo}
                alt={`${name}'s photo`}
            />
            <div className={styles["slide-item__header__desc"]}>
               <b>{name}</b>
               <p><span>{job}</span> <span>{stars}<StarIcon/></span></p>
            </div>
        </div>
        <p>{description}</p>
    </div>
  )
}

export default SlideItem