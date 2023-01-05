<template>
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="name"
        name="name"
        :rules="[{ required: true, message: 'Please input your name!' }]"
      >
        <a-input v-model:value="formState.name" />
      </a-form-item>
  
      <a-form-item
        label="age"
        name="age"
        :rules="[{ required: true, message: 'Please input your age!' }]"
      >
        <a-input v-model:value="formState.age" />
      </a-form-item>

      <a-form-item
        label="address"
        name="address"
        :rules="[{ required: true, message: 'Please input your address!' }]"
      >
        <a-input v-model:value="formState.address" />
      </a-form-item>
  
      <!-- <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item> -->
  
      <!-- <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">提交</a-button>
      </a-form-item> -->
    </a-form>
  </template>
  <script>
  import { defineComponent, reactive } from 'vue';
  import { useCounterStore } from '../store/counter'
  export default defineComponent({
    emits: ["get_info"],
    setup() {
      const formState = reactive({
        name: '',
        age: '',
        address: '',
        // remember: true,
      });
      const counter = useCounterStore()
      counter.$patch({ 
        name: formState.name,
        age : formState.age,
        address : formState.address
     })
    //   counter.name = formState.name
    //   counter.age = formState.age
    //   counter.address = formState.address
      console.log(formState.name)
      const onFinish = values => {
        console.log('Success:', values);
      };
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
      const getinfo =() => {
        context.emit("get_info", formState.value);
      }
      return {
        formState,
        onFinish,
        onFinishFailed,
        counter,
        getinfo
      };
    },
  });
  </script>