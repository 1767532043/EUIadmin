
export default {
    Tinymce:resolve=>{require(['@/components/system/Tinymce'],resolve)},//富文本编辑器
    ImportExcel:resolve=>{require(['@/components/system/excel/ImportExcel.vue'],resolve)},//导入数据
    OutEXcel:resolve=>{require(['@/components/system/excel/OutEXcel.vue'],resolve)},//导出数据
    EuiTable:resolve=>{require(['@/components/system/EuiTable.vue'],resolve)},//eui表格
    Eicon:resolve=>{require(['@/components/system/form/Icon.vue'],resolve)},//eui表格
}