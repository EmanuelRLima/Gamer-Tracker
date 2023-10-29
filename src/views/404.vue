<template>
    <div class="text-center text-white mt-5 mb-5">
    <h1>Erro 404 - Página não encontrada</h1>
    <p>Desculpe, a página que você está procurando não existe.</p>
    <img src="../assets/img/404.jpeg" alt="Game Over" style="width: 300px;" />
  </div>
  <div class="d-flex justify-content-center back-button mt-5 mb-5">
    <router-link :to="{ name: 'HomePage' }" class="btn-back">
        <button type="button" class="btn text-white"
            style="width: 380px;height: 50px; background: #0B1641;border-radius: 8px;">Paginal inicial
        </button>
    </router-link>
</div>
</template>
  
<script>
</script>
  
<style>
</style>