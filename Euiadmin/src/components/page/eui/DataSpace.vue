<template>
  <div align="center" id="data">
    <el-row :gutter="16" style="width:90vw" >
    <el-col v-for="(da, index) in data" :key="index" span="6">
      <el-card style="height:200px" shadow="hover">
        <i :class="da.icon" :style="{color:da.icon_color,fontSize:da.icon_size}"/>
        <p style="color:#606266;padding-top:20px">{{da.title}}</p>
        <p style="font-size:200%;color:#606266;padding-top:20px">{{da.number}}</p>
      </el-card>
    </el-col>
  </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          title: "访问人数",
          number: 12254,
          icon: "fa fa-user-o",
          icon_color: "#F56C6C",
          icon_size: "300%",
        },
        {
          title: "下载次数",
          number: 12254,
          icon: "fa fa-arrow-down",
          icon_color: "#409EFF",
          icon_size: "300%",
        },
        {
          title: "今日使用",
          number: 12254,
          icon: "fa fa-hand-o-up",
          icon_color: "#67C23A",
          icon_size: "300%",
        },
        {
          title: "EuiAdmin版本",
          number: 1.01,
          icon: "fa fa-gg",
          icon_color: "#E6A23C",
          icon_size: "300%",
        },
      ],
    };
  },
};
</script>
<style scoped>
#data{
  padding-top: 10px;
}
</style>