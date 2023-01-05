import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { 
        name: '',
        age: '',
        address: '',
    }
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    // increment() {
    //   this.count++
    // },
  },
})