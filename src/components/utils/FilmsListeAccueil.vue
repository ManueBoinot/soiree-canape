<template>
    <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500">

        <Slide v-for="slide in 10" :key="slide">
            <div class="carousel__item">
                <div class="row">
                    <div class="col-sm-6 col-md-4 col-xl-3 col-xxl-2 mx-auto" v-for="film in films" v-bind:key=film.id>
                        <router-link v-bind:to="'film-detail/' + film.id" class="text-decoration-none">
                            <div class="card mb-3 text-bg-light" style="height: 500px">

                                <!-- AFFICHE FILM -->
                                <img v-bind:src="preUrl + film.poster_path" alt="moviePoster" class="card-img-top"
                                    style="object-fit: contain; height: 300px;">

                                <div class="card-body" style="font-size: small">

                                    <!-- TITRE FILM -->
                                    <div class="card-title d-flex align-items-center justify-content-center"
                                        style="color: #750202;">

                                        <h5 class="fw-bold text-uppercase m-0">{{ film.title }}</h5>
                                    </div>

                                    <!-- NOTE FILM -->
                                    <div class="card-text m-0">
                                        <p style="font-size: 1rem;">Note : <span class="fw-bold">{{film.vote_average}} /
                                                10</span> <span class="fst-italic"
                                                style="font-size: 0.7rem;">({{film.vote_count}}
                                                votes)</span></p>
                                    </div>

                                    <!-- RÉSUMÉ FILM -->
                                    <div class="card-text">
                                        {{film.overview.slice(0, 150) + '...'}}
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </Slide>

        <template #addons="{ slidesCount }">
            <Navigation v-if="slidesCount > 1" />
        </template>
    </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/carousel.css'

export default defineComponent({
    name: 'AutoplayCarousel',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
})
</script>

<style scoped>
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}
</style>