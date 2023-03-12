<template>
  <div class="header">
    <img src="@/assets/logo-no-bg.png" alt="brand-logo" class="brand-logo" />
    <div class="menu"></div>
    <div class="date-picker">
      <fa icon="fa-regular fa-calendar-days" />
      <span>{{ currentDate }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Header extends Vue {
  currentDate = "DD-MMM-YYYY";

  mounted() {
    this.manageDate();
  }

  manageDate(): void {
    const date = new Date();
    const formattedDate = date
      .toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
      .replace(/ /g, "-");
    this.currentDate = formattedDate;
  }
}
</script>

<style lang="scss">
.header {
  background: #14123d;
  color: #b1aeae;
  display: flex;
  align-items: center;
  min-height: 2.6rem;
  width: 100%;

  .brand-logo {
    width: 4rem;
    // height: 100%;
    padding: 0.3rem 0.8rem;
  }

  .date-picker {
    padding: 0.3rem 0.8rem;
    font-weight: 800;

    span {
      color: #ffffff;
      padding-left: 0.5rem;
    }
    .fa-calendar-days {
      color: #ffffff;
    }
  }

  .menu {
    flex: 1;
  }
}
</style>
