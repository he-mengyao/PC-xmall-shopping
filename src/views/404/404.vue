<template>
  <div class="w">
    <div class="nav left-center f12">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="blue-hover"
        @click="clickNav(item, index)"
        :class="{ blue: num === index }"
      >
        {{ item.title }}
      </div>
      <input
        type="text"
        placeholder="价格"
        class="br-5 border"
        v-model="priceGt"
      />&nbsp;-&nbsp;
      <input
        type="text"
        placeholder="价格"
        class="br-5 border"
        v-model="priceLte"
      />
      <button
        class="add"
        style="width: 80px; height: 30px; margin-left: 10px"
        @click="search"
      >
        确定
      </button>
    </div>
    <div class="col-center error">
      <img src="../../assets/error.png" alt="" />
      <div class="f30 mrt-35">抱歉出错啦</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      list: [
        {
          title: "综合排序",
          sort: 0,
        },
        {
          title: "价格从低到高",
          sort: 1,
        },
        {
          title: "价格从高到低",
          sort: -1,
        },
      ],
      num: 0,
      page: 1,
      size: 8,
      data: [],
      n: 1,
      total: 0,
      sort: "",
      priceGt: "",
      priceLte: "",
    };
  },
  components: {},
  methods: {
    search() {
      this.getData();
    },
    clickNav(item, index) {
      this.num = index;
      this.sort = item.sort;
      this.getData();
    },
    getData() {
      if (this.priceGt === "" || this.priceLte === "") {
        axios
          .get(
            `/api/goods/allGoods?page=${this.page}&size=${this.size}&sort=${this.sort}`
          )
          .then((res) => {
            if (res.data.code === 200) {
              this.data = res.data.data;
              this.total = res.data.total;
              // console.log(res.data);
            }
          })
          .catch((err) => {
            console.log(err, "请求失败");
          });
      } else {
        axios
          .get(
            `/api/goods/allGoods?page=${this.page}&size=${this.size}&sort=${this.sort}&priceGt=${this.priceGt}&priceLte=${this.priceLte}`
          )
          .then((res) => {
            if (res.data.code === 200) {
              this.data = res.data.data;
              this.total = res.data.data.length;
              // console.log(res.data);
            }
          })
          .catch((err) => {
            console.log(err, "请求失败");
          });
      }
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.error {
  padding: 60px;
  color: #666;
}
.nav {
  height: 60px;
  color: #9f9f9f;
  div {
    margin: 0 15px;
  }
  input {
    width: 80px;
    height: 30px;
    background-color: #ededed;
    text-align: center;
    &::placeholder {
      color: #bebebe;
      text-align: center;
    }
  }
}
</style>