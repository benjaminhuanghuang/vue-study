## Debounce or Lazy query 
 
```js

<input
    type="text"
    v-model="searchQuery"
    @input="getSearchResults"/>

const searchQuery = ref("");
const queryTimeout = ref(null);
const searchResults = ref(null);
const searchError = ref(null);

const getSearchResults = () => {
  clearTimeout(queryTimeout.value);  //debounce
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      try {
        const result = await axios.get(`the url...`);
        searchResults.value = result.data.features;
      } catch {
        searchError.value = true;
      }

      return;
    }
    searchResults.value = null;
  }, 300);
};
```