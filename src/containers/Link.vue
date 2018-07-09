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
          <mt-field label="网址" placeholder="网址" v-model="url" @change="changeType()"></mt-field>
        </div>
        <div class="page-button">
          <mt-button type="primary" class="btn" size="large" @click="fetchLink()">转换链接</mt-button>
        </div>
        <div class="qrcode" v-if="getQrcode">
          <p>
            <span>短链接：</span><a :href="getLink">{{getLink}}</a>
          </p>
          <img :src="getQrcode" alt="">
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
      savePath: 'E:/cjd/images'
    }
  },
  computed: {
    ...mapGetters({
      getLink: 'getLink',
      getQrcode: 'getQrcode'
    })
  },
  methods: {
    fetchLink () {
      this.$store.dispatch('fetchLink', {url: this.url})
    },
    changeType () {
      this.https = this.url.indexOf('https') > -1 && true
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
