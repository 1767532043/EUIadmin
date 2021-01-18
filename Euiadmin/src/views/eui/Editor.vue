<template>
  <div>
    <vTinymce v-model="editor_content" />
    <span>编辑器渲染内容：</span>
    <div v-html="editor_content"></div>
    <el-divider />
    <span>HTML原版内容：</span>
    <el-divider />
    <div>
      {{ editor_content }}
    </div>
  </div>
</template>
<script>
export default {
  props: ["tab_data"],
  data() {
    return {
      editor_content: "",
    };
  },
};
</script>