import React from 'react'
import styles from  "./recipe.module.scss"
const searchChnage = (e)=>{
    e.target.value
}
const FilterArea = (props) => {
  return (
    <div className={styles.filter_wrapper}>
        <div className={styles.filter_button}></div>
        <h1>What you would like to Cook of <span>{props.title}</span>?</h1>
        <input type="text" placeholder='Search your query here' onChange={searchChnage} name="" id="" />
    </div>
  )
}

export default FilterArea
