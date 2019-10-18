<template>
  <div>
    <b-navbar type="dark" variant="dark" :sticky="true">
      <b-navbar-brand to="/">
        <b-img :src="require('@/assets/logo.png')" width="30px" height="30px" rounded="circle" />
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/video-converter">{{ $t('videoConverter.title') }}</b-nav-item>
        <b-nav-item to="/pdu-parser">{{ $t('pduParser.title') }}</b-nav-item>
        <b-nav-item to="/gmaps">{{ $t('gmaps.title') }}</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown v-bind:text="$t('home.language')" right>
          <b-dropdown-item
            v-for="entry in languages"
            :key="entry.title"
            @click="changeLocale(entry.language)"
          >
            <flag :iso="entry.flag" v-bind:squared="false" />
            {{ entry.title }}
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
    <b-container id="app">
      <router-view />
    </b-container>
  </div>
</template>

<script>
import i18n from "@/locales/i18n";

export default {
  name: "app",
  data() {
    return {
      languages: [
        { flag: "us", language: "en-us", title: "English USA" },
        { flag: "br", language: "pt-br", title: "Português Brasil" }
      ]
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = localStorage.locale = locale;
    }
  }
};
</script>

<style>
#app {
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
