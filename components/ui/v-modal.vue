<style>
.modal {
  padding-right: 17px;
  display: none;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  overflow-x: auto;
  overflow-y: scroll;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
}

.modal.show {
  display: block;
}
</style>

<template>
  <div class="modal" :class="{'show': show }">
    <slot @close="show = false"></slot>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false
  })
};
</script>