<template>
    <div class="container text-white" style="height: 60vh;">
      <h2 class="text-center text-white  mt-5">Trabalhe conosco!</h2>
      
      <div>
        <p>
            Aqui em nossa empresa incentivamos ao máximo nossos colaboradores, sempre com nossos informativos e ações de saúde, educação e paz no trabalho, acreditamos
            que uma boa mente é o mais importante, para isso temos benefícios para ajudar você nessa caminhada que está para vim, veja abaixo alguns detalhes e vagas
            abertas no momento.
        </p>
      </div>
  
      <div class="row d-flex justify-content-around mt-5">
        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <h3>Mimos</h3>
            <ul>
                <li>Vale Refeição/Alimentação.</li>
                <li>Política de trabalho remoto.</li>
                <li>Plano de saúde: Porto Seguro.</li>
                <li>Ajuda de custo, com intuito de estimular o desenvolvimento profissional.</li>
                <li>Auxílio Home Office.</li>
            </ul>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <h3>Vagas que te aguardam</h3>
            <ul>
                <li>Design de interiores</li>
                <li>Planejamento de eventos</li>
                <li>Data science</li>
                <li>Dev Front-end</li>
            </ul>
            </div>
    </div>

    <div class="text-center  mt-5">
        <p>
            Para se candidatar a uma de nossas vagas, basta ir até nosso linkedin e se inscrever!
        </p> 
        <a href="https://www.linkedin.com/company/e-commerce-brasil/" target="_blank">
            <img class="mr-3" src="https://freelogopng.com/images/all_img/1656996409linkedin-symbol.png" style="width: 70px;">
        </a>
    </div>
</div>
    <div class="d-flex justify-content-center back-button mt-5 mb-5">
      <router-link :to="{ name: 'HomePage' }" class="btn-back">
        <button type="button" class="btn text-white"
                style="width: 380px;height: 50px; background: #0B1641;border-radius: 8px;">Voltar
            </button>
        </router-link>
    </div>
  </template>
  
  <style scoped>
  
  </style>