<template>
<!-- 点击设置图标时展开区域 -->
  <div>
    <i
      class="el-icon-setting"
      @click="visible_state = true"
      :style="{ color: head_icon_color }"
    />
    <el-drawer
      title="我是标题"
      :with-header="false"
      :visible.sync="visible_state"
      size="250px"
      style="margin-top: 65px"
    >
      <div id="bord">
        <p style="margin-left: 10px">版本信息：</p>
        <hr style="color: #dcdfe6" />
        <div align="center">
          <el-button type="danger" style="width: 90%"
            >版本 EuiAdmin1.0</el-button
          >
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible_state: false,
      head_icon_color: JSON.parse(sessionStorage.getItem("web_setting"))
        .head_icon_color,
    };
  },
};
</script>
<style scoped>
a {
  word-break: break-all;
}
#bord {
  width: 100%;
  word-break: break-all;
}
</style>