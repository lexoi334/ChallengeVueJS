<template>
  <div class="flex flex-col" v-if="recipe != null">
    <div class="w-3/5 mx-auto">
      <div class="flex flex-col xl:flex-row">
        <img v-bind:src="recipe.strMealThumb" alt="Image du plat">
        <div class="text-left my-auto mx-8">
          <h1 class="font-bold text-3xl mb-4">Recette : {{ recipe.strMeal }}</h1>
          <!-- Utilisation du router-link pour lier les catégorie et les zones à leur pages respectives -->
          <h3 class="font-bold text-xl mb-4">Catégorie : <router-link class="text-red-700" :to="{ name: 'Categorie', params: { idCate: recipe.strCategory }}">{{ recipe.strCategory }}</router-link></h3>
          <h3 class="font-bold text-xl mb-4">Zone géographique <router-link class="text-red-700" :to="{ name: 'Zone', params: { idZone: recipe.strArea }}">{{ recipe.strArea }}</router-link></h3>
          <h2 class="font-bold text-2xl mb-4">Ingrédients :</h2>
          <ul>
            <!-- Boucle for pour display chaque ingrédient & mesure du tableau 'Ingredients' selon leur n° d'index -->
            <li v-for="(ingre, index) in ingredients" :key="index"> <span class="font-bold">{{ ingre.ing }}</span> : {{ingre.q}} </li>
          </ul>
        </div>
      </div>
      <div class="my-12">
        <h2 class="font-bold text-left text-2xl mb-4">Instructions :</h2>
        <p class="text-left">{{recipe.strInstructions}}</p>
      </div>
      <div class="my-12">
        <!-- Ajout d'une recherche par ingrédients de la recette en question -->
        <h2 class="font-bold text-2xl mb-4">Voir d'autres recettes avec les Ingrédients :</h2>
        <div class="flex justify-center w-full my-6 mx-auto flex-wrap">
          <router-link v-for="(ingreLink, index) in ingredients" :key="index" class="w-auto h-16 bg-red-700 m-3 flex rounded-md" :to="{ name: 'Ingredient', params: { idIngredient: ingreLink.ing }}">
            <p class="font-semibold text-white my-auto mx-5">{{ingreLink.ing}}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const axios = require('axios')

export default {
  name: 'Recette',
  props: {
    idRecette: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      recipe: null,
      ingredients: []
    }
  },
  mounted () {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.idRecette}`)
      .then(res => {
        this.recipe = res.data.meals[0]
        this.setIngredients()
        console.log(this.ingredients)
      })
  },
  methods: {
    // fonction pour récupérer les ingrédients et les mesures afin de les mettre sous un même format dans un tableau pour pouvoir faire une boucle ingrédiant -> mesure
    setIngredients () {
      for (let i = 1; i <= 20; i++) {
        if (this.recipe[`strIngredient${i}`]) {
          const slug = this.recipe[`strIngredient${i}`].replaceAll(' ', '_').toLowerCase()
          this.ingredients.push({ ing: `${this.recipe[`strIngredient${i}`]}`, q: `${this.recipe[`strMeasure${i}`]}`, slug: slug })
        } else break
      }
    }
  }
}
</script>

<style scoped>

img {
  width: 600px;
  height: 600px;
}

</style>
