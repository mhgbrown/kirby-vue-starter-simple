<template>
  <div class="projects">
    <div class="content-container">
      <ul>
        <li v-for="subpage in subpages" :key="subpage.uid">
          <router-link :to="{ name: subpage.type, params: { uid: subpage.uid } }">{{ subpage.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projects',
  components: {
  },
  computed: {
    subpages () {
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
