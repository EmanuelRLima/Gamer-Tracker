<template>
    <div class="container">
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
                    <input type="title" v-model="searchText" placeholder="Pesquisar" class="search-input"
                        style="border-radius: 0px 8px 8px 0px; background: #0B1641; border: rgb(11, 22, 65); width: 230px; height: 50px; color: #fff;" />
                </div>
            </div>
            <div class="Filter_percet">
                <span class="mr-2 text-white" for="sortOrder" style="font-family: Roboto; font-size: 20px;">Ordenar
                    por:</span>
                <select class="text-center" id="sortOrder" v-model="selectedSortOption"
                    style="border-radius: 8px; background: #0B1641; border: rgb(11, 22, 65); height: 50px; color: #fff;">
                    <option value="desc">Maior Desconto</option>
                    <option value="asc">Menor Desconto</option>
                    <option value="title">Título</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6 col-12" v-for="game in filteredAndSortedGames" :key="game.id">
                <div class="card mb-3"
                    style="border-radius: 8px;background: #0B1641;box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);">
                    <img :src="game.thumb" class="card-img-top" alt="Card Image" />
                    <div class="card-body">
                        <div>
                            <span class="card-title text-white" style="font-size: 20px; font-family: roboto;">{{ game.title
                            }}</span>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="mt-1">
                                <button type="button" class="btn"
                                    style="color: #fff ;background: #C70160;">DETALHES</button>
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
                style="width: 380px;height: 50px; background: #0B1641;border-radius: 8px;">Carregar mais</button>
        </div>
    </div>
</template>
  
<script>
import { AxiosAPI } from "@/axios"
export default {
    data() {
        return {
            items: [
                { id: 1, title: "Game 1", thumb: "x" },
                { id: 2, title: "Game 2", thumb: "x" },
                { id: 3, title: "Game 3", thumb: "x" },
                { id: 4, title: "Game 4", thumb: "x" },
                { id: 5, title: "Game 5", thumb: "x" },
                { id: 6, title: "Game 6", thumb: "x" },
                { id: 7, title: "Game 7", thumb: "x" },
                { id: 8, title: "Game 8", thumb: "x" },
                { id: 9, title: "Game 9", thumb: "x" },
                { id: 10, title: "Game 10", thumb: "x" },
                { id: 11, title: "Game 11", thumb: "x" },
                { id: 12, title: "Game 12", thumb: "x" },
            ],
            searchText: "",
            selectedSortOption: 'desc',
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
        Games() {
            AxiosAPI.get("/1.0/deals?pageNumber=0&pageSize=12&storeID=1&onSale=1&AAA=1")
                .then((resp) => {
                    this.items = resp.data
                })

        },

        calculateDiscountPercentage(game) {
            const normalPrice = parseFloat(game.normalPrice);
            const salePrice = parseFloat(game.salePrice);
            const discount = (normalPrice - salePrice) / normalPrice * 100;
            return discount.toFixed(0);
        },

    }
}


</script>
  
<style scoped>
.input_resp {
    border-radius: 8px;
    background: #0B1641;
    border: rgb(11, 22, 65);
    width: 250px;
    height: 50px;
    color: #fff;
}

.Filter_percet {
    margin-top: 3rem;
    margin-bottom: 3rem;
}



@media (max-width: 500px) {
    .input_resp {
        width: 150px;
    }

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
</style>