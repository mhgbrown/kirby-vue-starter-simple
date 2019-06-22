<template>
  <div class="project-new">
    <form ref="form" method="post" actions="/rest/pages/projects/children" @submit.prevent="onSubmit">
      <p>
        <label>
          <div>Title</div>
          <input type="text" name="title" v-model="payload.content.title">
        </label>
      </p>
      <p>
        <label>
          <div>Slug</div>
          <input type="text" name="slug" v-model="payload.slug">
        </label>
      </p>
      <p>
        <label>
          <div>Headline</div>
          <textarea name="intro" v-model="payload.content.headline">
          </textarea>
        </label>
      </p>
      <p>
        <label>
          <div>Intro</div>
          <textarea name="intro" v-model="payload.content.intro">
          </textarea>
        </label>
      </p>
      <p>
        <label>
          <div>Text</div>
          <textarea name="text" v-model="payload.content.text">
          </textarea>
        </label>
      </p>
      <input type="submit" value="save" :disabled="loading"/>
      <p v-if="loading">Working...</p>
      <p v-if="error" style="color: red;">{{ error }}</p>
      <p v-if="success" style="color: green;">{{ success }}</p>
    </form>
  </div>
</template>

<script>
import kirby from '@/api/kirby'

export default {
  name: 'new-project',
  data () {
    return {
      error: '',
      success: '',
      loading: false,
      payload: {
        template: 'project',
        slug: '',
        content: {
          title: '',
          intro: '',
          text: '',
          headline: ''
        }
      }
    }
  },
  methods: {
    async onSubmit () {
      this.loading = true

      this.success = ''
      this.error = ''

      try {
        const pageId = 'projects'
        // NB: create page
        const response = await kirby.createChildPage(pageId, this.payload)
        // NB: publish page
        // AFAICT you can't create and publish at the same time
        await kirby.publishPage(`${pageId}+${response.data.slug}`)

        // if there is no projects page, fetch it
        const projectsPage = this.$store.getters['pages/getPage'](pageId)
        if (!projectsPage) {
          await this.$store.dispatch('pages/loadPage', { id: pageId })
        }

        // NB: re-fetch child pages
        await this.$store.dispatch('pages/loadPageChildren', { id: pageId })

        this.$refs.form.reset()
        this.success = 'Page created successfully!'
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
        this.error = error.message
      }

      this.loading = false
    }
  }
}
</script>
