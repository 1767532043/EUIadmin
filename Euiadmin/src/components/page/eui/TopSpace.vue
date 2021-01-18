<template>
  <div id="back_image" style="" align="center">
    <div style="padding-top: 20px; width: 90vw">
      <p style="font-size: 450%; color: #606266" v-html="top_adress.title"></p>
    </div>
    <div style="padding-top: 20px">
      <p v-html="top_adress.adress"></p>
    </div>
    <div id="button_space">
      <div
        id="eui_button"
        v-for="(button, index) in button_data"
        :key="index"
        @click="get_link(index)"
        :style="{
          backgroundColor: button.background_color,
          border: '1px ' + 'solid ' + button.border_color,
        }"
      >
        <p style="margin-top: 25px; color: #606266" v-html="button.title"></p>
      </div>
    </div>
    <el-dialog title="下载" :visible.sync="dialogVisible" width="500px">
      <el-button
        :type="index==0?'primary':'success'"
        size="small"
        v-for="(down, index) in download_data"
        :key="index"
        style="margin-left: 10px"
        ><i :class="down.icon" style="margin-right:10px"/>{{down.title}}（提取码：{{down.get_code}}）</el-button>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      top_adress: {
        title: '<p><span style="color: #2dc26b;">E</span><span style="color: #e03e2d;">u</span><span style="color: #e67e23;">i</span><span style="color: #2dc26b;">A</span><span style="color: #169179;">d</span><span style="color: #843fa1;">m</span><span style="color: #e67e23;">i</span><span style="color: #34495e;">n</span></p>',
        adress:
          '<p><span style="color: #34495e;">一个致力于<span style="color: #e67e23;"><strong>快速开发</strong></span>的<strong>免费</strong>网站后台管理项目，通过<span style="color: #e03e2d;">EuiAdmin</span>你直接获取一个后台，大大减少开发起步时间</span></p> <p><span style="color: #34495e;">开箱就可以直接获取一个完整的后台模板，你可以快速完成开发</span></p>',
      },
      button_data: [
        {
          title: "免费获取EuiAdmin",
          value: "euiadmin",
          background_color: "#3a9afa15",
          border_color: "#3a9aface",
        },
        {
          title: "免费获取",
          value: "eui",
          background_color: "#F56C6C15",
          border_color: "#F56C6Cce",
        },
      ],
      download_data: [
        {
          title: "百度云",
          get_code: "ek2f",
          link:'b',
          icon: "fa fa-cloud",
        },
        {
          title: "迅雷",
          get_code: "essf",
          link:'x',
          icon: "fa fa-twitter",
        },
      ],
    };
  },
  methods: {
    get_link(index) {
      console.log(this.button_data[index].value);
      this.dialogVisible = true;
    },
  },
};
</script>
<style scoped>
.circle {
  width: 200px;
  height: 200px;
  background-color: aqua;
}
#back_image {
  overflow: hidden;
  width: 100%;
  height: 400px;
  background-image: linear-gradient(
    to bottom right,
    #e1ebf1,
    rgb(204, 223, 240)
  );
}
#eui_button {
  cursor: pointer;
  display: inline-block;
  color: white;
  margin-left: 20px;
  margin-top: 20px;
  width: 200px;
  height: 80px;
  background-color: #3a9afa15;
  border: 1px solid #3a9aface;
}
#eui_button:hover {
  margin-top: 20px;
  width: 200px;
  height: 80px;
  border-radius: 50em;
  background-color: #3a9afa15;
  border: 1px solid #3a9aface;
}
</style>