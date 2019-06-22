<template>
  <div class="page-loader">
    <slot name="loading" v-bind:page="page">
      <p v-if="!page">Loading...</p>
    </slot>
    <slot name="default" v-bind:page="page">
      <div v-if="page" v-html="content.text"/>
    </slot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'page-loader',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters('pages', ['getPage']),
    page () {
      return this.getPage(this.id)
    },
    content () {
      return this.page.content || {}
    }
  },
  created () {
    this.loadPage()
  },
  updated () {
    this.loadPage()
  },
  methods: {
    async loadPage () {
      if (this.page) {
        return
      }

      this.$store.dispatch('pages/loadPage', { id: this.id })
      this.$store.dispatch('pages/loadPageChildren', { id: this.id })
    }
  }
}
</script>
