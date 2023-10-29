<template>
    <div class="d-flex justify-content-center loading-spinner" style="height:70vh;">
      <div class="spinner"></div>
      <p>Aguarde...</p>
      <!-- Possivel implemento de erros, podendo usar o VUEX, PINIA, EVENTBUSS(EMITTER) OU PROPS -->
    </div>
  </template>
  
  <script>
  </script>
  
  <style scoped>
  .loading-spinner {
    text-align: center;
    padding: 20px;
  }
  
  .spinner {
    border: 6px solid #f3f3f3;
    border-top: 6px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  p {
    font-size: 18px;
    margin-top: 10px;
  }
  </style>