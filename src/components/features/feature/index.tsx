import React from 'react'
import styles from './styles.module.scss'
import { FeatureItemTypes } from '@/types'

const Feature = ({icon,quantity,description}: FeatureItemTypes) => {
  return (
    <div className={styles.feature}>
      {icon}
      <div className={styles.feature__details}>
        <h5>{quantity}+</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Feature