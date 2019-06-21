<template>
  <div class="project-new">
    <form ref="form" method="patch" actions="/rest/pages/projects/children" @submit.prevent="onSubmit">
      <p>
        <label>
          Title
          <input type="text" name="title" v-model="payload.content.title">
        </label>
      </p>
      <p>
        <label>
          Slug
          <input type="text" name="slug" v-model="payload.slug">
        </label>
      </p>
      <p>
        <label>
          Headline
          <textarea name="intro" v-model="payload.content.headline">
          </textarea>
        </label>
      </p>
      <p>
        <label>
          Intro
          <textarea name="intro" v-model="payload.content.intro">
          </textarea>
        </label>
      </p>
      <p>
        <label>
          Text
          <textarea name="text" v-model="payload.content.text">
          </textarea>
        </label>
      </p>
      <input type="submit" value="save" :disabled="loading"/>
      <div v-if="error" style="color: red;">{{ error }}</div>
      <div v-if="success" style="color: green;">{{ success }}</div>
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
        // NB: create page
        const response = await kirby.http.post('/pages/projects/children', this.payload)
        // NB: publish page
        // AFAICT you can't create and publish at the same time
        await kirby.http.patch(`/pages/projects+${response.data.slug}/status`, { status: 'listed' })
        await this.$store.dispatch('pages/loadPage', { id: 'projects' })
        this.$refs.form.reset()
        this.success = 'Page created successfully!'
      } catch (error) {
        this.error = error.message
      }

      this.loading = false
    }
  }
}
</script>
