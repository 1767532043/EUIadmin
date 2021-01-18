<template>
  <!-- euiadmin内置表格 -->
  <el-table
    size="small"
    :data="data"
    max-height="310px"
    @selection-change="selection"
    style="width: 100%"
    id="table"
  >
    <el-table-column
      v-for="(column, col) in columns"
      :key="col"
      :property="column.prop"
      :label="column.name"
    />
    <el-table-column label="操作" width="150">
      <!-- 这里是操作区域。你可以更改适应你的项目要求 -->
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  props: ["data", "columns"],
  data() {
    return {};
  },
  methods: {
    handleEdit(index) {
      //点击编辑时回调
      this.$emit("edit", index);
    },
    handleDelete(index) {
      //点击删除时回调
      this.$emit("remove", index);
    },
  },
};
</script>