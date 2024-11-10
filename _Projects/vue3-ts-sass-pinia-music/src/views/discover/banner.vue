<template>
    <swiper :slides-per-view="auto" :grabCursor="true" :space-between="50" @swiper="onSwiper"
        @slideChange="onSlideChange">
        <swiper-slide v-for="v in imgData" :key="v.targetData">
            <img :src="v.imageUrl" class="banner-image" @click="handle(v.targetId)"/>
        </swiper-slide>
    </swiper>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import {useStore} from '../store'

const {play} = usePlayerStore();
const imgData = ref<IBanner[]>([]);

onMounted(async () => {
    const { data } = await http.request<{ data: { banners: IBanner } }>('get', '/banner');
    imgData.value = data.banners;
})


function handle(id: number) {
    play(id);
}


</script>
<style lang="scss"></style>