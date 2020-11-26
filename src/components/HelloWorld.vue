<template>
  <div class="hello">
  </div>
</template>

<script>
import {GET_TOP_SONGS} from '@/utils/api'
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded' // 这一句 还是没有 qs.stringify

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    // axios.get('/v1/top/songs')
    GET_TOP_SONGS().then(res => {
      console.log(res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
