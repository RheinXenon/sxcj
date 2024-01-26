<template>
  <div class="video1">
    <vue3-video-play
        v-bind="options"
        poster="https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/ironMan.jpg"
        />
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { ref } from "vue";
const options = reactive({
  // width: "500px", //播放器高度
  height: "300px", //播放器高度
  color: "#409eff", //主题色
  currentTime: 0,
  speed: true, //关闭进度条拖动
  title: "", //视频名称
  src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4", //视频源
  // src: "localVideoUrl",

});

import localVideo from "@/resources/video1.mp4";
const localVideoUrl = ref(localVideo);
</script>
<style scoped>
.video1{
  display: flex;
  justify-content: center;
}
</style>