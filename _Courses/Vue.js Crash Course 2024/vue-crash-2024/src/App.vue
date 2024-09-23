<script>
export default {
  data() {
    return {
      title: 'Vue.js Crash Course 2024',
      showCourses: true,
      courses: [
        { id: 1, title: 'Course 1' },
        { id: 2, title: 'Course 2' },
        { id: 3, title: 'Course 3' },
        { id: 4, title: 'Course 4' }
      ]
    }
  }
};
</script>
<template>
  <h1>{{ title }}</h1>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
