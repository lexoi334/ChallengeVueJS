<template>
  <div class="zones flex flex-col">
    <h1 class="font-bold text-4xl">Sélectionnez la zone géographique de votre choix</h1>
    <div class="flex justify-center w-3/5 my-6 mx-auto flex-wrap">
      <router-link :to="{ name: 'Zone', params: { idZone: zone.strArea }}" class="w-auto h-16 bg-red-700 m-3 flex rounded-md" v-for="zone in zones" :key="zone.strArea">
        <p class="font-semibold text-white my-auto mx-5">{{ zone.strArea }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>

const axios = require('axios')

export default {
  name: 'Zones',
  data () {
    return {
      zones: null
    }
  },
  beforeCreate () {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then(res => {
        this.zones = res.data.meals
      })
  }
}
</script>
