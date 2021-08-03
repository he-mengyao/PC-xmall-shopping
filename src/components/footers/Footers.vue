<template>
  <div class="footer mrt-35">
    <div class="w c-96 f12">
      <div class="serve flex flex_b">
        <div class="fl flex">
          <div class="fl-item">
            <div class="c-64">订单服务</div>
            <div>购买指南</div>
            <div>支付方式</div>
            <div>送货政策</div>
          </div>
          <div class="fl-item">
            <div class="c-64">服务支持</div>
            <div>官方开源</div>
            <div>项目前端</div>
            <div>项目后端</div>
          </div>
          <div class="fl-item">
            <div class="c-64">自助服务</div>
            <div>个人博客</div>
            <div>个人简介</div>
            <div>送货政策</div>
          </div>
          <div class="fl-item">
            <div class="c-64">其他项目</div>
            <div>XPay支付系统</div>
            <div>数据共享</div>
            <div>待开发...</div>
          </div>
          <div class="fl-item">
            <div class="c-64">友情链接</div>
            <div>宇Fcccc</div>
            <div>Smartisan</div>
            <div>Vue</div>
          </div>
          <div class="fl-item">
            <div class="c-64">关注我吧</div>
            <div>腾讯QQ</div>
            <div>新浪微博</div>
            <div>官方邮箱</div>
          </div>
        </div>
        <div class="fr flex col ai_e">
          <div class="c-64 f28">1012139570</div>
          <div class="c-db">周一至周日10:00- -23:00 (限Starrer或捐赠</div>
          <div class="c-db">人联系)</div>
          <el-button class="online-serve center">在线帮助</el-button>
        </div>
      </div>
      <div class="copyright flex">
        Copyright ©2017, exrick.cn Co., Ltd. All Rights
        Reserved.本网站设计内容大部分属锤子科技
        <div class="line"></div>
        <div class="blue cursor">法律声明</div>
        <div class="line"></div>
        <div class="blue cursor">隐私条款</div>
        <div class="line"></div>
        <div class="blue cursor">开发者中心</div>
      </div>
      <div class="icp c-db">
        蜀ICP备16030308号-1&nbsp;&nbsp;&nbsp;&nbsp;蜀ICP证16030308号
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.footer {
  height: 350px;
  background-color: #fff;
  .w {
    padding: 50px 0;
    .serve {
      padding: 30px 0;
      border-bottom: 1px solid #e6e6e6;
      .fl-item {
        width: 150px;
        div {
          height: 30px;
          cursor: pointer;
        }
      }
      .fr {
        .online-serve {
          color: #587ad2;
          height: 35px !important;
          width: 120px;
          margin-top: 20px;
          border: 1px solid #e6e6e6;
          &:hover {
            background-color: #f2f2f2;
          }
        }
      }
    }
    .copyright {
      margin-top: 40px;
      .line {
        width: 1px;
        height: 12px;
        background-color: #c3c3c3;
        margin: 3px 10px 0;
      }
    }
    .icp {
      margin-top: 10px;
    }
  }
}
</style>