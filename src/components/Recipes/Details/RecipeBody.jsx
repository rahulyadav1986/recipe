import React, { useState } from 'react'
import styles from "../recipe.module.scss"
import Image from 'next/image'
const RecipeBody = ({TopRecipeDetails}) => {
  const [cooking, setCooking]= useState(false)
  return (
    <div className={styles.receipeDetails_wrapper}>
        <h1>{TopRecipeDetails.title}</h1>
        <ul className={`${styles.time_card} d-flex align-items-center justify-content-between`}>
          <li className='d-flex align-items-center justify-content-center flex-column'>
            <Image src="/images/happyv2.png" fill={true} alt="difficulty" />
            {TopRecipeDetails.difficulty}
          </li>
          <li className='d-flex align-items-center justify-content-center flex-column'>
            <Image src="/images/serve.png" fill={true} alt="serve" />
            {TopRecipeDetails.portion}
          </li>
          <li className='d-flex align-items-center justify-content-center flex-column'>
            <Image src="/images/ingi.png" fill={true} alt="serve" />
            Ingredients {TopRecipeDetails.ingredients.length}
          </li>
        </ul>
        <p>{TopRecipeDetails.description}</p>
        <div className={`${styles.ingredients_wrapper} ${styles.padding}`}>
            <h2>Ingredients :</h2>
            <ul className={styles.list}>
              {
                TopRecipeDetails.ingredients.map((item,i)=>{
                  return(
                    <li key={i}>{item}</li>
                  )
                })
              }
            </ul>
        </div>
        <div className={`${styles.button_wrap}`}>
          <button className="global_button float" onClick={()=>setCooking(!cooking)}>Start Cooking</button>
        </div>
        
        <div className={`${!cooking ? 'ovarlay' : 'ovarlay open'}`} onClick={()=>setCooking(!cooking)}></div>
        <div className={`${
            !cooking ? 
            `${styles.ingredients_wrapper} ${styles.filter_wrap}` : 
            `${styles.ingredients_wrapper} ${styles.filter_wrap} ${styles.open}` 
            }`}>
            <h2>Directions :</h2>
            <ul className={styles.list}>
              {
                TopRecipeDetails.method.map((item,i)=>{
                  
                  return(
                    <li key={i}> <strong>Step {i + 1}</strong>: {item[`Step ${i+1}`]}</li>
                  )
                })
              }
            </ul>
        </div>
    </div>
  )
}

export default RecipeBody


