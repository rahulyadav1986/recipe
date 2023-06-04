import React, { useState } from 'react'
import styles from  "./recipe.module.scss"
import DrawerMenu from '../Shared/DrawerMenu'
import CategoryList from '../CategoryList/CategoryList'
import { useRouter } from 'next/router'
const searchChnage = (e)=>{
    e.target.value
}
const FilterArea = (props) => {
  const [clickMenu, setClickMenu] = useState(false)
  const location = useRouter()
  const actualLink = location.pathname
  return (
    <>
      <div className={`${!clickMenu ? "ovarlay" : "ovarlay open"}`} onClick={()=>setClickMenu(!clickMenu)}></div>
      <div className={styles.filter_wrapper}>
          <div className={styles.filter_button} onClick={()=>setClickMenu(!clickMenu)}></div>
            <div className={`${ !clickMenu ? "drawermenu_wrapper" : "drawermenu_wrapper open"}`}>
              <CategoryList />
            </div>
            {
              actualLink === '/category' ? 
              <h1>What you would like to Cook ?</h1>
              :
              <h1>What you would like to Cook of <span>{props.title}</span>?</h1>
            }
            <input typfre="text" placeholder='Search your query here' onChange={searchChnage} name="" id="" />
      </div>
    </>
  )
}

export default FilterArea
