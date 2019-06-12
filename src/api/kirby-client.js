import axios from 'axios'
import Base64 from '@/utils/base64'

class KirbyClient {
  constuctor () {
    const email = process.env.VUE_APP_KIRBY_EMAIL
    const password = process.env.VUE_APP_KIRBY_PASSWORD
    if (!email || !password) {
      throw new Error(`KirbyClient authorization values are missing! email: ${email} password: ${password}`)
    }

    const authorization = Base64.encode(`${email}:${password}`)
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

export default new KirbyClient()
