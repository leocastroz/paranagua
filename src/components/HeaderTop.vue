<template>
  <div class="top-bar">
    <div class="logo-title animate__animated animate__fadeIn">
      <img src="../assets/imgs/logo.png" alt="" width="60">
      <p>Floricultura Casa Das Flores</p>
    </div>
    <div class="desc-data animate__animated animate__fadeIn">
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

</style>