<script setup>
import { ref } from 'vue';
import items from '../data.js';

const itemsRef = ref(items);
let displayCount = ref(12);
const increaseCount = () => displayCount.value += 12;
</script>

<template>
  <main class="animate__animated animate__fadeIn"></main>
  <div class="text-h1">
    <h1 class="animate__animated animate__fadeInDown">Conheça Nossos Produtos</h1>
  </div>
  <div class="before">
    <div class="container">
      <div class="item animate__animated animate__fadeInLeft" v-for="(item, index) in itemsRef" :key="index">
        <template v-if="index < displayCount">
          <img :src="item.img" alt="img">
          <div class="comprar">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Fmedium%2Fpurepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532379mew9h.png&f=1&nofb=1&ipt=7f52d469106aac5a2d85adeda56bfa7695752187ea3afc85853316b724905c7f&ipo=images" alt="car">
            <a :href="item.message" target="_blank">Comprar agora!</a>
          </div>
        </template>
        <template v-else-if="index === displayCount">
          <button @click="increaseCount">Ver mais</button>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>

main {
 background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.wallhere.com%2Fphoto%2Ftulips-flowers-flowering-light-1023276.jpg&f=1&nofb=1&ipt=56dbd2deb8472af719c2210f6804ab10dc54d866d116cec7dab5a7196a8f4c48&ipo=images');
 background-size: cover;
 background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-color: rgb(197, 197, 197);
  height: 350px;
}

.text-h1 {
  text-align: center;
  max-width: 400px;
  margin: 30px auto 0 auto;
}

h1 {
  text-transform: uppercase;
  background: -webkit-linear-gradient(#5c5c5c,#2eaa42);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 50px;
}

.before {
  max-width: 1300px;
  margin: 0 auto;
}

.item {
    width: calc(33.33% - 20px);
    margin: 20px;
    color: #13501d;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    width: 250px;
    border-radius: 8px 8px 0 0;
}

.item img {
  width: 250px;
  height: 250px;
  border-radius: 8px 8px 0 0;
  box-shadow: 2px 45px 20px 2px #b1b1b1;
}

.item .comprar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7eff94;
  background-image: linear-gradient(180deg, #7eff94 0%, #2eaa42 100%);
  border-radius: 3px;
  font-weight: bold;
  transition: ease 0.3s;
}

.item .comprar a {
  padding: 8px;
  margin: 0 1px;
  font-size: 13px;
  color: #13501d;
  text-decoration: none;
}

.item .comprar img {
  width: 20px;
  height: 20px;
  box-shadow: none;
}

.item a {
  text-decoration: none;
  background-color: #7eff94;
  background-image: linear-gradient(180deg, #7eff94 0%, #2eaa42 100%);
  border-radius: 3px;
  padding: 8px;
  font-size: 13px;
  color: #13501d;
  font-weight: bold;
  transition: ease 0.3s;
}

@media (max-width: 900px) {
    .item {
        width: calc(50% - 20px);
    }
}

@media (max-width: 600px) {
    .item {
        width: calc(100% - 20px);
    }
}

</style>
