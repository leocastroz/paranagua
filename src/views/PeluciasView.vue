<script setup>
import '@/assets/default.css'
import { ref } from 'vue';
// import pelucias from '../pelucias.js';

const pelucias = [
  // data.js
  {
    "img": './src/assets/imgs/produts/14.jpg',
    "title": "Produto 1",
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  // {
  //   "img": './src/assets/imgs/produts/20.jpg',
  //   "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  // },
  {
    "img": './src/assets/imgs/produts/27.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },{
    "img": './src/assets/imgs/produts/29.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },{
    "img": './src/assets/imgs/produts/32.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },{
    "img": './src/assets/imgs/produts/35.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/36.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/37.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/39.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/41.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/42.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/43.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/44.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/46.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/47.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/48.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/50.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/53.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/55.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/56.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/57.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/59.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/61.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/65.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/66.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/68.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/69.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/70.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/71.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/72.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/73.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/76.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/77.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/78.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
  {
    "img": './src/assets/imgs/produts/79.jpg',
    "message": 'https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item.'
  },
];

const peluciasRef = ref(pelucias);
let displayCount = ref(12);
const increaseCount = () => displayCount.value += 12;
</script>

<template>
  <main class="animate__animated animate__fadeIn"></main>
  <div class="text-h1">
    <h1 class="animate__animated animate__fadeInDown">Nossas pelucias e cestas</h1>
  </div>
  <div class="before">
    <div class="container">
      <div class="item animate__animated animate__fadeInLeft" v-for="(item, index) in peluciasRef" :key="index">
        <template v-if="index < displayCount">
          <img :src="item.img" alt="img">
          <div class="comprar">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Fmedium%2Fpurepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532379mew9h.png&f=1&nofb=1&ipt=7f52d469106aac5a2d85adeda56bfa7695752187ea3afc85853316b724905c7f&ipo=images" alt="car">
            <a :href="item.message" target="_blank">Comprar agora!</a>
          </div>
        </template>
        <template v-else-if="index === displayCount">
          <div class="loading">
            <!-- <button @click="increaseCount">Ver mais</button> -->
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
