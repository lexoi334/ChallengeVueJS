<template>
  <div class="recherche flex flex-col">
    <div class="w-3/5 mx-auto">
      <h1 class="font-bold text-4xl my-6 ">Recherchez un plat</h1>
      <div>
        <img class="inline mr-4" src="../../public/search.png" alt="icone loupe">
        <input v-model="theName">
        <button class="w-auto h-10 bg-red-700 m-2 px-3 rounded-md text-white" @click="startSearch">Rechercher</button>
        <button class="w-auto h-10 bg-red-700 m-2 px-3 rounded-md text-white" @click="isLucky">J'ai de la chance</button>
      </div>
      <router-link :to="{ name: 'Recette', params: { idRecette: plate.idMeal }}" class="h-40 w-8/12 mx-auto my-6 flex border-black border-2 font-semibold" v-for="plate in search" :key="plate.idMeal">
        <img class="w-40" v-bind:src="plate.strMealThumb" alt="image du plat">
        <div class="my-auto mx-4 text-left">
          <h4 class="mb-2">{{ plate.strMeal }}</h4>
          <p>Catégorie : <router-link class="text-red-700" :to="{ name: 'Categorie', params: { idCate: plate.strCategory }}">{{ plate.strCategory }}</router-link><br>Zone géo : <router-link class="text-red-700" :to="{ name: 'Zone', params: { idZone: plate.strArea }}">{{ plate.strArea }}</router-link></p>
        </div>
      </router-link>
      <router-link  v-for="lucky in luck" :key="lucky.idMeal" :to="{ name: 'Recette', params: { idRecette: lucky.idMeal }}" class="h-40 w-8/12 mx-auto my-6 flex border-black border-2 font-semibold">
        <img class="w-40" v-bind:src="lucky.strMealThumb" alt="image du plat">
        <div class="my-auto mx-4 text-left">
          <h4 class="mb-2">{{ lucky.strMeal }}</h4>
          <p>Catégorie : <router-link class="text-red-700" :to="{ name: 'Categorie', params: { idCate: lucky.strCategory }}">{{ lucky.strCategory }}</router-link><br>Zone géo : <router-link class="text-red-700" :to="{ name: 'Zone', params: { idZone: lucky.strArea }}">{{ lucky.strArea }}</router-link></p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

const axios = require('axios')

export default {
  name: 'Recherche',
  data () {
    return {
      theName: null,
      luck: null,
      search: null
    }
  },
  methods: {
    startSearch () {
      this.$store.state.searchName = this.theName
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.$store.state.searchName}`)
        .then(res => {
          console.log(this.search)
          this.search = res.data.meals
        })
    },
    isLucky () {
      axios
        .get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => {
          console.log(this.luck)
          this.luck = res.data.meals
        })
    }
  }
}
</script>

<style scoped>

input {
  margin-bottom: 5px;
  border-bottom: 1px solid black;
  width: 200px;
}

</style>
