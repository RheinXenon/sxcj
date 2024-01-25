<script setup>

</script>

<template>
  <div class="OutputContainer">
    <el-space wrap>
      <el-card v-for="i in 2" :key="i" class="box-card" style="width: 250px">
        <template #header>
          <div class="card-header">
            <span>检测项</span>
            <el-button class="button" text>鉴定结果</el-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
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