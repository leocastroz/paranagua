<script setup lang="ts">
import { Toaster, toast } from "@steveyuowo/vue-hot-toast";
import "@steveyuowo/vue-hot-toast/vue-hot-toast.css";

import { ref, onMounted } from 'vue';

const status = ref('');

onMounted(checkStatus);
setInterval(checkStatus, 60000); // Check status every minute

function checkStatus() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  // Convert to 24 hour format
  const time = hours * 100 + minutes;
  // Check if current time is between 8:00 AM (0800) and 6:10 PM (1810)
  if (time >= 800 && time <= 1810) {
    status.value = '🟢 aberto';
  } else {
    status.value = '🔴 fechado';
  }
}
</script>
<template>
  <footer>
    <div class="footer">
      <div>
        <img src="../assets/imgs/logo.png" alt="logo-site" width="100">
        <p>00.080.916-0001/07</p>
        <p>⚲ Paranaguá - Paraná, Brasil</p>
        <p>{{ status }}</p>
      </div>
      <div>
        <h2>Contato</h2>
        <p>WhasApp: (41) 93422-7934</p>
        <p>WhasApp: (41) 98455-9417</p>
        <a href="https://www.instagram.com/casadasfloresparanagua/" target="_blank">instagram</a>
      </div>
    </div>
    <!-- <button
    @click="
      toast.success('Execution Success!');
    "
  >
    Success
  </button>
  <button
    @click="
      toast.loading('Loading...');
    "
  >
    Loading
  </button>
  <button
    @click="
      toast.error('Execution Error!');
    "
  >
    Error
  </button> -->
    <Toaster />
    <div class="wrapper">
      <p>© 2024. Todos os direitos reservados à Casa Das Flores Paranagua. Desenvolvido por <a
          href="https://api.whatsapp.com/send?phone=+5541  99658-8892&text=Olá Kelvin! Gostaria de fazer um site com você!!."
          target="_blank">Kelvin Tecnologia</a>.
      </p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  color: aliceblue;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 50px;
  background-image: url('../assets/imgs/background.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.footer p {
  font-size: 12px;
  padding: 4px 0;
  color: #cacaca;
}

.footer a {
  background-color: deeppink;
  font-size: 12px;
  padding: 4px;
  border-radius: 2px;
  text-decoration: none;
  color: #ffffff;
}

.wrapper {
  background-color: #121212;
  font-size: 12px;
  padding: 5px;
  text-align: center;
}

.wrapper p a {
  padding: 2px;
  color: #7eff94;
  text-decoration: underline;
}
</style>