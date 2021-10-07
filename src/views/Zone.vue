<template>
  <div>
    <h2 class="font-bold text-2xl mb-4">Découvrez tous nos plats de la zone</h2>
    <h1 class="font-bold text-4xl mt-4">{{ idZone }}</h1>
    <div class="flex justify-center my-6 flex-wrap">
      <router-link :to="{ name: 'Recette', params: { idRecette: plate.idMeal }}" class="flex flex-col w-48 m-6" v-for="plate in zone" :key="plate.idMeal">
        <img class="w-48 h-48 mb-3" v-bind:src="plate.strMealThumb" alt="image du plat">
        <h3 class="text-red-700 font-semibold">{{ plate.strMeal }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script>

const axios = require('axios')

export default {
  name: 'Zone',
  props: {
    idZone: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      zone: null
    }
  },
  beforeMount () {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.idZone}`)
      .then(res => {
        this.zone = res.data.meals
      })
  }
}
</script>
