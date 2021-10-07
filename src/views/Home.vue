<template>
  <div class="home flex flex-col ">
    <div class=" w-8/12 mx-auto">
      <img class="w-44 h-44 mx-auto" src="../../public/logo.png" alt="logo du site">
      <h1 class="my-4 font-bold text-4xl">Bienvenue sur GretaEat</h1>
      <p>Retrouvez les recettes du monde entier, facilement et simplement grâce à Vue.js 3 et <a class="text-red-600" href="https://www.themealdb.com">TheMealDB</a> !</p>
      <div class="flex my-6 mx-auto w-full justify-between">
        <img src="../../public/cate.jpg" alt="image de la section catégories">
        <div class="m-auto text-left">
          <h2 class="font-bold text-2xl mb-4">Découvrez nos recettes par catégories</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <router-link class=" text-white w-auto h-16 bg-red-700 my-6 flex rounded-md" :to="{ name: 'Categories' }"><p class="m-auto">Voir les catégories</p></router-link>
        </div>
      </div>
      <div class="flex my-6 mx-auto w-full justify-between">
        <div class="m-auto text-left">
          <h2 class="font-bold text-2xl mb-4">Découvrez nos recettes par zones géographiques</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <router-link class="text-white w-auto h-16 bg-red-700 my-6 flex rounded-md" :to="{ name: 'Zones' }"><p class="m-auto">Voir les zones géographique</p></router-link>
        </div>
        <img src="../../public/zone.jpg" alt="image de la section zones géographiques">
      </div>
      <div class="flex my-6 mx-auto w-full justify-between">
        <img src="../../public/recherche.jpg" alt="image de la section recherche">
        <div class="m-auto text-left">
          <h2 class="font-bold text-2xl mb-4">Rechercher des recettes par ordre alphabétique</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <router-link class="text-white w-auto h-16 bg-red-700 my-6 flex rounded-md" :to="{ name: 'Recherche' }"><p class="m-auto">Rechercher par ordre alphabétique</p></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
