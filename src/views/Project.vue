<template>
  <div class="project">
    <div class="content-container" v-html="page.text"></div>
  </div>
</template>

<script>
export default {
  name: 'project',
  props: ['uid'],
  components: {
  },
  computed: {
    page () {
      return this.$store.getters.getPageByUID(this.uid)
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/base';

.project {

}
</style>
