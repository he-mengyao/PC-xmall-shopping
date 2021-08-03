<template>
  <div class="hots mrt-35 br-10 border">
    <div class="panel-title">热门商品</div>
    <div class="flex hots-item">
      <div
        class="col-center flex_1 move btnhover"
        v-for="(item, index) in this.datalist.panelContents"
        :key="index"
        @click="look(item)"
      >
        <img :src="item.productImageBig" alt="" />
        <div class="title f16">{{ item.productName }}</div>
        <div class="sub f12">{{ item.subTitle }}</div>
        <div class="col-center height-35">
          <div class="price f18 fw center">
            {{ "￥" + Number(item.salePrice).toFixed(2) }}
          </div>
          <div class="btn">
            <button class="look" @click.stop="look(item)">查看详情</button>
            <button class="add" @click="add(item)">加入购物车</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    datalist: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    look(item) {
      this.$router.push({
        path: "/detail",
        query: {
          productId: item.productId,
        },
      });
      // console.log(item.productId);
    },
    add(id) {
      console.log("加入购物车");
    },
  },
  mounted() {
    // console.log(this.datalist.panelContents);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.hots {
  height: 492px;
  background-color: #fff;
  .hots-item {
    height: 430px;
    background-color: #fff;
    overflow: hidden;
    img {
      width: 206px;
      height: 206px;
    }
    .btn {
      display: none;
    }
  }
}
.btnhover {
  &:hover {
    .price {
      display: none;
    }
    .btn {
      display: block;
    }
  }
}
</style>