<template>
  <view class="my-search-container" :style="{'background-color':bgColor}" @click="searchBoxHandler">
    <view class="my-search-box" :style="{'border-radius':radius + 'px'}">
      <uni-icons type="search" size="17"></uni-icons>
      <text class="placeholder">搜索</text>
    </view>
  </view>
</template>

<script>
  export default {
    name: "my-search",
    props: {
      // 背景颜色
      bgColor: {
        type: String,
        default: '#c00000'
      },
      //原角尺寸 
      radius: {
        type: Number,
        default: 17
      }
    },
    data() {
      return {

      };
    },
    methods: {
      searchBoxHandler() {
        this.$emit('click')
      }
    }

  }
</script>

<style lang="scss">
  .my-search-container {
    height: 50px;
    // background-color: #C00000;
    display: flex;
    align-items: center;
    padding: 0 15px;

    .my-search-box {
      height: 36px;
      background-color: #ffffff;
      // border-radius: 15px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .placeholder {
        font-size: 15px;
        margin-left: 5px;
      }
    }
  }
</style>
