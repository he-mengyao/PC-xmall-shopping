<template>
  <div>
    <headers></headers>
    <navs></navs>
    <router-view></router-view>
    <footers></footers>
  </div>
</template>

<script>
import Footers from "../../components/footers/Footers.vue";
import Headers from "../../components/headers/Headers.vue";
import Navs from "../../components/navs/Navs.vue";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: { Footers, Headers, Navs },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>