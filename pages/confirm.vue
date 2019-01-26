<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md8>
      <v-card class="elevation-12 pa-4">
        <v-layout column>
          <h3 class="mb-4">以下の設定で印刷を行います</h3>
          <v-layout class="my-2">
            <v-flex>
              印刷アカウント
            </v-flex>
            <v-flex>
              {{$store.state.name}} ({{$store.state.id}})
            </v-flex>
          </v-layout>
          <v-divider/>
          <v-layout class="my-2">
            <v-flex>
              ポイント残高
            </v-flex>
            <v-flex>
              {{$store.state.point}} Pt.
            </v-flex>
          </v-layout>
          <v-divider/>
          <v-layout class="my-2">
            <v-flex>
              印刷ファイル
            </v-flex>
            <v-flex>
              {{$store.state.file.name}}
            </v-flex>
          </v-layout>
          <v-divider/>
          <v-layout class="my-2">
            <v-flex>
              プリンター
            </v-flex>
            <v-flex>
              {{$store.state.printerName}}
            </v-flex>
          </v-layout>
          <v-layout justify-end>
            <v-btn color="info" @click="$router.push('/edit')">修正する</v-btn>
            <v-btn color="error" @click="print">印刷</v-btn>
          </v-layout>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  import axios from 'axios'
  
  export default {
    methods:{
      async print() {
        const params = new FormData()
        params.append('user',this.$store.state.user)
        params.append('pass',this.$store.state.pass)
        params.append('printer', this.$store.state.printerID)
        params.append('up_file',this.$store.state.file)
        this.$store.commit('setLoadingState',true)
        try{
          console.log("start")
          const res = await axios.post('https://www.coins.tsukuba.ac.jp/~s1811317/printer/api/Print.php',params,{headers:{'Content-Type': 'multipart/form-data'}})
          this.$router.push('/submit')
        }catch (e) {
          console.log(e)
          if(e.response){
          
          }
        }
        this.$store.commit('setLoadingState',false)
      }
    },
    created () {
      if(this.$store.state.user ==='')
        this.$router.push('/')
      else if(this.$store.state.printerID==='')
        this.$router.push('/edit')
    }
  }
</script>
<style lang="sass">

</style>
