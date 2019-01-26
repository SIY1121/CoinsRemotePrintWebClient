<template>
  <v-app>
    <v-toolbar color="primary" app>
      <v-toolbar-side-icon class="white--text"><i class="material-icons">print</i></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Coins Remote Print Web Client</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat><nuxt-link class="white--text" to="/about">About</nuxt-link></v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer app>
      @SIY1121
    </v-footer>
    <div v-if="$store.state.loading" id="loading">
      <v-progress-circular
        indeterminate
        color="accent"/>
    </div>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
<style lang="sass">
#loading
  display: flex
  position: fixed
  width: 100vw
  height: 100vh
  background: rgba(0,0,0,0.5)
  justify-content: center
  align-items: center
a
  text-decoration: none
</style>
