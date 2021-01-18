<template>
<!-- 登录页面 -->
  <div id="login">
    <div id="form_space">
      <div align="center">
        <h1>{{ login_title }}</h1>
        <p>{{ login_adress }}</p>
      </div>
      <div style="padding: 20px">
        <el-form ref="form" :model="login_form">
          <el-form-item>
            <el-input
              v-model="login_form.user_name"
              prefix-icon="el-icon-user"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="login_form.user_password"
              prefix-icon="el-icon-lock"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item align="center">
            <el-button type="primary" icon="el-icon-right" @click="login()"
              >登录</el-button
            >
          </el-form-item>
          <el-form-item>
            <el-link type="danger" style="float: left" @click="to('/register')"
              >注册</el-link
            >
            <el-link
              type="primary"
              style="float: right"
              @click="to('/forget/password')"
              >找回密码？</el-link
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
// import exios from "@/unit/axios/exios";
export default {
  data() {
    return {
      login_title: "EuiAdmin",
      login_adress: "EuiAdmin登录模板，极简超强的vue框架",
      login_form: {
        user_name: "EuiAdmin",
        user_password: "12346",
        user_label: "surper_admin",
      },
      remember_password: false,
    };
  },
  methods: {
    login() {
      // exios.post("vist/ip").then(() => {
        //已与网站进行交互，此链接会获取您的访问基本信息，实际使用请将链接换为你的登录链接
        this.$message.success("登录成功"); //登录提示
        sessionStorage.setItem('user_name',this.login_form.user_name)
        this.intial_aside_menu(); //设置菜单，你也可以通过请求得到的数据生成菜单实现鉴权
        
      // });
    },
    intial_aside_menu() {
      const aslide_menu = [
        {
          name: "主页",
          name_color: "#fff",
          icon: "fa fa-home",
          icon_color: "#fff",
          name_show: true,
          menu_item: [
            {
              path: "/home",
              label: "主页",
              label_color: "#fff",
              label_icon: "fa fa-home",
              label_icon_color: "#fff",
              label_show: true,
            },
          ],
        },
        {
          name: "EuiAdmin内置组件",
          name_color: "#fff",
          icon: "fa fa-briefcase",
          icon_color: "#fff",
          name_show: true,
          menu_item: [
            {
              path: "/eui/tinymce",
              label: "Tinymce富文本编辑器",
              label_color: "#fff",
              label_icon: "fa fa-text-width",
              label_icon_color: "#fff",
              label_show: true,
            },
            {
              path: "/eui/icon",
              label: "图标选择器",
              label_color: "#fff",
              label_icon: "fa fa-openid",
              label_icon_color: "#fff",
              label_show: true,
            },
          ],
        },
        {
          name: "EuiAdmin表格",
          name_color: "#fff",
          icon: "fa fa-table",
          icon_color: "#fff",
          name_show: true,
          menu_item: [
            {
              path: "/eui/table",
              label: "Eui表格",
              label_color: "#fff",
              label_icon: "fa fa-table",
              label_icon_color: "#fff",
              label_show: true,
            },
            {
              path: "/eui/table/out",
              label: "Eui表格导出excel",
              label_color: "#fff",
              label_icon: "fa fa-table",
              label_icon_color: "#fff",
              label_show: true,
            },
            {
              path: "/table/exios",
              label: "表格支持exios",
              label_color: "#fff",
              label_icon: "fa fa-table",
              label_icon_color: "#fff",
              label_show: true,
            },
          ],
        },
        {
          name: "Echarts图表",
          name_color: "#fff",
          icon: "fa fa-area-chart",
          icon_color: "#fff",
          name_show: true,
          menu_item: [
            {
              path: "/echarts/bar",
              label: "柱状图",
              label_color: "#fff",
              label_icon: "fa fa-bar-chart",
              label_icon_color: "#fff",
              label_show: true,
            },
            {
              path: "/echarts/line",
              label: "折线图",
              label_color: "#fff",
              label_icon: "fa fa-line-chart",
              label_icon_color: "#fff",
              label_show: true,
            },
            {
              path: "/echarts/map",
              label: "中国地图",
              label_color: "#fff",
              label_icon: "fa fa-map-marker",
              label_icon_color: "#fff",
              label_show: true,
            },
          ],
        },
        {
          name: "常用页面",
          name_color: "#fff",
          icon: "fa fa-clone",
          icon_color: "#fff",
          name_show: true,
          menu_item: [
            {
              path: "/page/eui",
              label: "Eui主页",
              label_color: "#fff",
              label_icon: "fa fa-list-alt",
              label_icon_color: "#fff",
              label_show: true,
            },
            {
              path: "/page/warning",
              label: "404",
              label_color: "#fff",
              label_icon: "fa fa-warning",
              label_icon_color: "#fff",
              label_show: true,
            },
            {
              path: "/page/error",
              label: "500",
              label_color: "#fff",
              label_icon: "fa fa-window-close",
              label_icon_color: "#fff",
              label_show: true,
            },
          ],
        },
        {
          name: "文章撰写系统",
          name_color: "#fff",
          icon: "fa fa-book",
          icon_color: "#fff",
          name_show: true,
          menu_item: [
            {
              path: "/article",
              label: "文章撰写",
              label_color: "#fff",
              label_icon: "fa fa-edit",
              label_icon_color: "#fff",
              label_show: true,
            },
            {
              path: "/article/label",
              label: "文章类别管理",
              label_color: "#fff",
              label_icon: "fa fa-flag",
              label_icon_color: "#fff",
              label_show: true,
            },
          ],
        },
        {
          name: "商品发布系统",
          name_color: "#fff",
          icon: "fa fa-shopping-cart",
          icon_color: "#fff",
          name_show: true,
          menu_item: [
            {
              path: "/apply/goods",
              label: "商品列表",
              label_color: "#fff",
              label_icon: "fa fa-list",
              label_icon_color: "#fff",
              label_show: true,
            },
            {
              path: "/apply/goods/release",
              label: "发布商品",
              label_color: "#fff",
              label_icon: "fa fa-edit",
              label_icon_color: "#fff",
              label_show: true,
            },
          ],
        },
        {
          name: "设置",
          name_color: "#fff",
          icon: "fa fa-cog",
          icon_color: "#fff",
          name_show: true,
          menu_item: [
            {
              path: "/setting/power",
              label: "权限管理",
              label_color: "#fff",
              label_icon: "fa fa-star-o",
              label_icon_color: "#fff",
              label_show: true,
            },
            {
              path: "/setting/web",
              label: "网站基础设置",
              label_color: "#fff",
              label_icon: "fa fa-globe",
              label_icon_color: "#fff",
              label_show: true,
            },
            {
              path: "/setting/email",
              label: "邮箱设置",
              label_color: "#fff",
              label_icon: "fa fa-envelope",
              label_icon_color: "#fff",
              label_show: true,
            },
          ],
        },
        {
          name: "个人设置",
          name_color: "#fff",
          icon: "fa fa-user",
          icon_color: "#fff",
          name_show: true,
          menu_item: [
            {
              path: "/setting/user",
              label: "个人设置",
              label_color: "#fff",
              label_icon: "fa fa-user",
              label_icon_color: "#fff",
              label_show: true,
            },
            {
              path: "/setting/password",
              label: "密码设置",
              label_color: "#fff",
              label_icon: "fa fa-key",
              label_icon_color: "#fff",
              label_show: true,
            },
          ],
        },
        {
          name: "Socket组件",
          name_color: "#fff",
          icon: "fa fa-link",
          icon_color: "#fff",
          name_show: true,
          menu_item: [
            {
              path: "/scoket",
              label: "客服",
              label_color: "#fff",
              label_icon: "fa fa-users",
              label_icon_color: "#fff",
              label_show: true,
            },
          ],
        },
         {
          name: "访问日志",
          name_color: "#fff",
          icon: "fa fa-link",
          icon_color: "#fff",
          name_show: true,
          menu_item: [
            {
              path: "/log",
              label: "EuiAdmin访问日志",
              label_color: "#fff",
              label_icon: "fa fa-users",
              label_icon_color: "#fff",
              label_show: true,
            },
          ],
        },
      ];
      sessionStorage.setItem("aslide_menu", JSON.stringify(aslide_menu));//用sessionStorage储存左侧菜单
      this.$router.push("/home"); //成功后跳转到主页
    },
    to(link) {
      this.$router.push(link);
    },
  },
};
</script>
<style scoped>
h1 {
  color: #606266;
}
p {
  color: #606266;
}
#login {
  min-height: 100vh;
}
#form_space {
  border-radius: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 400px;
  width: 400px;
}
</style>