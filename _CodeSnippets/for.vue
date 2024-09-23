<template>
    <ul>
        <li v-for="course in courses" :key="course.id">
            {{ course.title }}
        </li>
    </ul>   
</template>