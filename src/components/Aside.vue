<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
          active-text-color="#ffd04b"
          background-color="#27408B"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><IconMenu /></el-icon>
            <span>我的工作台</span>
          </template>
          <el-menu-item-group title="分组1">
            <el-menu-item index="1-1">项目1</el-menu-item>
            <el-menu-item index="1-2">项目2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">项目3</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>可拓展项</template>
            <el-menu-item index="1-4-1">项目4</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><Search /></el-icon>
          <span>在线音视图伪造核验</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><Cloudy /></el-icon>
          <span>云端服务管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><VideoCamera /></el-icon>
          <span>流式媒体管理</span>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon><ChromeFilled/></el-icon>
          <span>插件管理</span>
        </el-menu-item>
        <el-menu-item index="6">
          <el-icon><QuestionFilled /></el-icon>
          <span>客服帮助</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    QuestionFilled,
    ChromeFilled,
    Cloudy,
    VideoCamera,
    Search,

} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>