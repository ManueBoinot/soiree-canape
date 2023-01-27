<template>
    <div class="mb-5">
        <input type="button" class="btn btn-light" @click="sort('title')" value="Trier par titre" />

        <input type="button" class="btn btn-light mx-5" @click="sort('date')" value="Trier par date de sortie" />

        <input type="button" class="btn btn-light" @click="sort('note')" value="Trier par note" />
    </div>
</template>

<script>

export default {
    name: 'BoutonFiltre',
    props: [
        'films'
    ],
    data() {
        return {
            sortedByDate: false,
            sortedByTitle: false,
            sortedByNote: false
        };
    },
    methods: {
        sort(type) {

            let childFilms = this.films

            // si on clique sur le bouton TRI PAR DATE
            if (type == 'date') {

                if (!this.sortedByDate) {

                    childFilms.sort((a, b) => {
                        if (a.release_date > b.release_date) {
                            return -1
                        }
                        if (a.release_date < b.release_date) {
                            return 1
                        }
                        return 0
                    })

                    this.sortedByDate = true

                } else {

                    childFilms.sort((a, b) => {
                        if (a.release_date < b.release_date) {
                            return -1
                        }
                        if (a.release_date > b.release_date) {
                            return 1
                        }
                        return 0
                    })
                    this.sortedByDate = false

                }
            }

            // si on clique sur le bouton TRI PAR TITRE
            else if (type == 'title') {

                if (!this.sortedByTitle) {
                    childFilms.sort((a, b) => {

                        if (a.title > b.title) {
                            return -1
                        }
                        if (a.title < b.title) {
                            return 1
                        }
                        return 0
                    })

                    this.sortedByTitle = true


                } else {

                    childFilms.sort((a, b) => {
                        if (a.title < b.title) {
                            return -1
                        }
                        if (a.title > b.title) {
                            return 1
                        }
                        return 0
                    })
                    this.sortedByTitle = false
                }
            }

            // si on clique sur le bouton TRI PAR NOTE
            else if (type == 'note') {

                if (!this.sortedByNote) {

                    childFilms.sort((a, b) => {

                        if (a.vote_average > b.vote_average) {
                            return -1
                        }
                        if (a.vote_average < b.vote_average) {
                            return 1
                        }
                        return 0
                    })

                    this.sortedByNote = true


                } else {

                    childFilms.sort((a, b) => {
                        if (a.vote_average < b.vote_average) {
                            return -1
                        }
                        if (a.vote_average > b.vote_average) {
                            return 1
                        }
                        return 0
                    })

                    this.sortedByNote = false

                }
            }
        }
    }
}


</script>
