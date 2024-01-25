<template>
  <div>
    <el-dialog
        title="视频预览"
        :visible.sync="show"
        width="80%"
        append-to-body
        :before-close="handleCloseVideo"
    >
      <video
          v-if="videoUrl && show"
          ref="videoRef"
          autoplay
          controls
          preload="auto"
          style="width: 100%;height: 60vh;object-fit: contain;"
          :src="videoUrl"
      />
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      videoUrl: "https://www.bilibili.com/video/BV1s5411v7Pz"
    }
  },
  methods: {
    handleCloseVideo () {
      this.show = false
      this.$refs.videoRef.pause()
    },
    open (url) {
      this.show = true
      this.videoUrl = url
    }
  }
}
</script>
<style lang="scss" scoped>
</style>