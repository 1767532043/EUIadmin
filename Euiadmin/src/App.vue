<template>
  <div>
    <div id="app">
      <router-view v-if="!$route.meta.inside" />
      <el-container id="aside" v-if="$route.meta.inside">
        <AsideSpace :menu_state="aside_state" />
        <el-container>
          <el-header
            :height="head_height"
            :style="{
              backgroundColor: web_setting.head_background_color, 
              minWidth: '800px',
            }"
          >
            <HeadSpace @aside_state="change_state" />
          </el-header>
          <div id="tab">
            <Breadcrumb :vist_data="vist_data"
              v-if="tabs_state"
              :style="{ backgroundColor: web_setting.main_background_color }"
            />
          </div>
          <el-main
            id="main"
            :style="{ backgroundColor: web_setting.main_background_color }"
          >
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    HeadSpace: (resolve) => {
      require(["@/components/system/HeadSpace"], resolve);
    },//顶部菜单
    AsideSpace: (resolve) => {
      require(["@/components/system/AsideSpace"], resolve);
    },//左侧菜单
    Breadcrumb: (resolve) => {
      require(["@/components/system/Breadcrumb"], resolve);
    },//访问标签
  },
  data() {
    return {
      tab_data: [],
      aside_state: false,
      tabs_state: true,
      web_setting: JSON.parse(sessionStorage.getItem("web_setting")),
    };
  },
  methods: {
    change_state(state) {
      this.aside_state = state;
    },
  },
  mounted() {
    if (sessionStorage.getItem("web_setting") == null) {
      this.color_form = {
        aside_background_color: "#000000",
        aside_text_color: "#ffffff",
        aside_icon_color: "#ffffff",
        aside_active_text_color: "#67C23A",
        aside_title: "EuiAdmin",
        aside_small_title: "Eui",
        aside_title_text_color: "#ffffff",
        aside_title_back_color: "#67C23A",
        aside_title_height: 60,
        aside_width: 200,
        aside_small_width: 65,
        head_icon_color: "#606266",
        head_background_color: "#fff",
        head_text_color: "#606266",
        head_active_text_color: "#303133",
        head_height: 60,
        main_background_color: "#f2f6fc",
      };
      sessionStorage.setItem("web_setting", JSON.stringify(this.color_form));
      this.web_setting = JSON.parse(sessionStorage.getItem("web_setting"));
    }
  },
  watch: {
    $route() {
      this.tabs_state = false;
       setTimeout(() => {
        this.tabs_state = true;
      }, 5);
    },
  },
};
</script>
<style scoped>
#app {
  background-color: #f2f6fc;
  border-radius: 10px;
}
#tab{
  padding-top: 10px;
  padding-left: 20px;
  cursor: pointer;
  padding-bottom: 10px;
}
</style>

