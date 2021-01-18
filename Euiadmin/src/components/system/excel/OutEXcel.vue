<template>
<!-- 导出数据到excel -->
  <div>
    <el-button
      type="danger"
      size="small"
      icon="fa fa-file-excel-o"
      :disabled="data.length == 0"
      @click="dialogVisible=true"
      >导出数据</el-button
    >
    <el-dialog fullscreen title="导出数据到excel" :visible.sync="dialogVisible">
      <el-table
        size="small"
        :data="data"
        max-height="450px"
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
      </el-table>
      <div style="margin-top: 10px" align="center">
        <el-button type="danger" size="small" @click="out_from_state = true"
          >基于表格导出excel</el-button
        >
      </div>
      <el-dialog
        title="导出文件设置"
        append-to-body
        :visible.sync="out_from_state"
        width="30%"
      >
        <el-form ref="form" size="small" :model="form" label-width="80px">
          <el-form-item label="文件名">
            <el-input v-model="form.file_name"></el-input>
          </el-form-item>
          <el-form-item label="表格名称">
            <el-input v-model="form.sheet_name"></el-input>
          </el-form-item>
        </el-form>
        <div align="center">
          <el-button
          type="primary"
          size="small"
          :disabled="
            form.file_name == '' || form.sheet_name == '' ? true : false
          "
          @click="out_table()"
          >确认导出</el-button
        >
        </div>
      </el-dialog>
    </el-dialog>
  </div>
</template>
<script>
import XLSX from "xlsx/xlsx.mini.js";
export default {
  props: ["data", "columns"],
  data() {
    return {
      dialogVisible: false,
      out_from_state: false,
      consult_data: [],
      out_key: [],
      active: 0,
      form: {
        file_name: "",
        sheet_name: "",
      },
    };
  },
  methods: {
    out_table() {
      let worksheet = XLSX.utils.table_to_sheet(
        document.getElementById("table")
      );
      let workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, this.form.sheet_name);
      XLSX.writeFile(workbook, this.form.file_name + ".xlsx");
    },
  },
};
</script>