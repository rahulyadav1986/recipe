import React from 'react'
import styles from  "./home.module.scss"
import Image from 'next/image'
const HomeBg = () => {
  return (
     <div className={styles.home_bg_wrapper}>
        <Image src="/images/home_bg.png" fill={true} alt="home bg" />
     </div>
  )
}

export default HomeBg
