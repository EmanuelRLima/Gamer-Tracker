# Gamer-Tracker
Desenvolvimento utilizando Vue.js

# Passo a passo para iniciar o projeto:

1) Inicie com um npm install;
2) npm run serve;

# DIA 29/10/2023
# Explicando um pouco do que foi feito:

+ Adicionada funcionalidades ao projeto e melhorias.

# Features adicionadas
+ Botão de detalhes agora mostra informações sobre o rating dele no metracritc's e steam, unicas informações retornadas na API.

+ Dentro de detalhes o usuário pode ser direcionado ao site do metacritic.

+ Adicionado Loading para carregamento de página, em internets não muito boas o não carregamento rápido das informações podem causar problemas.

+ Soft paginação, carregamos os dados porém so exibimos de 12 em 12 ao clicar em "Carregar mais".

+ Adicionado array de erros em filtro e gets.

+ Imagens agora possuem validação.

# Melhorias 

+ Imagens dos cards com melhor qualidade, verifiquei que usando o steamAppId e o link: 'https://cdn.akamai.steamstatic.com/steam/apps/'+game.steamAppID+'/header.jpg' retornava a img certa.

+ Url de get alterada de "https://www.cheapshark.com/api/1.0/deals?pageNumber=0&pageSize=12&storeID=1&onSale=1&AAA=1" para "https://www.cheapshark.com/api/1.0/deals?pageNumber=0&storeID=1&onSale=1&AAA=1", assim conseguimos mais items para uma paginação.

# DIA 27/10/2023
# Explicando um pouco do que foi feito:

+ Em sua maior parte para poucar tempo e ajudar até mesmo em otimização e um código mais limpo foi utilizado o bootstrap.

+ Acredito que a principio o filtro de busca e ofertas é o principal a ser visto, os dois funcionam muito bem.

+ O projeto não possui redirecionamento, porém o arquivo de routes esta criado.

+ Não foi necessário utilização de VUEX ou PINIA, porém para possíveis implementações de features listadas abaixo, seria importante implementar.

# Possiveis features:

+ Botão de detalhes exibir modal com informações sobre aquele produto, tal como: Tipo de jogo, multiplataforma, cooperativo online, avaliações.

+ Botão de favoritar games, mesmo sem a inteção de comprar.

+ Filtro por avaliação do game.

+ Redirecionamento para a página do jogo ou compra pelo próprio site.

# Problema encontrados:

+ A API não possui mais jogos para implemtação do botão "Carregar mais", porém caso contrario, uma paginação poderia ser aplicada.

+ Imagens de baixa qualidade.

