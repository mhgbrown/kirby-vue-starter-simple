<template>
  <div class="project-new">
    <form method="patch" actions="/rest/pages/projects/children" @submit.prevent="onSubmit">
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
      <input type="submit" value="save"/>
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
      payload: {
        template: 'project',
        slug: '',
        content: {
          title: '',
          intro: '',
          text: ''
        }
      }
    }
  },
  methods: {
    async onSubmit () {
      this.success = ''
      this.error = ''
      try {
        await kirby.http.post('/pages/projects/children', this.payload)
        this.success = 'Page created successfully!'
      } catch (error) {
        this.error = error.message
      }
    }
  }
}
</script>

// PATCH update REQUEST object
// http://localhost:8888/api//pages/projects+new-test
{
    "headline": "f",
    "year": 2018,
    "tags": [],
    "intro": "",
    "text": ""
}

// POST New REQUEST object
// http://localhost:8888/api/pages/projects/children
{
    "template": "project",
    "slug": "new-test",
    "content": {
        "title": "New Test"
    }
}
