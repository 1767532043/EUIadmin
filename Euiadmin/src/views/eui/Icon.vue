<template>
  <div>
    <el-card shadow="never" style="min-height:70vh">
      <div slot="header" class="clearfix">
        <span>超级表单</span>
      </div>
     <div>
       <vEicon v-model="icon"/>
       <p>选择内容{{icon}}</p>
       <p>你选择的图标：<i :class="icon"></i></p>
     </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
    icon:''
    };
  },
  methods: {
    show_form() {
      console.log(this.form);
      this.$message.success("打印表单数据成功，请打开检查查看数据");
    },
  },
};
</script>