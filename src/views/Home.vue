<template>
  <div class="home">
    <page-loader :id="id"/>
  </div>
</template>

<script>
import PageLoader from '@/components/PageLoader.vue'

export default {
  name: 'home',
  components: {
    PageLoader
  },
  computed: {
    id () {
      return 'home'
    }
  }
}
</script>
