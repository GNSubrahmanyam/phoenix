<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import appConfig from './app.config.js'

export default {
  name: 'App',
  data: () => ({
  }),
  head: {
    // All subcomponent titles will be injected into this template.
    titleTemplate (title) {
      title = typeof title === 'function' ? title(this.$store) : title
      return title ? `${title} | ${appConfig.title}` : appConfig.title
    }
  }
}
</script>
