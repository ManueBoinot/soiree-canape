<template>
    <header>
        <a href="/" class="text-decoration-none">
            <img alt="logo canapé rouge" src="../../assets/logo-canape.png">
            <h4 class="text-white mb-3">Le repaire des couch potatoes</h4>
        </a>
    </header>

    <nav class="navbar navbar-expand-lg text-bg-dark mb-5 border-top border-bottom sticky-top">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/"><i
                                class="fa-solid fa-house text-white"></i></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/films-FR">Films FR</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/films-US">Films US</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/top-rated">Top 50</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/box-office">Box Office</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/rechercher">RECHERCHER</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script>
export default {
    name: 'HeaderTemp'
}
</script>


<style scoped>
.nav-link {
    text-transform: uppercase;
    text-align: center;
    font-size: larger;
    color: rgb(255, 255, 255);
    margin: 0 50px 0 50px;
    transition: 0.5s;
}

.nav-link:hover {
    color: rgb(242, 233, 102);
    transition: 0.3s;
    font-weight: bold;
}
</style>