<template>
  <div class="about">
    <WujieVue :props="{name:'我是个憨批'}" width="100%" height="100%" name="react" :url="url" ></WujieVue>
  </div>
</template>

<script setup lang="ts">
import wujie from 'wujie-vue3'
const {bus} = wujie
bus.$on('send',(e:string)=>{
    console.log(e)
})
 const url = 'http://127.0.0.1:5175/'
 
</script>