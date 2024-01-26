<script setup>
import ImagePart from "@/components/ImagePart.vue";
</script>

<template>
  <div class="OutputContainer">
    <el-space wrap>
      <el-card class="box-card" style="width: 250px">
        <template #header>
          <div class="card-header" style="display: flex;justify-content: center">
            <span>综合检测结果</span>
          </div>
        </template>
        <div>
          <ImagePart></ImagePart>
        </div>
      </el-card>
    </el-space>
  </div>
</template>

<style scoped>
.OutputContainer{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>