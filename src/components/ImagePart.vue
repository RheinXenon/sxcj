<template>
  <div class="demo-image">
    <el-image :src="localImageUrl" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import localImage from "@/resources/1.png";
const localImageUrl = ref(localImage);
</script>

<style scoped>
</style>
