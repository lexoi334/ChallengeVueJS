<template>
  <div class="categories">
    <h1 class="font-bold text-4xl">Sélectionnez la catégorie de votre choix</h1>
    <div class="flex justify-center my-6 flex-wrap">
      <router-link :to="{ name: 'Categorie', params: { idCate: cate.strCategory }}" class="flex flex-col w-80 m-6" v-for="cate in categorys" :key="cate.id">
        <img class="w-80 h-48 mb-3" v-bind:src="cate.strCategoryThumb" alt="image de la catégorie">
        <h3 class="text-red-700 font-semibold">{{ cate.strCategory }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script>

const axios = require('axios')

export default {
  name: 'Categories',
  data () {
    return {
      categorys: null
    }
  },
  beforeCreate () {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => {
        this.categorys = res.data.categories
      })
  }
}
</script>

<style scoped>

</style>
