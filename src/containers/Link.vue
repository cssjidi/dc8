<template>
  <div class="page">
    <div class="page-region">
      <div class="page-header">
        <div class="page-button">
          <mt-cell title="是否https" class="txt-left">
            <mt-switch v-model="https" class="no-margin"></mt-switch>
          </mt-cell>
        </div>
        <div class="page-button">
          <mt-field label="网址" placeholder="网址" v-model="url"></mt-field>
        </div>
        <div class="page-button">
          <mt-button type="primary" class="btn" size="large" @click="getImage()">转换链接</mt-button>
        </div>
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
      https: false,
      url: 'https://www.autohome.com.cn/drive/201807/919252.html#pvareaid=3311301',
      isSelected: false,
      savePath: 'E:/cjd/images'
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
  .txt-left{
    text-align: left;
  }
  .no-margin{
    margin: 0;
  }
</style>
