import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      id: '',
      name: '',
      user: '',
      pass: '',
      point: '',
      printerID: '',
      printerName: '',
      file: {name:''},
      loading: false
    }),
    mutations: {
      setUserData (state, { user, pass, id, name }) {
        state.user = user
        state.pass = pass
        state.id = id
        state.name = name
      },
      setLoadingState (state, val) {
        state.loading = val
      },
      setPoint(state, val){
        state.point = val
      },
      setPrinterID(state, val){
        state.printerID = val
      },
      setPrinterName(state,val){
        state.printerName = val
      },
      setFile(state, file){
        state.file = file
      }
    },
    actions: {

    }
  })
}

export default createStore
