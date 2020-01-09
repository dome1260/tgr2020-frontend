<template>
  <v-app>
    <header>
      <sidebar />
    </header>
    <main>
      <v-container>
        <gmap-map
          class="map"
          :center="center"
          :zoom="19"
          style="width:100%;  height: 600px;">
          <gmap-marker
            :position="position"
            title="kuy"
            :clickable="true"
            @click="showDetail">
          </gmap-marker>
        </gmap-map>
        <v-navigation-drawer
          v-model="drawer"
          class="elevation-5"
          style="width: 400px;"
          :right="true"
          absolute
          dark>
          <div class="head">
            <img
              src="@/assets/img/detail-head.png"
              alt="detail"
              class="img-detail">
          </div>
        </v-navigation-drawer>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import sidebar from '@/components/sidebar.vue'

export default {
  name: 'App',
  components: {
    sidebar
  },
  data () {
    return {
      drawer: false,
      center: { lat: 19.027521, lng: 99.891396 },
      position: { lat: 19.027521, lng: 99.891396 }
    }
  },
  created () {
    setInterval(() => {
      console.log('test set time interval')
    }, 1000)
  },
  methods: {
    showDetail () {
      // eslint-disable-next-line no-alert
      this.drawer = true
    }
  }
}
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
  }
  .pad-t-80 {
    padding-top: 80px;
  }
  .map {
    border: 2px solid black;
  }
  main {
    height: 100%;
  }
  .container {
    display: flex;
    align-items: center;
    height: 100% !important;
  }
  .img-detail {
    width: 100%;
    height: 200px;
  }
</style>
