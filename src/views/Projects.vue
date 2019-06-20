<template>
  <div class="projects">
    <page-loader :id="id">
      <template v-slot:loading="{ page }">
        <div v-if="!page">Loading projects...</div>
      </template>
      <template v-slot:default="{ page }">
        <template v-if="page">
          <h1>{{ page.title }}</h1>
          <ul>
            <li v-for="child in page.children" :key="child.id">
              <router-link :to="`/${child.id}`">{{ child.title }}</router-link>
            </li>
          </ul>
        </template>
      </template>
    </page-loader>
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
      return 'projects'
    }
  }
}
</script>
