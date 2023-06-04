import React from 'react'
import styles from  "./drawerMenu.module.scss"
import CategoryList from '../CategoryList/CategoryList'
const DrawerMenu = ({className}) => {
  return (
    
    <div className={`${ !className ? styles.drawermenu_wrapper : styles.drawermenu_wrapper `${styles.open}`}`}>
        <CategoryList />
    </div>
    
  )
}

export default DrawerMenu
