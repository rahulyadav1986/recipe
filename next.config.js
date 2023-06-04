/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains: ['apipics.s3.amazonaws.com']
  },
  env:{
    apiKey: ['adc35a744cmsh8a8f27ac712046cp1713c8jsnb302cab1256c'], 


    hostUrlOfBirthdayCake: 'the-birthday-cake-db.p.rapidapi.com',
    apiUrlOfBirthdayCake: 'https://the-birthday-cake-db.p.rapidapi.com/',
    
    hostUrlOfChiness: 'chinese-food-db.p.rapidapi.com',
    apiUrlOfChiness: 'https://chinese-food-db.p.rapidapi.com/',

    
    hostUrlOfCocktail: 'the-cocktail-db3.p.rapidapi.com',
    apiUrlOfCocktail: 'https://the-cocktail-db3.p.rapidapi.com/',

    
    hostUrlOfMexican: 'the-mexican-food-db.p.rapidapi.com',
    apiUrlOfMexican: 'https://the-mexican-food-db.p.rapidapi.com/',

   
    hostUrlOfVegan: 'the-vegan-recipes-db.p.rapidapi.com',
    apiUrlOfVegan: 'https://the-vegan-recipes-db.p.rapidapi.com/',


    image_base_url: 'https://image.tmdb.org/t/p'
  }
  
}

module.exports = nextConfig






