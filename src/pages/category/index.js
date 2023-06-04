import MainContainer from '@/components/MainContainer'
import FilterArea from '@/components/Recipes/FilterArea'
import TodayRecipeCard from '@/components/Recipes/TodayRecipeCard'
import React, { useState } from 'react'
import { env } from '../../../next.config';
import Link from 'next/link';
import { TodayRecipeSkeleton } from '@/components/Skeletons/Skeletons';
import CategoryList from '@/components/CategoryList/CategoryList';
import styles from  "../../components/Recipes/recipe.module.scss"
import DrawerMenu from '@/components/Shared/DrawerMenu';

const Category = () => {
  const [clickMenu, setClickMenu] = useState(false)
  const searchChnage = (e)=>{
    e.target.value
}
  
  return (
    <MainContainer>
      <div className={`${!clickMenu ? "ovarlay" : "ovarlay open"}`} onClick={()=>setClickMenu(!clickMenu)}></div>
      <div className="recipes_wrapper">
        <FilterArea />
        <CategoryList />
      </div>
    </MainContainer>
  )
}

export default Category
