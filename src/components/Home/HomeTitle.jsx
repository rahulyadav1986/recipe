import React from 'react'
import styles from  "./home.module.scss"
import Link from 'next/link';
const HomeTitle = () => {
  return (
    <div className={styles.title_wrapper}>
        <h3>600+ Premium recipes</h3>
        <h1>It`&apos;`<br />Cooking<br />Time!</h1>
        <Link className={`${styles.global_button} global_button`} href="/category">get started</Link>
    </div>
  )
}

export default HomeTitle;
