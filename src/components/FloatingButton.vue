<template>
  <div v-if="showButton" class="floating-button" @click="moveTobottom">
    <fa icon="fa-solid fa-angles-down" />
  </div>
</template>



<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class FloatingButton extends Vue {
  showButton = true;

  moveTobottom(): void {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }
}
</script>

<style lang="scss">
.floating-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  color: #14123d;
  background: #14123d50;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  bottom: 15px;
  right: 15px;
  font-size: 2rem;

  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 0.5s;
  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(0px, 2px);
  }
  20% {
    transform: translate(0px, 0px);
  }
  40% {
    transform: translate(0px, -2px);
  }
  60% {
    transform: translate(0px, 0px);
  }
  80% {
    transform: translate(0px, -2px);
  }
  100% {
    transform: translate(0px, 2px);
  }
}
</style>
