<template>
  <div class="footer-container">
    <div class="share-links">
      <p>Share news options</p>
      <div class="share-options">
        <fa class="fa-brands" icon="fa-brands fa-square-whatsapp" />
        <fa class="fa-brands" icon="fa-brands fa-square-facebook" />
        <fa class="fa-brands" icon="fa-brands fa-square-twitter" />
      </div>
    </div>
    <div class="footer">
      <p>
        Made with <fa icon="fa-solid fa-heart" /> and
        <fa icon="fa-solid fa-hammer" /> by Vamsha News
      </p>
      <p class="copy-right">
        All rights reserved <fa icon="fa-regular fa-copyright" />
        <span> Vamsha News</span>
      </p>
      <div class="social-links">
        <fa class="fa-brands" icon="fa-brands fa-facebook-f" />
        <fa class="fa-brands" icon="fa-brands fa-twitter" />
        <fa class="fa-brands" icon="fa-brands fa-youtube" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Footer extends Vue {}
</script>

<style lang="scss">
.footer-container {
  .share-links {
    background: #efeeff;
    padding: 0.7rem;
    p {
      font-size: 1.3rem;
      font-weight: 600;
    }
    .fa-brands {
      font-size: 2.5rem;
    }
    .fa-square-facebook {
      color: #3b5998;
    }
    .fa-square-twitter {
      color: #00acee;
    }
    .fa-square-whatsapp {
      color: #25d366;
    }
  }
  .footer {
    direction: flex;
    background: #14123d;
    color: #b1aeae;
    font-weight: 800;
    padding: 0.7rem;
    line-height: 1.8rem;

    p {
      font-size: 1.2rem;

      .fa-heart {
        color: #ff0000;
      }

      .fa-hammer {
        color: #8f5746;
      }
    }

    .copy-right {
      font-size: 0.9rem;

      span {
        color: #ff0000;
      }
    }

    .social-links {
      font-size: 1.3rem;
      .fa-facebook-f {
        color: #6d98f5;
      }
      .fa-twitter {
        color: #71faf3;
      }
      .fa-youtube {
        color: #ff0000;
      }
    }
  }

  .fa-brands {
    padding: 0.5rem 0.7rem;
  }
}
</style>
