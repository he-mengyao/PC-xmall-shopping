<template>
  <div class="w mrt-20">
    <div class="detail br-10 flex border">
      <div class="pic">
        <div
          class="pic-panel center mrt-10 br-5 border"
          v-for="(item, index) in obj.productImageSmall"
          :key="index"
          @click="changebgc(item, index)"
          :class="{ click: index === num }"
        >
          <img :src="item" alt="" />
        </div>
      </div>
      <div class="product">
        <img :src="productImageBig" alt="" />
      </div>
      <div class="item">
        <div class="item-title f24">{{ obj.productName }}</div>
        <div class="flex_b a">
          <div class="sub f14">{{ obj.subTitle }}</div>
          <div class="price f24" style="height: 48px">
            {{ "￥" + Number(obj.salePrice).toFixed(2) }}
          </div>
        </div>
        <div class="line"></div>
        <div class="count f14 flex ai_c">
          数量
          <button
            class="reduce border center fw"
            @click="reduce"
            :class="{ disabled: input === 1 }"
          >
            -
          </button>
          <input type="text" v-model="input" @blur="blur" />
          <button class="increase border center fw" @click="increase">+</button>
        </div>
        <div class="line"></div>
        <div class="btn">
          <button
            class="add"
            @click="add(obj.productId)"
            style="width: 145px; height: 50px; margin-right: 15px"
          >
            加入购物车
          </button>
          <button
            class="look"
            @click="shop(obj.productId)"
            style="width: 145px; height: 50px"
          >
            现在购买
          </button>
        </div>
      </div>
    </div>
    <div class="imgsmall mrt-20 br-10 border hidden">
      <div class="panel-title">产品信息</div>
      <div class="imgsamll-item col-center" v-html="obj.detail"></div>
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
      productId: null,
      obj: {},
      num: 0,
      productImageBig: "",
      input: 1,
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get(`/api//goods/detail?productId=${this.productId}`)
        .then((res) => {
          if (res.data.data.code === 200) {
            this.obj = res.data.data.result;
            console.log(this.obj);
            this.productImageBig = this.obj.productImageBig;
          }
        })
        .catch((err) => {
          console.log(err, "请求失败");
        });
    },
    changebgc(item, index) {
      this.num = index;
      this.productImageBig = item;
    },
    reduce() {
      // console.log(this.input);
      if (this.input > 1) {
        this.input--;
      } else {
        this.input = 1;
      }
    },
    increase() {
      if (this.input <= this.obj.limitNum) {
        this.input++;
      }
    },
    blur() {
      if (this.input === "") {
        this.input = 1;
      }
    },
    add(productId) {
      // console.log(productId);
    },
    shop(productId) {},
  },
  mounted() {
    this.productId = this.$route.query.productId;
    this.getData();
  },
  computed: {},
  watch: {
    input(val, oldval) {
      if (!/(^[1-9]\d*$)/.test(val)) {
        this.input = "";
      }
      if (this.input > this.obj.limitNum) {
        this.$message({
          duration: 1000,
          type: "error",
          message: "您输入的数量超过库存",
        });
        setTimeout(() => {
          this.input = oldval;
        }, 300);
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.detail {
  background-color: #fff;
  height: 562px;
  padding: 60px;
  .pic-panel {
    height: 80px;
    width: 80px;
    padding: 10px;
    img {
      height: 54px;
      width: 54px;
    }
  }
  .product {
    width: 440px;
    height: 440px;
    margin: 0 20px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .item {
    width: 450px;
    padding: 10px;
  }
  .count {
    color: #8d8d8d;
    button {
      width: 25px;
      height: 25px;
      border-radius: 100%;
      margin: 0 15px;
      &:hover {
        box-shadow: inset 0px 8px 20px rgba(0, 0, 0, 0.01);
        color: #8d8d8d;
      }
    }
    input {
      border: 0;
      width: 30px;
      text-align: center;
    }
    .reduce {
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    }
    .increase {
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    }
  }
}
.imgsamll-item {
  width: 100%;
  background-color: #fff;
}
.click {
  border: 3px solid rgba(0, 0, 0, 0.2);
}
.disabled {
  &:hover {
    cursor: not-allowed;
  }
}
</style>