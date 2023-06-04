import React from 'react'
import styles from "../recipe.module.scss"
import Image from 'next/image'
import Link from 'next/link'
const ReiepeHero = ({TopRecipeDetails}) => {
  return (
    <div className={styles.reciepeHero}>
        <Image src={TopRecipeDetails.image} fill={true} alt={TopRecipeDetails.title} />
        <Link href="/recipes" className="back"></Link>
    </div>
  )
}


export default ReiepeHero