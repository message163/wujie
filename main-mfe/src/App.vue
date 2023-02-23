<template>
<div>
    <h1>主应用</h1>
    <div>
        <router-link to="/">vue3</router-link>
    </div>
    <div>
        <router-link to="/react">react</router-link>
    </div>
    <div>
        <router-view></router-view>
    </div>
</div>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue'
</script>

<style scoped lang='less'>
</style>