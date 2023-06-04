import MainContainer from '@/components/MainContainer'
import FilterArea from '@/components/Recipes/FilterArea'
import TodayRecipeCard from '@/components/Recipes/TodayRecipeCard'
import React, { useState } from 'react'
import { env } from 'next.config';
import Link from 'next/link';
import { TodayRecipeSkeleton } from '@/components/Skeletons/Skeletons';
import ReiepeHero from '@/components/Recipes/Details/ReiepeHero';
import RecipeBody from '@/components/Recipes/Details/RecipeBody';
import styles from "../../../components/Recipes/recipe.module.scss"
import Image from 'next/image';
const BirthdayRecipeDetails = ({TopRecipeDetails}) => {
  return (
    <MainContainer>
      <div className="recipe_details_wrapper">
          <div className={styles.reciepeHero}>
              <Image src={TopRecipeDetails.image} fill={true} alt={TopRecipeDetails.title} />
              <Link href="/category/birthday-cake" className="back"></Link>
          </div>
          <RecipeBody TopRecipeDetails={TopRecipeDetails} />
      </div>
    </MainContainer>
  )
}

export default BirthdayRecipeDetails



export async function getServerSideProps(context){
  
  const {params} = context;
  const responsTopRecipe = await fetch(`${env.apiUrlOfBirthdayCake}${params.birthdayId}`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': env.apiKey,
      'X-RapidAPI-Host': env.hostUrlOfBirthdayCake
    }
  });
  const responsTopRecipeData = await responsTopRecipe.json();
  console.log(context)
  return{
    props:{
      TopRecipeDetails: responsTopRecipeData,
    }
  }
}








