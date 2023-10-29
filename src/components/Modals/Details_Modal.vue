<template>
    <div>
        <Modal ref="viewDocument">
            <template #header>
                <span class="text-white"><strong> {{ game.title }} </strong></span>

                <div class="flex-start">
                    <button type="button" class="close" style="font-family: fantasy; color: #fff;"
                        @click="$refs.viewDocument.closeModal();">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </template>

            <template #body>

                <div class="d-flex justify-content-center text-white">
                    <div>
                        <div><img style="width: 100%;object-fit: contain;" :src="'https://cdn.akamai.steamstatic.com/steam/apps/'+game.steamAppID+'/header.jpg'"></div>
                        <div class="text-center font-size-notrap"><span class="text-uppercase font-weight-bold">
                            Avaliação na steam: {{
                                    game.steamRatingText }}</span></div>

                    <div class="container">
                        <div class="d-flex justify-content-around row">
                            <div >
                                <div class="col">
                                    <span class="text-uppercase font-weight-bold font-size-rating-notrap">Steam
                                        pontuação</span>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <div class="d-flex justify-content-center text-white font-size-notrap mt-1"
                                        :style="{ 'background': game.steamRatingPercent >= 80 ? 'green' : (game.steamRatingPercent >= 50 ? '#8d8d16' : (game.steamRatingPercent >= 0 ? 'red' : '')) }"
                                        style="width: 84px;height: 39px;border-radius: 8px; align-items: center;">
                                        <b>{{ game.steamRatingPercent }}%</b>
                                    </div>

                                </div>
                            </div>

                            <div >
                                <div class="col">
                                    <span class="text-uppercase font-weight-bold font-size-rating-notrap">Metacritic
                                        pontuação</span>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <div class="d-flex justify-content-center text-white font-size-notrap mt-1"
                                        :style="{ 'background': game.metacriticScore >= 80 ? 'green' : (game.metacriticScore >= 50 ? '#8d8d16' : (game.metacriticScore >= 0 ? 'red' : '')) }"
                                        style="width: 84px;height: 39px;border-radius: 8px; align-items: center;">
                                        <b>{{ game.metacriticScore }}%</b>
                                    </div>

                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>


            </template>

            <template #footer>
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-secondary mr-3" style="font-family: roboto;" @click="$refs.viewDocument.closeModal()">
                        <b> Voltar </b>
                    </button>
                    <a :href="'https://www.metacritic.com'+game.metacriticLink" target="_blank">
                    <button type="button" class="btn btn-info" style="font-family: roboto;">
                       <b> Metacritic </b>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
                            fill="#FFFFFF"/>
                        </svg>
                    </button>
                </a>
                </div>
            </template>
        </Modal>
    </div>
</template>
    
<script>
import Modal from "./Modal.vue";

export default {
    components: {
        Modal
    },

    data() {
        return {
            game: []
        }
    },

    methods: {
        openModal(event) {
            this.$refs.viewDocument.openModal();
            this.game = event
        },

        closeModal() {
            this.$refs.viewDocument.closeModal()
        },

    }
}


</script>
    
<style>

.font-size-notrap{
    font-size: 1.2rem;
}
.font-size-rating-notrap{
    font-size: 0.9rem;
}

@media (max-width: 850px) {
    .font-size-notrap{
        font-size: 1rem;
    }
    .font-size-rating-notrap{
        font-size: 0.7rem;
    }
}

@media (max-width: 450px) {
    .font-size-notrap{
        font-size: 0.6rem;
    }
    .font-size-rating-notrap{
        font-size: 0.65rem;
    }
}
</style>