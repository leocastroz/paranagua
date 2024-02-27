<script setup lang="ts">
import { Toaster, toast } from "@steveyuowo/vue-hot-toast";
import "@steveyuowo/vue-hot-toast/vue-hot-toast.css";
</script>
<template>
  <footer>
   <div class="footer">
      <div>
        <img src="../assets/imgs/logo.png" alt="logo-site" width="100">
      </div>
      <div>
        <h2>Contato</h2>
        <p>Telefone: (41) 99658-8892</p>
        <p>Email:</p>
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
      <p>© 2024. Todos os direitos reservados à Casa Das Flores Paranagua. Desenvolvido por <a href="https://api.whatsapp.com/send?phone=+5541  99658-8892&text=Olá Kelvin! Gostaria de fazer um site com você!!." target="_blank">Kelvin Tecnologia</a>.</p>
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
  padding: 10px 50px;
  background-color: #1b1b1b;
}

.wrapper {
  background-color: #1b1b1b;
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