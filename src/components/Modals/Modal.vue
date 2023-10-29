<template>
  <transition name="fade">
    <div v-if="show" class="modals">
      <div class="modals__backdrop" @click="closeModal()" />

      <div class="modals__dialog">
        <div class="modals__header" style="background: #0B1641;">
          <slot name="header" />
        </div>

        <div class="modals__body" style="background: linear-gradient(45deg, #0B1641 0%, #C70160 100%);">
          <slot name="body" />
        </div>

        <div class="modals__footer" style="background: #0B1641;">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modals",
  data() {
    return {
      show: false
    };
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    }
  }
};
</script>

<style scoped>
.modals {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1049;
}

.modals__backdrop {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.modals__dialog {
  background-color: #ffffff;
  position: relative;
  width: 50%;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  z-index: 2;
}

@media screen and (max-width: 992px) {
  .modals__dialog {
    width: 50%;
  }
}

.modals__close {
  width: 30px;
  height: 30px;
}

.modals__header {
  padding: 20px 20px 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.modals__body {
  padding: 10px 20px 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.modals__footer {
  padding: 10px 20px 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
