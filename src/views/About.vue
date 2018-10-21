<template>
  <div class="about">
    <div class="content-container" v-html="page.text"></div>
  </div>
</template>

<script>

export default {
  name: 'about',
  data () {
    return {
    }
  },
  computed: {
    page () {
      return this.$store.getters.getPageByUID('about')
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/base';

.about {

}
</style>
