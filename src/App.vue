<template>
  <div id="nav">
    <router-link class="inline" to="/"><img class="inline" id="home" src="../public/home(1).png" alt="home"></router-link> |
  <router-link :to="{ name: 'All' }">A-Z</router-link> |
    <router-link :to="{ name: 'Categories' }">Catégories</router-link> |
    <router-link :to="{ name: 'Zones' }">Zones géographiques</router-link> |
    <router-link :to="{ name: 'Recherche' }">Rechercher</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #e40b28;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #680a0a;
}

#home {
  filter: invert(12%) sepia(99%) saturate(4433%) hue-rotate(345deg) brightness(96%) contrast(101%);
}

</style>
