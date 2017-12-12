<template>
  <div id="app">
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'
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
  beforeCreate() {
    this.$store.commit(types.RECEIVE_PAGES, { pages: window.Kirby.pages })
  },
  created () {
    window.addEventListener('resize', this.onResizeDebounced, true)
    window.addEventListener('orientationchange', this.onOrientationChange, false)
    window.addEventListener('scroll', this.onScrollDebounced)

    document.ontouchmove = function(event) {
      event.preventDefault()
    }

    this.onResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.onResizeDebounced, true)
    window.removeEventListener('orientationchange', this.onOrientationChange, false)
    window.removeEventListener('scroll', this.onScrollDebounced)
  },
  methods: {
    onResize (event) {
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth
      this.$store.commit(types.UPDATE_APP, { field: 'tablet', value: windowWidth <= 960 })
      this.$store.commit(types.UPDATE_APP, { field: 'phone', value: windowWidth <= 480 })

      EventBus.$emit('app.resize', event)
    },
    onResizeDebounced: debounce(function(event) {
      this.onResize(event)
    }, 16),
    onScroll(event) {
      EventBus.$emit('app.scroll', event)
    },
    onScrollDebounced: debounce(function(event) {
      this.onScroll(event)
    }, 16),
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
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: $font-size;
  color: $font-color;
  line-height: $line-height;
}

body {

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

#app {

}
</style>
