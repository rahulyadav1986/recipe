import React from 'react'

import styles from "./categoryList.module.scss"
import Image from 'next/image'
import Link from 'next/link'

const CategoryList = () => {
  return (
    <div className={styles.category_List}>
        <div className={`${styles.card} d-flex align-items-center justify-content-center`}>
            <Link href="/category/birthday-cake" className="d-flex flex-column align-items-center justify-content-center">
                <Image src="/images/c2.png" fill={true} alt="Chinese" />
                <h3>Birthday Cake</h3>
            </Link>
        </div>
        <div className={`${styles.card} d-flex flex-column align-items-center justify-content-center`}>
            <Link href="/category/chinese" className="d-flex flex-column align-items-center justify-content-center">
                <Image src="/images/c1.png" fill={true} alt="Chinese" />
                <h3>Chinese</h3>
            </Link>
        </div>        
        <div className={`${styles.card} d-flex flex-column align-items-center justify-content-center`}>
            <Link href="/category/mexican" className="d-flex flex-column align-items-center justify-content-center">
                <Image src="/images/c3.png" fill={true} alt="Chinese" />
                <h3>Mexican</h3>
            </Link>
        </div>
        <div className={`${styles.card} d-flex flex-column align-items-center justify-content-center`}>
            <Link href="/category/cocktail" className="d-flex flex-column align-items-center justify-content-center">
                <Image src="/images/c4.png" fill={true} alt="Chinese" />
                <h3>Cocktail</h3>
            </Link>
        </div>
        <div className={`${styles.card} d-flex flex-column align-items-center justify-content-center`}>
            <Link href="/category/vegan" className="d-flex flex-column align-items-center justify-content-center">
                <Image src="/images/c5.png" fill={true} alt="Chinese" />
                <h3>Vegan</h3>
            </Link>
        </div>
    </div>
  )
}

export default CategoryList
