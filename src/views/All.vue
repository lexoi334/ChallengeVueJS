<template>
  <div class="all flex flex-col">
    <h1 class="font-bold text-4xl">Recherche par ordre alphabétique</h1>
    <ul class="text-xl flex justify-around w-3/5 my-4 mx-auto text-red-500 font-semibold">
      <router-link to="/all/a">A</router-link>/
      <router-link to="/all/b">B</router-link>/
      <router-link to="/all/c">C</router-link>/
      <router-link to="/all/d">D</router-link>/
      <router-link to="/all/e">E</router-link>/
      <router-link to="/all/f">F</router-link>/
      <router-link to="/all/g">G</router-link>/
      <router-link to="/all/h">H</router-link>/
      <router-link to="/all/i">I</router-link>/
      <router-link to="/all/j">J</router-link>/
      <router-link to="/all/k">K</router-link>/
      <router-link to="/all/l">L</router-link>/
      <router-link to="/all/m">M</router-link>/
      <router-link to="/all/n">N</router-link>/
      <router-link to="/all/o">O</router-link>/
      <router-link to="/all/p">P</router-link>/
      <router-link to="/all/q">Q</router-link>/
      <router-link to="/all/r">R</router-link>/
      <router-link to="/all/s">S</router-link>/
      <router-link to="/all/t">T</router-link>/
      <router-link to="/all/u">U</router-link>/
      <router-link to="/all/v">V</router-link>/
      <router-link to="/all/w">W</router-link>/
      <router-link to="/all/x">X</router-link>/
      <router-link to="/all/y">Y</router-link>/
      <router-link to="/all/z">Z</router-link>
    </ul>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
export default {
  name: 'All',
  components: {

  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
