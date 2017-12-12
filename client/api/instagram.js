import Vue from 'vue'

export default {
  getInstagrams () {
    return Vue.http.jsonp('https://api.instagram.com/v1/users/499981447/media/recent/?access_token=579193031.3947c4f.27cede32a9ce464186bdaab4f4a17d31', {}, {'jsonp': 'callback'})
  }
}
