<template>
  <div>
    <div id="logo" align="center">
      <p id="logo_title">{{ logo_title }}</p>
    </div>
    <el-menu
      default-active="/"
      mode="horizontal"
      @select="handleSelect"
      background-color="#000000"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="float: left"
    >
      <el-menu-item
        v-for="(menu, index) in head_menu"
        :key="index"
        :index="menu.path"
      >
        <i :class="menu.icon" style="margin-right: 10px;color:#fff" /><span>{{
          menu.title
        }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logo_title: "EuiAdmin",
      head_menu: [
        {
          icon: "fa fa-home",
          title: "主页",
          path: "/",
        },
        {
          icon: "fa fa-font",
          title: "后台演示",
          path: "/admin",
        },
        {
          icon: "fa fa-book",
          title: "开发手册",
          path: "/menual",
        },
      ],
    };
  },
};
</script>
<style scoped>
.el-menu {
  /* 去除底部边框线 */
  border-bottom: 0 !important;
}
#logo {
  float: left;
  width: 200px;
  height: 60px;
  background-color: rgba(0, 0, 255, 0);
  color: #ffffff;
}
#logo_title {
  font-size: 140%;
  padding-top: 10px;
}
</style>