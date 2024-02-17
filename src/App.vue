<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld />
      <nav class="animate__animated animate__fadeIn">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/decoracoes">Decorações</RouterLink>
        <RouterLink to="/flores">Flores</RouterLink>
        <RouterLink to="/sementes">Sementes</RouterLink>
        <RouterLink to="/vasos">Vasos</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
nav {
  padding: 8px 0;
  text-align: center;
  background-color: #affdbc;
}

nav a {
  text-decoration: none;
  margin: 15px;
  color: #835530;
  font-size: 13px;
  text-transform: uppercase;
  transition: ease-out 0.3s;
}

nav a:hover {
  color: #464646;
  border-radius: 5px;
  padding: 3px 8px;
  background-color: #f0ffece0;
}

nav a.router-link-exact-active {
  border-radius: 5px;
  padding: 3px 8px;
  color: #ebffe7;
  background-color: #2eaa42;
}

</style>
