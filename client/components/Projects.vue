<template>
  <div class="projects">
    <div class="content-container">
      <ul>
        <li v-for="project in projects">
          <router-link :to="{ name: 'project', params: { uid: project.uid } }">{{ project.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Project from './Project'

export default {
  name: 'projects',
  components: {
    'project': Project
  },
  computed: {
    projects () {
      return this.$store.getters.getPagesByType('project')
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

.projects {

}
</style>
