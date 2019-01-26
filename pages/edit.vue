<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md8>
      <v-card class="elevation-12 pa-4 mb-4">
          ようこそ <span>{{$store.state.name}} ({{$store.state.id}})</span>さん
          <span v-if="point === ''">
             <v-progress-circular
               indeterminate
               color="accent"/>
          </span>
          <span v-else>
            {{point}} Pt.
          </span>
      </v-card>
      <v-card class="elevation-12 pa-4">
        <v-layout column>
          <v-flex class="my-2">
            <h3>1. 印刷するファイルを選択</h3>
            <input type="file" id="file" hidden>
            <v-btn color="success" @click="selectFile">ファイルを選択</v-btn>
            <span>{{file.name}}</span>
          </v-flex>
          <v-divider/>
          <v-flex class="my-2">
            <h3>2. プリンタを選択</h3>
            <div v-if="availablePrinters.length===0">
              <v-progress-circular
                indeterminate
                color="accent"/>
            </div>
            <div v-else>
              <v-radio-group v-model="printerID">
                <v-radio
                  v-for="printer in printers"
                  :key="printer.id"
                  :label="typeof availablePrinters.find(el=>el ===printer.id) === 'undefined' ? printer.name + '(使用不可)' : printer.name"
                  :value="printer.id"
                  :disabled="typeof availablePrinters.find(el=>el ===printer.id) === 'undefined'"
                ></v-radio>
              </v-radio-group>
            </div>
          </v-flex>
          <v-divider/>
          <v-btn color="warning" :disabled="printerID==='' || file.name===''" @click="$router.push('/confirm')" style="align-self: flex-end;">確認</v-btn>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        printers: [
          {id: 'crocus_pr1',name: '3C205 モノクロ1'},
          {id: 'crocus_pr2',name: '3C205 モノクロ2'},
          {id:'c205color',name: '3C205 カラープリンター'},
          {id: 'abelia_pr1',name: '3C113 モノクロ1'},
          {id: 'abelia_pr2',name: '3C113 モノクロ2'},
          {id: 'c113color',name: '3C113 カラー'},
          {id: 'borage_pr1',name: '3C206 モノクロ1'},
          {id: 'borage_pr2',name: '3C206 モノクロ2'},
          {id: 'fake',name: 'フェイク'}
        ],
        availablePrinters: []
      }
    },
    computed: {
      point: {
        get(){
          return this.$store.state.point
        },
        set(val){
          this.$store.commit('setPoint',val)
        }
      },
      file: {
        get(){
          return this.$store.state.file
        },
        set(val){
          this.$store.commit('setFile',val)
        }
      },
      printerID: {
        get(){
          return this.$store.state.printerID
        },
        set(val){
          this.$store.commit('setPrinterID',val)
          this.$store.commit('setPrinterName',this.printers.find(el=>el.id===val).name)
        }
      }
    },
    created () {
      if(this.$store.state.id === '')
        this.$router.push('/')
    },
    async mounted () {
      const vue = this;
      window.document.getElementById('file').onchange = (evt) =>{
        vue.file = evt.target.files[0]
      }
      
      const printerInfoParam = new URLSearchParams()
      printerInfoParam.append('user',this.$store.state.user)
      printerInfoParam.append('pass',this.$store.state.pass)
      try{
        const res = await axios.post('https://www.coins.tsukuba.ac.jp/~s1811317/printer/api/PrinterInfo.php',printerInfoParam)
        this.availablePrinters = res.data.data
      }catch (e) {
        if(e.response){
        
        }
      }
  
      const paperCutParam = new URLSearchParams()
      paperCutParam.append('user',this.$store.state.user)
      paperCutParam.append('pass',this.$store.state.pass)
      try{
        const res = await axios.post('https://www.coins.tsukuba.ac.jp/~s1811317/printer/api/PaperCut.php',paperCutParam)
        this.point = res.data.data
      }catch (e) {
        if(e.response){
          this.point = 'ポイントの取得に失敗しました: ' + e.response.data.msg
        }
      }
      
    },
    methods: {
      selectFile() {
        window.document.getElementById('file').click()
      }
    }
  }
</script>
