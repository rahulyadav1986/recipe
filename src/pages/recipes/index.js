import MainContainer from '@/components/MainContainer'
import FilterArea from '@/components/Recipes/FilterArea'
import TodayRecipeCard from '@/components/Recipes/TodayRecipeCard'
import React, { useState } from 'react'
import { env } from '../../../next.config';
import Link from 'next/link';
import { TodayRecipeSkeleton } from '@/components/Skeletons/Skeletons';
const Recipes = () => {
  const [todayRecipes, setTodayRecipes] =useState([])
  const [loading, setLoading] = useState(false)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': env.apiKey,
      'X-RapidAPI-Host': env.hostUrl
    }
  };

  const getTodayRecipes = async ()=>{
    setLoading(true)
    await fetch(`${env.apiUrl}`,options)
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
        <FilterArea />
        <div className="today_receipe_wrapper">
          <div className='d-flex align-items-center justify-content-between'>
            <h2>Today Recipe</h2>
            <Link href="/" className='view_all'>View all</Link>
          </div>
          
          <div className="today_receipe_card d-flex scroll_area">
            {
              loading ?
              <TodayRecipeSkeleton />
              :
              todayRecipes.slice(0,20).map((item, i)=>{
                return(
                  <TodayRecipeCard key={i} item={item} />
                )
              })
            }
          </div>
        </div>
      </div>
    </MainContainer>
  )
}

export default Recipes
