<template>
  <div class="logo-banner">
    <img
      src="@/assets/logo-banner.jpeg"
      alt="logo-banner"
      class="logo-banner"
    />
  </div>
  <div id="app" class="app">
    <Header />
    <div class="router-view">
      <router-view />
    </div>
    <Footer />
  </div>
  <floating-button />
</template>



<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import FloatingButton from "@/components/FloatingButton.vue";

@Options({
  components: {
    Header,
    Footer,
    FloatingButton,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,200;1,300;1,600;1,700&family=Roboto:wght@100;300;400;500;900&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Nunito Sans", sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .router-view {
    flex: 1;
  }
}

.logo-banner {
  width: 100%;
  height: 8rem;
}
</style>
