<script setup>
import { ChatBubbleLeftRightIcon } from '../icons.js'
</script>

<template>
  <div class="top-bar">
    <div class="logo-title animate__animated animate__fadeIn">
      <img src="../assets/imgs/logo.png" alt="" width="60">
      <p>Floricultura Casa Das Flores</p>
    </div>
    <a href="https://api.whatsapp.com/send?phone=+5541984559417&text=Olá Casa das Flores Paranagua! Gostaria de comprar este item." target="_blank" class="gratis">
      <ChatBubbleLeftRightIcon style="width: 14px;margin-right: 5px;" />
      <p>Fale conosco</p>
    </a>
  </div>
</template>

<style scoped>
.gratis {
  background-image: linear-gradient(180deg, #282828 0%, #676767 100%);
  color: #fff;
  box-shadow: 0 5px 5px 0 #23622d97;
  display: flex;
  align-items: center;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
}

.gratis:hover {
  background-image: linear-gradient(180deg, #ffffff 0%, #bababa 100%);
  color: #282828;
  background-color: #fff;
}

.logo-title,
.desc-data {
  display: flex;
  align-items: center;
}

.logo-title img {
  margin-right: 10px;
  padding: 5px;
  border-radius: 100%;
  background-color: #282828;
}

.logo-title p {
  font-size: 0.9rem;
  font-weight: 700;
  color: #13501d;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  background-color: #7eff94;
  background-image: linear-gradient(180deg, #7eff94 0%, #2eaa42 100%);
  padding: 20px;
  text-align: center;
  color: #13501d;
  align-items: center;
}

p {
  font-size: 0.9rem;
}

button {
  background-color: #478a52;
  color: #eefff1;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: normal;
  border: none;
  box-shadow: 0 5px 5px 0 #23622d;
  margin: 0 20px;
  transition: ease 0.3s;
  cursor: pointer;
}

button:hover {
  background-color: #eefff1;
  color: #000;
  box-shadow: 0 5px 5px 0 #23622d;
}

/* @media (max-width: 900px) {
  .desc-data {
    display: none;
    background: yellow;
  }
} */

@media (max-width: 500px) {
  .logo-title img {
    display: none;
  }

  .logo-title p {
    font-size: 0.8rem;
    text-align: left;
    width: 130px;
  }
}

/* @media (min-width: 900px) {
  .gratis {
    display: none;
    font-size: 0.8rem;
  }
} */
</style>