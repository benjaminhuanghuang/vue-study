import axiosClient from "../axiosClient";

export function searchMeals({ commit }: { commit: Function }, keyword: string) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}

export function searchMealsByLetter({ commit }: { commit: Function }, letter: string) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setMealsByLetter", data.meals);
  });
}

export function searchMealsByIngredient({ commit }: { commit: Function }, ing: string) {
  axiosClient.get(`filter.php?i=${ing}`).then(({ data }) => {
    commit("setMealsByIngredients", data.meals);
  });
}
