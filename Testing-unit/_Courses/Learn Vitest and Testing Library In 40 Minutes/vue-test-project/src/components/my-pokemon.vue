<script setup lang="ts">
import {ref} from 'vue';

interface Pokemon {
  name: string;
}

const pokemons = ref<Pokemon[]>([]);

async function getPokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await response.json();
  console.log(data);
  pokemons.value = data.results;
}

</script>

<template>
<button @click="getPokemon">get Pokemon</button>
<div v-for="(pokemon, index) in pokemons">
    <h4 :key="index">{{ pokemon.name }}</h4>
</div>
</template>