<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsInfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.imgUrl">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class="mui-ellipsis">
              <span>发表时间: {{ item.publishTime | dateFormat }}</span>
              <span>点击: {{ item.clicks }}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {Toast } from 'mint-ui'
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$axios
        .get("/getNewsList")
        .then(result => {
     
    
          if (Object.keys(result.data) != 0) {
            this.newsList = result.data;
          } else {
            
            Toast({
              message: "加载失败",
              duration: 1000
            });
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
.mui-table-view {
  h1 {
    font-size: 14px;
  }
  .mui-ellipsis {
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>
