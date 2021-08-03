<template>
  <div class="nav">
    <div class="w flex ai_c f14">
      <div class="flex" v-for="(item, index) in arr" :key="index">
        <div>·</div>
        <div :class="{ click: num === index }" @click="click(item, index)">
          {{ item.title }}
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
      num: 0,
      arr: [
        {
          title: "首页",
          url: "/",
        },
        {
          title: "全部",
          url: "/all",
        },
        {
          title: "捐赠名单",
          url: "/",
        },
        {
          title: "后台管理系统",
          url: "/",
        },
        {
          title: "XMall小程序",
          url: "/",
        },
        {
          title: "XPay支付系统",
          url: "/",
        },
        {
          title: "XBoot开发平台",
          url: "/",
        },
        {
          title: "宣传视频",
          url: "/",
        },
        {
          title: "Github",
          url: "/",
        },
        {
          title: "商用授权",
          url: "/",
        },
      ],
    };
  },
  components: {},
  methods: {
    click(item, index) {
      this.num = index;
      if (item.url !== this.$route.path) {
        this.$router.push(item.url);
      }
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.nav {
  height: 90px;
  background-color: #fff;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
  .w {
    height: 90px;
    div {
      color: #666;
      &:nth-child(odd) {
        margin: 0 10px;
      }
      &:nth-child(even):hover {
        color: royalblue;
        cursor: pointer;
      }
    }
  }
}
.click {
  font-weight: 700;
}
</style>