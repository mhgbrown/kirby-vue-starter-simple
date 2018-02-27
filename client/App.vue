<template>
  <div id="app">
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import EventBus from './util/EventBus'
import * as types from './store/mutation-types'

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
    }
  },
  beforeCreate () {
    this.$store.commit(types.RECEIVE_PAGES, { pages: window.Kirby.pages })
    this.$store.commit(types.RECEIVE_SITE, { site: window.Kirby.site })
  },
  created () {
    window.addEventListener('resize', this.onResize, true)
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('orientationchange', this.onOrientationChange)

    this.onResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.onResize, true)
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('orientationchange', this.onOrientationChange)
  },
  methods: {
    onResize (event) {
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth
      this.$store.commit(types.UPDATE_APP, { field: 'tablet', value: windowWidth <= 960 })
      this.$store.commit(types.UPDATE_APP, { field: 'phone', value: windowWidth <= 480 })

      EventBus.$emit('app.resize', event)
    },
    onScroll (event) {
      EventBus.$emit('app.scroll', event)
    },
    onOrientationChange (event) {
      EventBus.$emit('app.orientationchange', event)
    }
  }
}
</script>

<style lang="scss">
@import 'node_modules/reset-css/_reset';

@import './assets/styles/base';

* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
}

html {
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: $font-size;
  color: $font-color;
}

body {
  line-height: $line-height;
}

#app {

}

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0;
}

a,
a:visited {
  color: black;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

p {
  margin-bottom: 0.5rem;
}
</style>
