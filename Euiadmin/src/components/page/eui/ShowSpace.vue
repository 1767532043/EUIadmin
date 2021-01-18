<template>
  <div align="center" id="data">
    <el-row
      v-for="(da, index) in data"
      :key="index"
      :gutter="da.gutter"
      style="width: 90vw; margin-top: 20px"
    >
      <el-col
        v-for="(item, i) in da.item_data"
        :key="i"
        :span="da.span"
        style="margin-top: 20px"
      >
        <el-card
          :style="{ height: da.height + 'px' }"
          shadow="hover"
          :body-style="{ padding: '0px' }"
        >
          <div
            id="icon_back"
            :style="{
              height: da.height - 90 + 'px',
              backgroundColor: item.back_color,
            }"
          >
            <i
              :class="item.icon"
              :style="{
                color: item.icon_color,
                fontSize: item.icon_size,
                marginTop: da.height / 3 + 'px',
              }"
            />
          </div>
          <div align="left" style="padding-left: 20px">
            <p style="font-size: 120%; color: #303133; padding-top: 20px">
              {{ item.title }}
            </p>
            <p style="color: #909399; padding-top: 20px">
              {{ item.adress }}
            </p>
          </div>
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
          name: "EuiAdmin特色",
          gutter: 16,
          span: 24,
          height: 400,
          item_data: [
            {
              back_color: "#339933",
              icon: "fa fa-send-o",
              icon_color: "#ffffff",
              icon_size: "300%",
              title: "Axios封装",
              adress: "EuiAdmin已经为您封装axios，你可以快速调用，减少开发周期",
            },
            {
              back_color: "#FF9966",
              icon: "fa fa-handshake-o",
              icon_color: "#ffffff",
              icon_size: "300%",
              title: "vue-socket.io",
              adress: "EuiAdmin支持socket通信，你可以直接应用无需安装",
            },
          ],
        },
        {
          name: "EuiAdmin特色",
          gutter: 16,
          span: 12,
          height: 300,
          item_data: [
            {
              back_color: "#FF9900",
              icon: "fa fa-text-width",
              icon_color: "#fff",
              icon_size: "300%",
              title: "Tinymce富文本",
              adress: "在EuiAdmin中任意位置使用<vTinymce/>便可直接使用富文本编辑器",
            },
            {
              back_color: "#FF6666",
              icon: "fa fa-area-chart",
              icon_color: "#ffffff",
              icon_size: "300%",
              title: "Echarts",
              adress: "支持所有Echarts官方实例，你可以前往views/echarts/EchartsBar文件查看实例",
            },
            {
              back_color: "#33CC99",
              icon: "fa fa-file-excel-o",
              icon_color: "#ffffff",
              icon_size: "300%",
              title: "Js-xlsx",
              adress: "你可以快速将数据导出到excel文件中，也可将xlsx文件数据导入网站",
            },
            {
              back_color: "#006699",
              icon: "fa fa-flag-o",
              icon_color: "#ffffff",
              icon_size: "300%",
              title: "Font Awesome",
              adress: "EuiAdmin支持所有Font Awesome图标，且支持动画和大小描述",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style scoped>
#data {
  /* padding-top: 10px; */
  padding-bottom: 20px;
}
#icon_back {
  height: 100px;
  background-color: yellow;
}
</style>