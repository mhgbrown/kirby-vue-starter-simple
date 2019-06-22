import axios from 'axios'

class Kirby {
  constructor () {
    const email = process.env.VUE_APP_KIRBY_EMAIL
    const password = process.env.VUE_APP_KIRBY_PASSWORD
    if (!email || !password) {
      throw new Error(`KirbyClient authorization values are missing! email: ${email} password: ${password}`)
    }

    this.http = axios.create({
      baseURL: '/rest',
      auth: {
        username: email,
        password: password
      },
      transformResponse (data) {
        const json = JSON.parse(data)
        if (json.status === 'error') {
          throw new Error(json.message)
        }

        return json.data
      }
    })
  }

  getPath (path) {
    return this.http.get(path)
  }

  getSite () {
    return this.getPath('/site')
  }

  createChildPage (pageId, payload) {
    return this.http.post(`/pages/${pageId}/children`, payload)
  }

  publishPage (pageId, payload = {}) {
    const data = Object.assign({ status: 'listed' }, payload)
    return this.http.patch(`/pages/${pageId}/status`, data)
  }
}

export default new Kirby()
