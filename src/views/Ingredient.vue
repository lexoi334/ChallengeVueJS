<template>
  <div>
    <h2 class="font-bold text-2xl mb-4">Découvrez tous nos plats incluant l'ingrédient</h2>
    <h1 class="font-bold text-4xl mt-4">{{ idIngredient }}</h1>
    <div class="flex justify-center my-6 flex-wrap">
      <router-link :to="{ name: 'Recette', params: { idRecette: plate.idMeal }}" class="flex flex-col w-48 m-6" v-for="plate in ingre" :key="plate.idMeal">
        <img class="w-48 h-48 mb-3" v-bind:src="plate.strMealThumb" alt="image du plat">
        <h3 class="text-red-700 font-semibold">{{ plate.strMeal }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script>

const axios = require('axios')

export default {
  name: 'Ingredient',
  props: {
    idIngredient: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      ingre: null
    }
  },
  beforeMount () {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${this.idIngredient}`)
      .then(res => {
        console.log(res.data.meals)
        this.ingre = res.data.meals
      })
  }
}
</script>
