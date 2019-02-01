<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Login form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <div v-if="errmsg">{{errmsg}}</div>
          <v-form>
            <v-text-field id="username" prepend-icon="person" name="login" label="s1234567" type="text" v-model="username"></v-text-field>
            <v-text-field id="password" prepend-icon="lock" name="password" label="Password" v-model="password" @keydown.enter="login"
                          type="password"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import axios from 'axios'
  
  export default {
    data () {
      return {
        username: '',
        password: '',
        errmsg: ''
      }
    },
    methods: {
      async login () {
        this.$store.commit('setLoadingState', true)
        try {
          const params = new URLSearchParams()
          params.append('user',this.username)
          params.append('pass',this.password)
          const res = await axios.post('https://www.coins.tsukuba.ac.jp/~s1811317/printer/api/v1/UserInfo.php', params)
          this.$store.commit('setUserData', {
            user: this.username,
            pass: this.password,
            id: res.data.data.id,
            name: res.data.data.name
          })
          this.$router.push('/edit')
        } catch (e) {
          if (e.response) {
            this.errmsg = e.response.data.msg
          }
        }
        this.$store.commit('setLoadingState', false)
      }
    }
  }
</script>
