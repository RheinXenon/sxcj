<script setup>
import Header from '@/components/Header.vue'
import Aside from "@/components/Aside.vue"
import Upload from "./components/Upload.vue"
import Test from "./components/Test.vue"
import Select1 from "./components/Select1.vue"
import SliderAndButton from "./components/SliderAndButton.vue"
import VideoPart from "@/components/VideoPart.vue";
import ImagePart from "@/components/ImagePart.vue";
import Output1 from "@/components/Output1.vue";
import Carousel from "@/components/Carousel.vue";
import Output2 from "@/components/Output2.vue";
</script>

<template>
  <div>
    <el-container>
      <el-header class="el-Header">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside></Aside>
          <Carousel></Carousel>
        </el-aside>
        <el-container>
          <el-main>
            <el-row :gutter="20">
              <el-col :span="6">
                <Upload></Upload>
                <Select1></Select1>
                <el-divider></el-divider>
                <SliderAndButton></SliderAndButton>
                <el-divider></el-divider>
              </el-col>
              <el-col :span="18" >
<!--                <ImagePart></ImagePart>-->
                <VideoPart></VideoPart>
                <Output1></Output1>
                <Output2></Output2>

              </el-col>
            </el-row>
          </el-main>
<!--          <el-footer>划到页面底部啦！</el-footer>-->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.el-Header{
  background-color: black;
}
</style>
