/*
    fetch the movie according to the API
*/

import { ref, onBeforeMount } from "vue";

export const useMovies = () => {
  const movies = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const getMovies = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("No data available");
      }
      const data = await response.json();
      movies.value = data.results;
    } catch (error) {
      error.value = error.message;
    } finally {
      isLoading.value = false;
    }
  };

  // fetch the movies on component mount, it is synchronous
  onBeforeMount(getMovies);

  return {
    movies,
    isLoading,
    error,
  };
};
