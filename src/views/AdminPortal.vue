<template>
  <div class="admin-portal">
    <form class="input-form">
      <div class="form-group">
        <div class="input-group">
          <label for="doc-id">Please Enter Document ID from Google Docs</label>
          <div class="input-action">
            <input
              id="doc-id"
              type="text"
              placeholder="Document ID"
              v-model="documentId"
              @click="inputAction()"
            />
            <div class="paste-button" id="prem" @click="pasteAction">
              <fa icon="fa-solid fa-paste" />
            </div>
          </div>
          <p class="error-message">
            {{ errorMessage }}
          </p>
        </div>
        <div class="button" @click="submitDocumentId()">Submit</div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class AdminPortal extends Vue {
  documentId = "";
  errorMessage = "";

  inputAction() {
    this.errorMessage = "";
  }

  submitDocumentId(): void {
    if (!this.documentId) {
      this.errorMessage = "Please Enter Document ID";
      return;
    }
  }

  pasteAction() {
    navigator.clipboard
      .readText()
      .then((cliptext: any) => (this.documentId = cliptext));
  }
}
</script>

<style lang="scss">
.admin-portal {
  .input-form {
    padding: 2rem;
    .form-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #14123d;
      font-weight: 600;

      .button,
      input,
      .paste-button {
        margin-top: 0.8rem;
        width: 100%;
        max-width: 20rem;
        padding: 0.1rem;
        border: 2px solid #04004e;

        cursor: pointer;

        &:hover {
          background: #14123d;
          color: #ffffff;
        }

        &::-webkit-input-placeholder {
          color: #14123d;
        }
      }
      .input-action {
        display: flex;
        align-items: center;
        justify-content: center;
        input {
          outline: none;
          height: 1.5rem;
          &:hover {
            background: none;
            color: #14123d;
          }
        }
        .paste-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.5rem;
          height: 1.5rem;
          border-left: none;
        }
      }
      .error-message {
        color: red;
        font-size: 0.8rem;
        padding-top: 0.2rem;
        min-height: 1.15rem;
      }
    }
  }
}
</style>
