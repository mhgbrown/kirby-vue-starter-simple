import axios from 'axios'

class Kirby {
  constructor () {
    const email = process.env.VUE_APP_KIRBY_EMAIL
    const password = process.env.VUE_APP_KIRBY_PASSWORD
    if (!email || !password) {
      throw new Error(`KirbyClient authorization values are missing! email: ${email} password: ${password}`)
    }

    const authorization = Buffer.from(`${email}:${password}`).toString('base64')
    this.http = axios.create({
      baseURL: '/rest',
      headers: {
        'Authorization': `Basic ${authorization}`
      }
    })
  }

  getPath (path) {
    return this.http.get(path)
  }

  getSite () {
    return this.getPath('/site')
  }

  getAbout () {
    return this.getPath('/pages/about')
  }

  getProjects () {
    return this.getPath('/pages/projects')
  }

  getProject (id) {
    return this.getPath(`/pages/projects+${id}`)
  }
}

export default new Kirby()
