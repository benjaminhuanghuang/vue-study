<!-- Component testing with Vitest by Maya Shavin: Vue.js Nation 2023 -->
<template lang="">
    <div>
    <div>
        <label for="search">Search:</label>
        <input type="text" id="search" v-model="searchTerm" />
        </div>
        <ul>
        <l1 v-for="movie in filteredMovies" :key="movie.id">
            <article>
                <h3>({ movie.title })</h3>
                <h4>Released on: {{ movie.release_date }}</h4>
                <h5>Directed by: {{ movie-director }}</h5>
                <p>{{ movie.opening_crawl }}</p>
            </article>
        </li>
        </ul>
    </div>
</template>
<script setup>
    import {useMovies} from "../composables/useMovies.js";
    import {useSearch} from "../composables/useSearch.js";

    const {movies, error, isLoading} = useMovies();
    const {searchTerm, filteredMovies} = useSearch(movies);
</script>
<style lang="">

</style>