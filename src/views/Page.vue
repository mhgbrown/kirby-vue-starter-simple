<template>
  <div class="page">
    <page-loader :id="id"/>
  </div>
</template>

<script>
import PageLoader from '@/components/PageLoader.vue'

export default {
  name: 'page',
  components: {
    PageLoader
  },
  computed: {
    id () {
      return this.$route.params.pathMatch
        // remove leading slash(es)
        .replace(/^\/+/, '')
        .toLowerCase()
    }
  }
}
</script>
