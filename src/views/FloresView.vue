<script setup>
import '@/assets/default.css'
import { ref } from 'vue';
import flores from '../flores.js';

const floresRef = ref(flores);
let displayCount = ref(12);
const increaseCount = () => displayCount.value += 12;
</script>

<template>
  <main class="animate__animated animate__fadeIn flores"></main>
  <div class="text-h1">
    <h1 class="animate__animated animate__fadeInDown">Nossas Flores e Plantas</h1>
  </div>
  <div class="before">
    <div class="container">
      <div class="item animate__animated animate__fadeInLeft" v-for="(item, index) in floresRef" :key="index">
        <template v-if="index < displayCount">
          <img :src="item.img" alt="img">
          <div class="comprar">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Fmedium%2Fpurepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532379mew9h.png&f=1&nofb=1&ipt=7f52d469106aac5a2d85adeda56bfa7695752187ea3afc85853316b724905c7f&ipo=images" alt="car">
            <a :href="item.message" target="_blank">Comprar agora!</a>
          </div>
        </template>
        <template v-else-if="index === displayCount">
          <button @click="increaseCount" class="ver-mais">Ver mais</button>
        </template>
      </div>
    </div>
  </div>
</template>
