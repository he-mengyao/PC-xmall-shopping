<template>
  <div>
    <!-- 循环板块-->
    <div
      class="panel br-10 mrt-35 border"
      v-for="(item, index) in datalist"
      :key="index"
    >
      <div class="panel-title">{{ item.name }}</div>
      <!-- 每个板块里面的图片循环 -->
      <div class="floors wrap flex">
        <div
          class="good-item col-center btnhover"
          v-for="(item1, index1) in item.panelContents"
          :key="index1"
          :class="{ dubble: index1 === 0, move: index1 !== 0 }"
          @click.stop="look(item1)"
        >
          <div :class="{ mask: index1 === 0, dubble: index1 === 0 }"></div>
          <img :src="item1.picUrl" alt="" />
          <div v-if="index1 !== 0" class="title">{{ item1.productName }}</div>
          <div v-if="index1 !== 0" class="sub">{{ item1.subTitle }}</div>
          <div class="col-center height-35" v-if="index1 !== 0">
            <div class="price">
              {{ "￥" + item1.salePrice.toFixed(2) }}
            </div>
            <div class="flex btn">
              <button class="look" @click.stop="look(item1)">查看详情</button>
              <button class="add" @click="add(item1)">加入购物车</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    datalist: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    look(item1) {
      // console.log(item1);
      this.$router.push({
        path: "/detail",
        query: {
          productId: item1.productId,
        },
      });
      // console.log(item.productId);
    },
    add(id) {
      console.log("加入购物车");
    },
  },
  mounted() {
    // console.log(this.datalist);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.panel {
  background-color: #fff;
  height: 922px;
  .floors {
    height: 860px;
    overflow: hidden;
    .good-item {
      width: 304.5px;
      height: 430px;
      background-color: #fff;
      img {
        width: 206px;
        height: 206px;
      }
    }
  }
}
.dubble {
  width: 609px !important;
  height: 430px !important;
  img {
    width: 100% !important;
    height: 100% !important;
  }
}
.btnhover {
  .btn {
    display: none;
  }
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