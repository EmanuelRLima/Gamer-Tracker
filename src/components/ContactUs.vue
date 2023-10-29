<template>
    <div class="text-center text-white container">
        <div class="row d-flex justify-content-around centered">
            <div>
                <h2>Entre em Contato Conosco</h2>   
            </div>

            <div>
                <a href="https://www.instagram.com/ecommerce_br/" target="_blank">
                    <img class="mr-3" src="https://i0.wp.com/bodybeyondlimits.com.au/wp-content/uploads/2022/07/instagram-circle-icon-png-4.png?ssl=1" style="width: 100px;">
                </a>
                <a href="https://www.youtube.com/ecommercebrasil" target="_blank">
                    <img class="mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/YouTube_social_red_circle_%282017%29.svg/2048px-YouTube_social_red_circle_%282017%29.svg.png" style="width: 100px;">
                </a>
                <a href="https://twitter.com/eCommerce_Br" target="_blank">
                    <img class="mr-3" src="https://seeklogo.com/images/T/twitter-icon-circle-black-logo-35827D553B-seeklogo.com.png" style="width: 100px;">
                </a>
                <a href="https://www.linkedin.com/company/e-commerce-brasil/" target="_blank">
                    <img class="mr-3" src="https://freelogopng.com/images/all_img/1656996409linkedin-symbol.png" style="width: 100px;">
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
    </div>
  </template>
  
  <style>
  .centered {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70vh;
    }
  </style>