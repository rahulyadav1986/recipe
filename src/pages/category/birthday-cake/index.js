import MainContainer from '@/components/MainContainer'
import FilterArea from '@/components/Recipes/FilterArea'
import TodayRecipeCard from '@/components/Recipes/TodayRecipeCard'
import React, { useState } from 'react'
import { env } from 'next.config';
import Link from 'next/link';
import { TodayRecipeSkeleton } from '@/components/Skeletons/Skeletons';
import styles from "../../../components/Recipes/recipe.module.scss"
import Image from 'next/image';
const BirthDayCake = () => {
  const [todayRecipes, setTodayRecipes] =useState([])
  const [clickMenu, setClickMenu] = useState(false)
  const [loading, setLoading] = useState(false)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': env.apiKey,
      'X-RapidAPI-Host': env.hostUrlOfBirthdayCake
    }
  };

  const getTodayRecipes = async ()=>{
    setLoading(true)
    await fetch(`${env.apiUrlOfBirthdayCake}`,options)
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
        <FilterArea title="Birthday Cake" />
        <div className="today_receipe_wrapper">
          <div className='d-flex align-items-center justify-content-between'>
            <h2>Today Recipe</h2>
            <Link href="/category/birthday-cake/all-recipe" className='view_all'>View all</Link>
          </div>
          
          <div className="today_receipe_card d-flex scroll_area">
            {
              loading ?
              <TodayRecipeSkeleton />
              :
              todayRecipes.slice(0,20).map((item, i)=>{
                return(
                  <div key={i} className={styles.card}>
                      <Link href={`/category/birthday-cake/${item.id}`}>
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
        </div>
      </div>
    </MainContainer>
  )
}

export default BirthDayCake
