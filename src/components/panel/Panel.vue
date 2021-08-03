<template>
  <div class="mrt-35 flex panel br-10">
    <div
      class="item pr"
      v-for="(item, index) in this.datalist.panelContents"
      :key="index"
      @click.stop="look(item)"
    >
      <div class="mask"></div>
      <img :src="item.picUrl" alt="" />
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
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.panel {
  width: 100%;
  height: 200px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  overflow: hidden;
  .item {
    height: 200px;
    width: 306px;
    img {
      height: 100%;
      width: 100%;
      border-right: 1px solid #dcdcdc;
    }
  }
}
</style>