import React from 'react'
import styles from "./recipe.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
const TodayRecipeCard = ({item}) => {
  let location = useRouter();
  const actualLink = location.pathname;
  return (
    <div className={styles.card}>
        <Link href={`${actualLink}/${item.id}`}>
          <Image src={item.image} fill={true} alt={item.title} />
          <div className={`${styles.content_area} d-flex flex-column justify-content-end`}>
              <h6>{item.title}</h6>
              <span>{item.difficulty}</span>
          </div>
        </Link>
    </div>
  )
}

export default TodayRecipeCard