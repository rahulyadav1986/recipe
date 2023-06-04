import MainContainer from '@/components/MainContainer'
import FilterArea from '@/components/Recipes/FilterArea'
import TodayRecipeCard from '@/components/Recipes/TodayRecipeCard'
import React, { useState } from 'react'
import { env } from 'next.config';
import Link from 'next/link';
import { RecipeSkeletonAll } from '@/components/Skeletons/Skeletons';
import styles from "../../../../components/Recipes/recipe.module.scss"
import Image from 'next/image';
const ChineseFoodAll = () => {
  const [todayRecipes, setTodayRecipes] =useState([])
  const [loading, setLoading] = useState(false)
  const [count, setCount] =useState(10)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': env.apiKey,
      'X-RapidAPI-Host': env.hostUrlOfChiness
    }
  };

  const getTodayRecipes = async ()=>{
    setLoading(true)
    await fetch(`${env.apiUrlOfChiness}`,options)
    .then(response => response.json())
    .then(todayRecipes => {
      setTodayRecipes(todayRecipes)
      setLoading(false)
      console.log(todayRecipes)
    })
    
      
  }

  useState(()=>{
    
    getTodayRecipes()
    
  },[])
  
  return (
    <MainContainer>
      <div className="recipes_wrapper">
        <div className="filter_button"></div>
        <div className="today_receipe_wrapper">
          <div className='d-flex align-items-center justify-content-between'>
            <h2><span>Chinese</span> Recipe</h2>
          </div>
          
          <div className="today_receipe_card d-grid">
            {
              loading ?
              <RecipeSkeletonAll />
              :
              todayRecipes.slice(0,`${count}`).map((item, i)=>{
                return(
                  <div key={i} className={`${styles.card} card`}>
                      <Link href={`/category/chinese/${item.id}`}>
                        <Image src={item.image} fill={true} alt={item.title} />
                        <div className={`${styles.content_area} d-flex flex-column justify-content-end`}>
                            <h6>{item.title}</h6>
                            <span>{item.difficulty}</span>
                        </div>
                      </Link>
                  </div>
                )
              })
            }
          </div>
          {
          count > todayRecipes.length  ?
          "":
          <button className='global_button float' style={{margin: '20px 0'}} onClick={()=>setCount(count + 4)}>MORE</button>
        }
        </div>
      </div>
    </MainContainer>
  )
}

export default ChineseFoodAll
