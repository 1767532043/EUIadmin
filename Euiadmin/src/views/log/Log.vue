<template>
    <el-card shadow="never">
        <div slot="header">
            <span style="flaot: right">EuiAdmin日志（内置模块）</span>
            <div style="float: right">
            </div>
        </div>
        <div>
            <el-table size="small" :data="data" max-height="320px" style="width: 100%">
                <el-table-column label="网站标题">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.vist.meta.title }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="路由">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.vist.path }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="路由名">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.vist.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="显示在框架内">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.vist.meta.inside?'在框架内':'脱离框架' }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="需要登录">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.vist.meta.login_state?'不需要':'需要' }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="访问时间">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.vist_date }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作者">
                    <template slot-scope="scope">
                        <i class="el-icon-user"></i>
                        <span style="margin-left: 10px">{{scope.row.user_name}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="访问信息">
                    <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <p>{{ scope.row.message }}</p>
                            <div slot="reference" class="name-wrapper">
                                <el-tag size="medium">访问信息</el-tag>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="150px">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </el-card>
</template>
<script>
    export default {
        data() {
            return {
                data: JSON.parse(sessionStorage.getItem('vist_log')),
            }
        },
    }
</script>