<template>
  <div class="w all">
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
    <div class="body">
      <div class="floors wrap flex">
        <div
          class="good-item border col-center btnhover move"
          v-for="(item1, index1) in data"
          :key="index1"
          @click.stop="look(item1)"
        >
          <img :src="item1.productImageBig" alt="" />
          <div class="title">{{ item1.productName }}</div>
          <div class="sub">{{ item1.subTitle }}</div>
          <div class="col-center height-35">
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
    <div class="block mrt-35 flex_r">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[8, 20, 40, 80]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
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
    handleSizeChange(val) {
      this.size = val;
      // console.log(`每页 ${val} 条`);
      this.getData();
    },
    handleCurrentChange(val) {
      this.page = val;
      // console.log(`当前页: ${val}`);
      this.getData();
    },
  },
  mounted() {
    this.getData();
  },
  computed: {},
  watch: {
    priceLte(val) {
      if (!/(^[1-9]\d*$)/.test(val)) {
        this.priceLte = "";
      }
    },
    priceGt(val) {
      if (!/(^[1-9]\d*$)/.test(val)) {
        this.priceGt = "";
      }
    },
  },
};
</script>

<style lang='scss' scoped>
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