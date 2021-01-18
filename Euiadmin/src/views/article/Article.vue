<template>
  <div>
    <el-card shadow="never">
      <div slot="header">
        <span style="flaot: right">{{ title }}</span>
        <div style="float: right">
          <el-button size="small" type="success" icon="el-icon-plus" @click="add()">新增</el-button>
        </div>
      </div>
      <div>
        <el-table :data="article_data" style="width: 100%">
          <el-table-column prop="article_title" label="文章名称" />
          <el-table-column prop="article_author" label="作者" />
          <el-table-column prop="article_label" label="类别" />
          <el-table-column prop="article_read_num" label="阅读次数" />
          <el-table-column label="展示状态" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.article_state=='1'?'正常展示':'不展示' }}</span>
            </template>
          </el-table-column>
          <el-table-column label="发布时间" width="180">
            <template slot-scope="scope">
              <i class="el-icon-timer"></i>
              <span>{{scope.row.article_editor_time}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="150px">
            <template slot-scope="scope" >
              <el-button-group>
                <el-button size="mini" type="primary " @click="view(scope.$index, scope.row)" icon="el-icon-view"></el-button>
                <el-button size="mini" type="success" @click="edit(scope.$index, scope.row)" icon="el-icon-edit-outline"></el-button>
              <el-button size="mini" type="danger" @click="remove(scope.$index, scope.row)" icon="el-icon-delete"></el-button>
              </el-button-group>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <!-- 编辑表单 -->
    <el-dialog :title="title" :visible.sync="editor_state" :fullscreen="true" :lock-scroll="false">
      <el-form size="small" ref="form" :model="article_form" label-width="80px">
        <el-form-item label="文章标题">
          <el-input v-model="article_form.article_title" placeholder="请输入文章标题"></el-input>
        </el-form-item>
        <el-form-item label="文章内容">
          <vTinymce v-model="article_form.article_content" v-if="editor_state" />
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="article_form.article_author" placeholder="请输入作者名称"></el-input>
        </el-form-item>
        <el-form-item label="文章状态">
          <el-radio-group v-model="article_form.article_state">
            <el-radio label="1">发布</el-radio>
            <el-radio label="2">暂不发布</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="文章类别">
          <el-select v-model="article_form.article_label" placeholder="请选择">
            <el-option v-for="rad in radio" :key="rad.id" :label="rad.label_name" :value="rad.label"></el-option>
          </el-select>
        </el-form-item>
        <div align="center">
          <el-button type="warning" @click="cancel()">取消</el-button>
          <el-button type="success" v-show="change_button_sate" @click="add_serve()">保存</el-button>
          <el-button type="success" v-show="!change_button_sate" @click="edit_serve()">确认修改</el-button>
        </div>
      </el-form>
    </el-dialog>
    <el-card shadow="never" v-show="article_content!=''">
      <div slot="header" class="clearfix">
        <span>文章内容</span>
      </div>
      <div v-html="article_content"></div>
    </el-card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        user_data: "",
        title: "文章管理系统",
        editor_state: false,
        change_button_sate: false,
        article_content:'',
        article_form: {
          article_title: "",
          article_content: "",
          article_author: "",
          article_state: "2",
          article_label: "",
        },
        radio: [{
            id: 1,
            label: "科技",
            label_name: "科技",
          },
          {
            id: 2,
            label: "美食",
            label_name: "美食",
          },
          {
            id: 3,
            label: "文化",
            label_name: "文化",
          },
        ],
        article_data: [{
            id: 1,
            article_title: "什么是Vue",
            article_content: "这是“什么是Vue的内容，是直接可以显示的数据",
            article_author: "Radish",
            article_editor_time: "2020/9/21 13:45:01",
            article_label: "美食",
            article_state: "1",
            article_read_num: 5,
          },
          {
            id: 2,
            article_title: "让你快速了解EuiAdmin",
            article_content: "快速让你了解EuiAdmin内容",
            article_author: "李四",
            article_editor_time: "2020/9/21 13:45:01",
            article_label: "科技",
            article_state: "2",
            article_read_num: 5,
          },
        ],
      };
    },
    methods: {
      cancel() {
        this.title = "文章管理系统";
        this.editor_state = false;
      },
      add() {
        this.title = "新增文章";
        this.editor_state = true;
        this.change_button_sate = true;
      },
      add_serve() {
        this.article_data.splice(0, 0, this.article_form);
        this.$message.success("已打印表单数据，请您打开检查查看");
        console.log(this.article_form);
        this.title = "文章管理系统";
        setTimeout(() => {
          this.editor_state = false;
        }, 1500);
      },
      edit(index) {
        this.title = "正在修改《" + this.article_data[index].article_title + "》";
        this.article_form = this.article_data[index];
        this.editor_state = true;
        this.change_button_sate = false;
      },
      edit_serve() {
        console.log(this.article_form);
        this.$message.success("已打印表单数据，请您打开检查查看");
        this.title = "文章管理系统";
        setTimeout(() => {
          this.editor_state = false;
        }, 1500);
      },
      view(index) {
        this.article_content=this.article_data[index].article_content
      },
      remove(index) {
        this.$message.success("删除成功");
        setTimeout(() => {
          this.article_data.splice(index, 1);
        }, 1500);
      },
    },
  };
</script>