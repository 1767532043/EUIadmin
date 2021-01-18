<template>
<!-- 左侧菜单 -->
  <el-aside
    :width="web_setting.aside_width + 'px'"
    :style="{ backgroundColor: web_setting.aside_background_color }"
  >
    <div
      :style="{
        height: web_setting.aside_title_height + 'px',
        color: web_setting.aside_title_text_color,
        backgroundColor: web_setting.aside_title_back_color,
      }"
      align="center"
    >
      <p style="padding-top: 20px">
        {{ web_setting.aside_title }}
      </p>
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      id="aside"
      @select="change_aside_menu"
      :default-active="activie_index"
      :default-openeds="0"
      :unique-opened="true"
      :background-color="web_setting.aside_background_color"
      :text-color="web_setting.aside_text_color"
      :active-text-color="web_setting.aside_active_text_color"
      :collapse="menu_state"
    >
      <el-submenu
        v-for="(menu, index) in menu_data"
        :key="index"
        :index="index"
        v-show="menu.name_show"
      >
        <template slot="title">
          <i
            :class="menu.icon"
            :style="{ color: web_setting.aside_text_color, marginRight: '10px' }"
          ></i>
          <span>{{ menu.name }}</span>
        </template>
        <el-menu-item
          v-for="(menu_item, i) in menu_data[index].menu_item"
          :key="i"
          :index="menu_item.path"
          v-show="menu_item.label_show"
        >
          <i
            :class="menu_item.label_icon"
            v-show="menu_item.path == activie_index"
          />
          <i
            :class="menu_item.label_icon"
            :style="{ color: web_setting.aside_text_color }"
            v-show="menu_item.path != activie_index"
          /><span style="margin-left: 10px">{{
            menu_item.label
          }}</span></el-menu-item
        >
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  props: ["menu_state"],
  data() {
    return {
      menu_data: JSON.parse(
        sessionStorage.getItem('aslide_menu')
      ),//左侧菜单数据
      activie_index: "/home",//默认活动菜单
      web_setting: JSON.parse(sessionStorage.getItem("web_setting")),//网站设置信息
    };
  },
  methods: {
    change_aside_menu(index) {//点击左侧菜单时活动菜单切换和跳转
      this.activie_index = index;
      this.$router.push(this.activie_index);
    },
  },
  watch: {
    menu_state() {//菜单放大缩小时的宽度和logo切换
      // console.log(this.web_setting);
      const menu_data = JSON.parse(sessionStorage.getItem("web_setting"));
      if (this.menu_state) {//缩小时状态
        this.web_setting.aside_width = menu_data.aside_small_width;
        this.web_setting.aside_title = menu_data.aside_small_title;
      } else {//展开状态
        this.web_setting.aside_width = menu_data.aside_width;
        this.web_setting.aside_title = menu_data.aside_title;
      }
    },
  },
};
</script>
<style scoped>
.el-menu {
  /* 去除右侧边框线 */
  border-right: 0 !important;
}
#aside::-webkit-scrollbar {
  display: none;
}
#aside {
  height: 90vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>