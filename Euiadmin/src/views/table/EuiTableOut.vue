<template>
    <div>
        <el-card shadow="never" class="card">
            <div slot="header" class="clearfix">
                <span>EuiTable数据导出</span>
                <vOutEXcel :data="data" :columns="columns" style="float:right;"/>
            </div>
            <vEuiTable :columns="columns" :data="data" @edit="edit" @remove="remove" />
        </el-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                columns: [{ 
                        name: "用户名",
                        prop: "name",
                    },
                    {
                        name: "电话号码",
                        prop: "phone",
                    },
                    {
                        name: "年龄",
                        prop: "age",
                    },
                ],
                data: [{
                        name: "小明",
                        phone: "123456",
                        age: 12,
                    },
                    {
                        name: "小龙",
                        phone: "123456",
                        age: 12,
                    },
                    {
                        name: "小李",
                        phone: "123456",
                        age: 12,
                    },
                    {
                        name: "小陈",
                        phone: "123456",
                        age: 12,
                    },
                    {
                        name: "李白",
                        phone: "123456",
                        age: 12,
                    },
                    {
                        name: "张三",
                        phone: "123456",
                        age: 12,
                    },
                ],
            };
        },
        methods: {
            edit(index) {
                this.$message.success('编辑' + this.data[index].name)
            },
            remove(index) {
                this.$message.error('删除' + this.data[index].name)
            }
        }
    };
</script>