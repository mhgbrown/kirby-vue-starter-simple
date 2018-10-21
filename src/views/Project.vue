<template>
  <div class="project">
    <div class="content-container" v-html="page.text"></div>
  </div>
</template>

<script>
export default {
  name: 'project',
  props: ['uid'],
  data () {
    return {
    }
  },
  computed: {
    page () {
      return this.$store.getters.getPageByUID(this.uid)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/base';

.project {

}
</style>
