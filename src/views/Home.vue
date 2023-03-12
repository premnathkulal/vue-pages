<template>
  <div class="home">
    <iframe
      src="https://docs.google.com/gview?url=https://drive.google.com/uc?id=1-Nc3Hd0jTrNgvIyiuAF14lvaUyui9vcU&embedded=true"
      frameBorder="0"
      scrolling="auto"
      style="width: 100%; height: 800px"
      loading="eager"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.home {
  min-height: 100vh;
}
</style>
