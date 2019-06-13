<template>
  <div class="page-loader">
    <slot>
      <div v-if="!page">Loading...</div>
      <div v-else v-html="page.content.text"/>
    </slot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'page',
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
    if (this.page) {
      return
    }

    this.$store.dispatch('pages/loadPage', { id: this.id })
  }
}
</script>
