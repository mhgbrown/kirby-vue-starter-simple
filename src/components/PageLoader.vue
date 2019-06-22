<template>
  <div class="page-loader">
    <slot name="loading" v-bind:page="page">
      <div v-if="!page">Loading...</div>
    </slot>
    <slot name="default" v-bind:page="page">
      <div v-if="page" v-html="page.content.text"/>
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

      await this.$store.dispatch('pages/loadPage', { id: this.id })
      this.$store.dispatch('pages/loadPageChildren', { id: this.id })
    }
  }
}
</script>
