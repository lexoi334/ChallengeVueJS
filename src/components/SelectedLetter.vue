<template>
  <div class="selectedLetter">
    <h2>Recettes commençant par la lettre {{ id }}</h2>
    <div class="flex justify-center my-6 flex-wrap">
      <router-link :to="{ name: 'Recette', params: { idRecette: object.idMeal }}" class="flex flex-col w-44 m-6" v-for="object in food" :key="object.idMeal">
        <img class="w-44 h-44 mb-3" v-bind:src="object.strMealThumb" alt="image du plat">
        <h3 class="text-red-700 font-semibold">{{ object.strMeal }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script>

const axios = require('axios')

export default {
  name: 'SelectedLetter',
  props: ['id'],
  data () {
    return {
      food: null
    }
  },
  beforeCreate () {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${this.$route.params.id}`)
      .then(res => {
        this.food = res.data.meals
      })
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
