<template>
    <Detail ref="Detail" />
    <div v-if="loading">
    <Loading />
    </div>
    <div v-else class="container">
        <div class="d-flex justify-content-between">
            <div class="mt-3 mb-4">
                <h4 style="color: #FFF; font-family: Roboto;">Ofertas</h4>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"
                            style="background-color: #0B1641;border: 0px;border-radius: 8px 0px 0px 8px;">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path
                                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208z"
                                    fill="#FFFFFF" />
                            </svg>
                        </span>
                    </div>
                    <input type="title" v-model="searchText" placeholder="Pesquisar" class="search-input Filter_search" />
                </div>
            </div>
            <div class="Filter_percet">
                <span class="mr-2 text-white" for="sortOrder" style="font-family: Roboto; font-size: 20px;">Ordenar
                    por:</span>
                <select class="text-center" id="sortOrder" v-model="selectedSortOption"
                    style="border-radius: 8px; background: #0B1641; border: rgb(11, 22, 65); height: 50px; color: #fff;">
                    <option value="">% de desconto</option>
                    <option value="desc">Maior Desconto</option>
                    <option value="asc">Menor Desconto</option>
                    <option value="title">Título</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6 col-12" v-for="game in filteredAndSortedGames.slice(0, itemsToShow)" :key="game.id">
                <div class="card mb-3"
                    style="border-radius: 8px;background: #0B1641;box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);">
                    <img
                        :src="game.card_url"
                        class="card-img-top"
                        alt="Card Image"
                    />
                    <div class="card-body">
                        <div>
                            <span class="card-title text-white" style="font-size: 20px; font-family: roboto;">{{ game.title
                            }}</span>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="mt-1">
                                <button type="button" class="btn"
                                    style="color: #fff ;background: #C70160;" @click="Detail_open(game)">DETALHES</button>
                            </div>

                            <div class="d-flex">
                                <div class="d-flex mr-1" style=" flex-direction: column; align-items: center;">
                                    <span style="text-decoration: line-through;">$ {{ game.normalPrice }}</span>
                                    <span class="text-white"><b>$ {{ game.salePrice }}</b></span>
                                </div>

                                <div class="d-flex justify-content-center text-white mt-1"
                                    style="width: 84px;height: 39px;border-radius: 8px;background: #16857B; font-size: 20px; align-items: center;">
                                    <b>-{{ calculateDiscountPercentage(game) }}%</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center mt-5 mb-5">
            <button type="button" class="btn text-white"
                style="width: 380px;height: 50px; background: #0B1641;border-radius: 8px;" @click="More_games">Carregar mais</button>
        </div>
    </div>
</template>
  
<script>
import Detail from "./Modals/Details_Modal.vue";
import Loading from "./Modals/Loading.vue"
import NoImg from '../assets/img/sem-imagem.jpg'
import { AxiosAPI } from "@/axios"
export default {
    components:{
        Detail,
        Loading
    },
    data() {
        return {
            loading: true,
            items: [],
            searchText: "",
            selectedSortOption: '',
            itemsToShow: 12, 
            itemsToLoad: 12,
            erro:{
                error_api: '',
                error_axios: '',
                error_filter: '',
            }
        };
    },
    computed: {
        filteredAndSortedGames() {
            const search = this.searchText.toLowerCase();
            let game_result = [...this.items];

            if (search) {
                game_result = game_result.filter((item) => item.title.toLowerCase().includes(search));
            }

            if (this.selectedSortOption === 'desc') {
                game_result.sort((a, b) => {
                    const discountA = (parseFloat(a.normalPrice) - parseFloat(a.salePrice)) / parseFloat(a.normalPrice);
                    const discountB = (parseFloat(b.normalPrice) - parseFloat(b.salePrice)) / parseFloat(b.normalPrice);
                    return discountB - discountA;
                });
            } else if (this.selectedSortOption === 'asc') {
                game_result.sort((a, b) => {
                    const discountA = (parseFloat(a.normalPrice) - parseFloat(a.salePrice)) / parseFloat(a.normalPrice);
                    const discountB = (parseFloat(b.normalPrice) - parseFloat(b.salePrice)) / parseFloat(b.normalPrice);
                    return discountA - discountB;
                });
            } else if (this.selectedSortOption === 'title') {
                game_result.sort((a, b) => {
                    return a.title.localeCompare(b.title);
                });
            }

            return game_result;
        },
    },
    mounted() {
        this.Games();
    },
    methods: {
        async Games() {
           await AxiosAPI.get("/1.0/deals?pageNumber=0&storeID=1&onSale=1&AAA=1")
            .then((resp) => {
                if (resp && resp.data) {
                    this.items = resp.data;
                    this.ImgLoad()
                }else {
                    this.erro.error_api = "Erro na resposta da API"
                    }
                })
                .catch((error) => {
                    this.erro.error_axios = "Erro na solicitação Axios:"+ error
                });
        },

       async ImgLoad(){
            let itemsWithCardURL = []
            for (const item of this.items) {
            const url = `https://cdn.akamai.steamstatic.com/steam/apps/${item.steamAppID}/header.jpg`;
            const wrong_card = { card_img: NoImg };
                 try {
                    const response = await this.imageExists(url);
                        if (response.status === 200) {
                            item.card_url = url;
                        } else {
                            item.card_url = wrong_card.card_img;
                        }
                        } catch (error) {
                            item.card_url = wrong_card.card_img;
                        }

                        itemsWithCardURL.push(item);
                    }
                    this.loading = false
        },

        imageExists(url) {
            const value = AxiosAPI.get(url)                
            return value
        },

        calculateDiscountPercentage(game) {
            if (game && game.normalPrice && game.salePrice) {
                const normalPrice = parseFloat(game.normalPrice);
                const salePrice = parseFloat(game.salePrice);
                const discount = (normalPrice - salePrice) / normalPrice * 100;
            return discount.toFixed(0);
            } else {
                this.erro.error_filter = "Dados inválidos"
            }
        },

        Detail_open(event){
            this.$refs.Detail.openModal(event);
        },

        More_games(){
            this.itemsToShow += this.itemsToLoad;
        }

    }
}


</script>
  
<style scoped>
.Filter_search{
    border-radius: 0px 8px 8px 0px; 
    background: #0B1641;
    border: rgb(11, 22, 65); 
    width: 230px; 
    height: 50px; 
    color: #fff;
}
.Filter_percet {
    margin-top: 3rem;
    margin-bottom: 3rem;
}



@media (max-width: 500px) {
    .Filter_percet {
        font-size: 15px;
        margin-top: 1.3rem;
        margin-bottom: 0rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
}

@media (max-width: 435px) {

    .Filter_search{
        width: 150px; 
        height: 50px; 
    }

}
</style>