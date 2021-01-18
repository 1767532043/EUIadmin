<template>
  <div>
    <el-card shadow="never">
      <div slot="header">
        <span style="flaot: right">Eui权限管理</span>
      </div>
      <div style="height: 50vh; overflow-x: hidden; overflow-y: auto">
        <el-form size="small" ref="form" :model="form">
          <el-row :gutter="16">
            <el-col span="12" v-for="(menu, index) in menu_data" :key="index">
              <el-form-item :label="menu.name">
                <el-checkbox v-model="menu.name_show" @change="change_menu(index)"></el-checkbox>
                <el-form-item v-for="(menu_item, i) in menu.menu_item" :key="i" :label="menu_item.label"
                  style="padding-left: 30px">
                  <el-checkbox v-model="menu_item.label_show" @change="change_menu_item(index)"></el-checkbox>
                </el-form-item>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div align="center">
        <el-button type="danger" size="small" @click="onSubmit">保存设置</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {},
        menu_data: JSON.parse(sessionStorage.getItem("aslide_menu")),
      };
    },
    methods: {
      change_menu(index) {
        if (this.menu_data[index].name_show) {
          for (let i = 0; i < this.menu_data[index].menu_item.length; i++) {
            this.menu_data[index].menu_item[i].label_show = true;
          }
        } else {
          for (let i = 0; i < this.menu_data[index].menu_item.length; i++) {
            this.menu_data[index].menu_item[i].label_show = false;
          }
        }
        //console.log(this.menu_data[index]);
      },
      change_menu_item(index) {
        for (let i = 0; i < this.menu_data[index].menu_item.length; i++) {
          if (this.menu_data[index].menu_item[i].label_show == true) {
            this.menu_data[index].name_show = true;
            break;
          } else if (i == this.menu_data[index].menu_item.length - 1) {
            this.menu_data[index].name_show = false;
          }
        }
        //console.log(index);
      },
      onSubmit() {
        sessionStorage.setItem("aslide_menu", JSON.stringify(this.menu_data));
        this.menu_data = JSON.parse(sessionStorage.getItem("aslide_menu"))
        this.$message.success("保存成功,即将为您刷新，你要恢复请您关闭页面重新打开");
        setTimeout(() => {
          this.$router.go(0)
        }, 1500)
      },
    },
  };
</script>