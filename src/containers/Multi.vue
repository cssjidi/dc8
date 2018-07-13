<script src="../../../spider/spider.js"></script>
<template>
  <div class="page">
    <div class="page-region">
      <div class="page-header">
        <mt-field label="网址" placeholder="网址" v-model="baseUrl"></mt-field>
        <mt-field label="分页地址" placeholder="分页地址" type="text" v-model="pageUrl"></mt-field>
        <mt-field label="开始页数" placeholder="开始页数" type="number" v-model="startPage"></mt-field>
        <mt-field label="结束页数" placeholder="结束页数" type="number" v-model="endPage"></mt-field>
        <mt-field label="分页选择器" placeholder="分页选择器" type="text" v-model="selector"></mt-field>
        <mt-field label="内容页标题" placeholder="内容页标题" type="text" v-model="contentTitle"></mt-field>
        <mt-field label="内容页图片" placeholder="内容页图片" type="text" v-model="contentImage"></mt-field>
        <mt-field label="内容页内容" placeholder="内容页内容" type="text" rows="4" v-model="content"></mt-field>
        <mt-radio class="checklist"
          title="内容页是否分页"
          v-model="isPage"
          :options="options">
        </mt-radio>
        <mt-field label="内容页内容" placeholder="内容页分页选择器" type="text" v-show="parseInt(isPage, 10)"  rows="4" v-model="contentPage"></mt-field>
        <mt-button type="primary" size="large" @click="fetchPost()">确定</mt-button>
      </div>
      <div class="page-region-content">
        <div class="image-collection">
            <div v-for="(image,index) in getImages" :key="index" @click="selectImage(index)" :class="image.check ? 'selected' : ''">
              <span>
                <img :src="image.url"/>
              </span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      options: [
        {
          label: '是',
          value: '1'
        },
        {
          label: '否',
          value: '0'
        }
      ],
      value: '1',
      baseUrl: '',
      pageUrl: '',
      startPage: 1,
      endPage: 2,
      selector: '',
      contentTitle: '',
      contentImage: '',
      content: '',
      isPage: '1',
      contentPage: ''
    }
  },
  computed: {
    ...mapGetters({
      getImages: 'getImages'
    })
  },
  methods: {
    getImage () {
      this.$store.dispatch('getImage', {url: this.url})
    },
    fetchPost () {
      this.$socket.emit('user', 1234)
    },
    selectImage (index) {
      if (this.getImages[index].check) {
        this.getImages[index].check = false
      } else {
        this.getImages[index].check = true
      }
    },
    saveImage () {
      this.$store.dispatch('saveImage', {images: this.getImages, savePath: this.savePath})
    }
  }
}
</script>
<style>
.page-button{
  padding: 0 15px 15px;
}
.btn{
  margin-top:10px;
}
.checklist{
  text-align: left;
}
</style>
