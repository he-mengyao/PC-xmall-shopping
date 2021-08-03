<template>
  <div class="bg mrt-20 br-10">
    <el-carousel arrow="never" trigger="click">
      <el-carousel-item
        v-for="(item, index) in this.datalist.panelContents"
        :key="index"
        class="br-10"
        @click.stop="look(item)"
      >
        <!-- <h3>{{ item }}</h3> -->
        <img
          :src="item.picUrl"
          alt=""
          class="pa"
          style="width: 100%; height: 100%"
          @click.stop="look(item)"
        />
        <img
          :src="item.picUrl2"
          alt=""
          class="pa"
          style="width: 100%; height: 100%"
          @click.stop="look(item)"
        />
        <img
          :src="item.picUrl3"
          alt=""
          class="pa"
          style="width: 100%; height: 100%"
          @click.stop="look(item)"
        />
      </el-carousel-item>
    </el-carousel>
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
      // console.log(item);
      this.$router.push({
        path: "/detail",
        query: {
          productId: item.productId,
        },
      });
      // console.log(item.productId);
    },
  },
  mounted() {
    // console.log(this.datalist.panelContents);
    this.datalist.panelContents.map((item) => {
      if (item.picUrl2 === "") {
        item.picUrl2 = item.picUrl;
      }
      if (item.picUrl3 === "") {
        item.picUrl3 = item.picUrl;
      }
    });
    // console.log(this.datalist.panelContents);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.bg {
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
}
</style>