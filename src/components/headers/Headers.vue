<template>
  <div class="header">
    <div class="w flex ai_c flex_b">
      <div class="logo center">M</div>
      <div class="flex">
        <div class="search center">
          <el-input v-model="input" placeholder="请输入商品信息"></el-input>
        </div>
        <div class="nav f14 cw flex ai_c">
          <div>全部商品</div>
          <div>捐赠</div>
          <div class="line"></div>
        </div>
        <div class="user center">
          <i class="iconfont icon-yonghu"></i>
          <i class="iconfont icon-gouwuche3"></i>
          <div class="count br center f12">0</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      input: "",
    };
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.header {
  height: 100px;
  background-color: #050505;
  .w {
    height: 100px;
  }
  .logo {
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 100%;
    font-size: 24px;
  }
}
.search {
  margin-right: 35px;
  .el-input__inner {
    width: 300px;
    height: 36px;
  }
}
.nav {
  div {
    margin-right: 45px;
  }
  .line {
    width: 1px;
    height: 15px;
    background-color: #373737;
  }
}
.user {
  .icon-yonghu {
    margin-right: 30px;
  }
  i:nth-child(n-2) {
    color: #999999;
    font-size: 20px;
  }
  .count {
    height: 20px;
    width: 20px;
    background-color: #999999;
    color: #fff;
    margin-left: 5px;
  }
}
</style>