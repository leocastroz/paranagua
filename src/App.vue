<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import SideFooter from './components/SideFooter.vue'
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
        <RouterLink to="/pelucias">Pelúcias</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
  <SideFooter />
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
  color: #13501d;
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
