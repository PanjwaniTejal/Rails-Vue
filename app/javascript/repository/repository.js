import axios from "axios";

const baseDomain = "http://localhost:3000"
const baseUrl = `${baseDomain}/api/v1`

export default {
  async request(endpoint, method, payload ){
    var url = baseUrl + endpoint
    let headers = { 'Content-Type': 'application/json' }
    const csrfTag = document.querySelector('meta[name="csrf-token"]')
    if (csrfTag) headers['X-CSRF-Token'] = csrfTag.getAttribute('content')
   
    const response = await axios({
      method: method,
      url: url,
      data: payload,
      headers: headers
    })

    return response;
  }
}