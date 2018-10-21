<template>
  <div class="home">
    <div class="content-container" v-html="page.text"></div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  computed: {
    page () {
      return this.$store.getters.getPageByUID('home')
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/base';

.home {
  color: blue;
  font-size: 4rem;
}
</style>
