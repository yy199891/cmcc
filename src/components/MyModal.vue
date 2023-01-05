<template>
    <div>
      <a-button type="primary" @click="showModal">Add</a-button>
      <a-modal v-model:visible="visible" title="增加信息" @ok="handleOk">
        <MyFormVue></MyFormVue>
      </a-modal>
    </div>
  </template>
  <script>
  import { defineComponent, ref } from 'vue';
  import MyFormVue from './MyForm.vue';

  export default defineComponent({
    components: {
        MyFormVue,
    },
    setup() {
      const visible = ref(false);
      const showModal = () => {
        visible.value = true;
      };
      const handleOk = e => {
        console.log(e);
        visible.value = false;
      };
      return {
        visible,
        showModal,
        handleOk,
      };
    },
  });
  </script>