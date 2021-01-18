<template>
  <!-- 跳转标签 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>{{data.home_name}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{data.item_name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
  export default {
    data() {
      return {
        data:{
          home_name:'',
          item_name:''
        }
      };
    },
    methods: {
      get_bread() {
        var menu = JSON.parse(sessionStorage.getItem('aslide_menu'))
        var path = JSON.parse(sessionStorage.getItem('vist_log'))[0].vist.path
        for (let index = 0; index < menu.length; index++) {
          for (let i = 0; i < menu[index].menu_item.length; i++) {
            if (menu[index].menu_item[i].path == path) {
              this.data.home_name=menu[index].name
              this.data.item_name=menu[index].menu_item[i].label
            }
          }
        }
      }
    },
    mounted() {
      this.get_bread()
    }
  };
</script>
<style scoped>
  #tab {
    background-color: rgba(255, 255, 47, 0);
  }
</style>