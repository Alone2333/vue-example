<template>
  <div class="appContainer">
    <!-- 顶部 Header区域 -->
    <mt-header fixed title="Vue项目练习"></mt-header>

    <!-- 中间的路由 router-view 区域 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部 Tabbar区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" v-if="false"></span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
// 按需导入Toast组件
export default {};
</script>

<style scoped>
.appContainer {
  margin-top: 40px;
  margin-bottom: 50px;
  overflow-x: hidden;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-ective,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
