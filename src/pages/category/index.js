import MainContainer from '@/components/MainContainer'
import FilterArea from '@/components/Recipes/FilterArea'
import TodayRecipeCard from '@/components/Recipes/TodayRecipeCard'
import React, { useState } from 'react'
import { env } from '../../../next.config';
import Link from 'next/link';
import { TodayRecipeSkeleton } from '@/components/Skeletons/Skeletons';
import CategoryList from '@/components/CategoryList/CategoryList';
const Category = () => {
  
  
  return (
    <MainContainer>
      <div className="recipes_wrapper">
        <FilterArea />
        <CategoryList />
      </div>
    </MainContainer>
  )
}

export default Category
