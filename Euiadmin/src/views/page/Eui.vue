<template>
  <el-container style="min-height: 100vh">
    <el-header id="head">
      <HeadMenu />
    </el-header>
    <el-main id="main">
      <TopSpace />
      <DataSpace />
      <ShowSpace/>
    </el-main>
    <el-footer>
      <FootSpace/>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  components: {
    HeadMenu: (resolve) => {
      require(["@/components/page/eui/HeadMenu"], resolve);
    },
    TopSpace: (resolve) => {
      require(["@/components/page/eui/TopSpace"], resolve);
    },
    DataSpace: (resolve) => {
      require(["@/components/page/eui/DataSpace"], resolve);
    },
    ShowSpace: (resolve) => {
      require(["@/components/page/eui/ShowSpace"], resolve);
    },
    FootSpace: (resolve) => {
      require(["@/components/page/eui/FootSpace"], resolve);
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
#head {
  background-color: #000000;
}
#main {
    height: 70vh;
  padding: 0px;
  background-color: #fff;
  overflow: auto;
}
</style>