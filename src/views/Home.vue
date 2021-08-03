<template>
  <div class="w">
    <focus v-if="datalist" :datalist="datalist[0]"></focus>
    <panel v-if="datalist" :datalist="datalist[1]"></panel>
    <hots v-if="datalist" :datalist="datalist[2]"></hots>
    <panelbd v-if="datalist" :datalist="panel"></panelbd>
    <panel v-if="datalist" :datalist="datalist[6]"></panel>
  </div>
</template>

<script>
import Focus from "../components/focus/Focus.vue";
import axios from "axios";
import Panel from "../components/panel/Panel.vue";
import Hots from "../components/hots/Hots.vue";
import Panelbd from "../components/panelbd/Panelbd.vue";
export default {
  name: "",
  props: {},
  data() {
    return {
      datalist: null,
      panel: null,
      data: null,
    };
  },
  components: { Focus, Panel, Hots, Panelbd },
  methods: {
    getData() {
      axios
        .get("/api/goods/home")
        .then((res) => {
          if (res.data.code === 200) {
            this.datalist = res.data.data;
            this.panel = this.datalist.slice(3, 6);
            // console.log(this.datalist);
          } else {
            this.$message.error(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err, "请求失败");
        });
    },
  },
  mounted() {
    this.getData();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>