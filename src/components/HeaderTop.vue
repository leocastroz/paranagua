<template>
  <div class="top-bar">
    <div class="logo-title">
      <img src="../assets/imgs/Tulip.svg" alt="" width="60">
      <p>Floricultura Casa Das Flores</p>
    </div>
    <div class="desc-data">
      <p>Frete grátis para regiões próximas de Curitiba</p>
      <button>Conferir agora</button>
    </div>
  </div>
</template>

<style scoped>

.logo-title, .desc-data {
  display: flex;
  align-items: center;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  background-color: #C47029;
  padding: 20px;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: #ffc296;
  align-items: center;
}

p {
  font-size: 1rem;
}

button {
  background-color: #ffc296;
  color: #C47029;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: normal;
  border: none;
  box-shadow: 0 5px 5px 0 #904f1b;
  margin: 0 20px;
  transition: ease 0.3s;
  cursor: pointer;
}
button:hover {
  background-color: #904f1b;
  color: #ffc296;
  box-shadow: 0 5px 5px 0 #c47029;
}

</style>