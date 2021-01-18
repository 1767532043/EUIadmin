<template>
  <div align="center">
    <div>
      <div id="link">
        <p style="color: #606266">友情链接：</p>
      </div>
      <div v-for="(link, index) in friend_link" :key="index" id="link">
        <el-link :href="link.link" :type="link.type" target="_blank">{{ link.name }}</el-link>
      </div>
    </div>
    <div style="margin-top: 10px">
      <p style="color: #606266">{{ copy_right }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      friend_link: [
        {
          name: "Axios",
          type: "primary",
          link: "http://www.axios-js.com/",
        },
        {
          name: "vue-socket.io",
          type: "success",
          link: "https://www.npmjs.com/package/vue-socket.io",
        },
        {
          name: "Tinymce",
          type: "primary",
          link: "https://www.tiny.cloud/",
        },
        {
          name: "Echarts",
          type: "primary",
          link: "http://echarts.apache.org/zh/index.html",
        },
        {
          name: "Font Awesome",
          type: "success",
          link: "https://fontawesome.dashgame.com/",
        },
      ],
      copy_right: "黔ICP备19003936号-3",
    };
  },
};
</script>
<style scoped>
#link {
  display: inline-block;
  margin-left: 10px;
}
</style>