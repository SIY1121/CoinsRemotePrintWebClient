<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md8>
      <v-card class="elevation-12 pa-4">
        <h3>印刷リクエストの送信に成功しました</h3>
        <div>印刷が開始されます</div>
        <v-btn color="accent" @click="restart">続けて印刷する</v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    methods:{
      restart() {
        this.$store.commit('setFile',{name:''})
        this.$router.push('/edit')
      }
    }
  }
</script>
