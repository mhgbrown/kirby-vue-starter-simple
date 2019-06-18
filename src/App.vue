<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/projects">Projects</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  beforeCreate () {
    this.$store.dispatch('site/loadSite')
  }
}
</script>

<style lang="stylus">
body,
html
  padding 0
  margin 0

#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  max-width 1280px
  margin 0 auto

img
  max-width 100%
  height auto

ul
  list-style-type none
  padding 0
  margin 0

</style>
