<template>
  <!-- 500错误页 -->
  <div id="back">
    <i
      id="title"
      class="el-icon-warning-outline animate__animated animate__pulse animate__infinite infinite"
    />
    <div
      style="margin: auto; width: 600px; height: 5px; background-color: #e6a23c"
    ></div>
    <p>系统错误，请您及时联系管理员</p>
  </div>
</template>
<style scoped>
p {
  padding-top: 20px;
}
#title {
  padding-top: 20vh;
  font-size: 1000%;
  color: #f56c6c;
}
#back {
  min-height: 100vh;
  text-align: center;
}
</style>