<template>
  <h1>人像检测框</h1>

  <el-switch
      v-model="SwitchValue1"
      size="large"
      active-text="开启"
      inactive-text="关闭"
  />
  <h1>检查提示</h1>
  <el-switch
      v-model="SwitchValue2"
      size="large"
      active-text="开启"
      inactive-text="关闭"
  />
  <div class="slider-demo-block">
    <span class="demonstration">属性一</span>
    <el-slider v-model="value1"/>
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">属性二</span>
    <el-slider v-model="value2"/>
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">属性三</span>
    <el-slider v-model="value3" :step="10" show-stops />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(0)
const SwitchValue1= ref(0)
const SwitchValue2= ref(0)
</script>
<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
.slider-demo-block .demonstration {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  line-height: 44px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}
.slider-demo-block .demonstration + .el-slider {
  flex: 0 0 70%;
}
</style>