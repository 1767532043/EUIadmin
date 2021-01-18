<template>
    <div>
        <el-card shadow="never" class="card">
            <div slot="header" class="clearfix">
                <span>Exios数据与后台交互表格</span>
                <vOutEXcel :data="data" :columns="columns" style="float:right;" />
            </div>
            <vEuiTable :columns="columns" :data="data" @edit="edit" @remove="remove" />
            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="page.page" :page-sizes="[10, 50, 100, 200]" :page-size="page.rn"
                layout="total, sizes, prev, pager, next, jumper" :total="page.total">
            </el-pagination>
        </el-card>
    </div>
</template>
<script>
    import exios from "@/unit/axios/exios"
    export default {
        data() {
            return {
                columns: [{
                        name: "用户昵称",
                        prop: "user_pet_name",
                    },
                    {
                        name: "用户名",
                        prop: "user_name",
                    },
                    {
                        name: "用户电话",
                        prop: "user_phone",
                    },
                    {
                        name: "用户性别",
                        prop: "user_sex_label",
                    },
                    {
                        name: "用户年龄",
                        prop: "user_age",
                    },
                    {
                        name: "用户邮箱",
                        prop: "user_email",
                    },
                    {
                        name: "注册时间",
                        prop: "register_time",
                    },
                    {
                        name: "用户类别",
                        prop: "user_label",
                    },
                ],
                data: [],
                page: {
                    pn: 1,
                    rn: 10,
                    total: 0
                }
            };
        },
        methods: {
            edit(index) {
                this.$message.success('编辑' + this.data[index].name)
            },
            remove(index) {
                this.$message.error('删除' + this.data[index].name)
            },
            handleSizeChange(rn) {
                this.page.rn=rn
                this.get_data()
            },
            handleCurrentChange(pn) {
                this.page.rn=pn
                this.get_data()
            },
            get_data() {
                exios.post('eui/user/data', {
                    pn: this.page.pn,
                    rn: this.page.rn
                }).then((res) => {
                    this.data = res.data.data
                    this.page.total = res.data.total
                })
            }
        },
        mounted() {
            this.get_data()
        }
    };
</script>