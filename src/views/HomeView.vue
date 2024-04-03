<script setup>
import { ShoppingBagIcon } from '../icons.js'
import '@/assets/default.css'
import { ref } from 'vue';
import items from '../data.js';

const itemsRef = ref(items);
let displayCount = ref(12);
const increaseCount = () => displayCount.value += 12;
</script>

<template>
  <main class="animate__animated animate__fadeIn home"></main>
  <div class="text-h1">
    <h1 class="animate__animated animate__fadeInDown">Conheça Nossos Produtos</h1>
  </div>
  <div class="before">
    <div class="container">
      <div class="item animate__animated animate__fadeInLeft" v-for="(item, index) in itemsRef" :key="index">
        <template v-if="index < displayCount">
          <img :src="item.img" alt="img">
          <a :href="item.message" target="_blank" class="comprar">
            <ShoppingBagIcon style="width: 20px;" />
            <!-- <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Fmedium%2Fpurepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532379mew9h.png&f=1&nofb=1&ipt=7f52d469106aac5a2d85adeda56bfa7695752187ea3afc85853316b724905c7f&ipo=images"
              alt="car"> -->
            <!-- <a :href="item.message" target="_blank">Comprar agora!</a> -->
            <p>Comprar agora!</p>
          </a>
        </template>
        <template v-else-if="index === displayCount">
          <button @click="increaseCount" class="ver-mais">Ver mais</button>
        </template>
      </div>
    </div>
  </div>
</template>


<style>
.ver-mais {
  padding: 10px 10px;
  background-color: #7eff94;
  background-image: linear-gradient(180deg, #7eff94 0%, #2eaa42 100%);
  color: rgb(53 53 53);
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}
</style>