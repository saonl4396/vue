<template>
  <div id="app">
    
    <h3>测试输入框</h3>
    
    <UcInput />
    <uc-input v-model="ipt"></uc-input>
    <uc-input v-model="ipt2" type="password" label="密 码"></uc-input>
    
    
  </div>
</template>

<script>
import UcInput from '../components/input/uc-input'
export default {
  name: 'App',
  data(){
    return {
      ipt:'666',
      ipt2:'999',
    }
  },
  components: {
    UcInput
  },
  methods:{
    show(ev){
      console.log(ev)
    }
  }
}
</script>

<style>

</style>
