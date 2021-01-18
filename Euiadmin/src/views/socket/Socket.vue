<template>
  <el-container>
    <el-aside width="200px">
      <div class="my">
        <p style="color: #fff; padding-top: 10px; padding-left: 10px">
          <el-avatar size="small" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <span style="margin-left: 10px">{{ user_id }}</span>
          <el-button type="danger" size="mini" @click="connect()">连接</el-button>
        </p>
      </div>
      <div class="user_list">
        <div class="user" v-for="(line, index) in online_user_data" :key="index" @click="choose_user(index)">
          <p>
            <el-avatar size="small" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
            </el-avatar><span style="margin-left: 10px">{{ line }}</span>
          </p>
        </div>
      </div>
    </el-aside>
    <el-main style="padding: 0px">
      <div id="message">
        <div class="title">
          <div v-show="send_user != ''" align="center">
            <p class="id">{{ send_user }}</p>
          </div>
        </div>
        <div class="message_space" ref="nav">
          <div class="mssage_list" v-for="(talk, index) in talk_data" :key="index"
            :align="talk.from == user_id ? 'right' : 'left'" v-show="send_user != ''">
            <p style="padding:10px">
              <el-avatar size="small" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
              </el-avatar><span>{{ talk.from == user_id ? user_id : talk.from }}</span>
            </p>
            <div :class="talk.from == user_id ? 'send_message_back' :'get_message_back'" align="left">
              <p style="margin: 10px">{{ talk.message }}</p>
            </div>
          </div>
        </div>
        <div class="send" v-show="send_user != ''">
          <div style="padding: 3px">
            <el-input type="textarea" :rows="2" placeholder="请输入回复信息" v-model="send_mesage">
            </el-input>
          </div>
          <div align="right" style="padding-right: 10px">
            <el-button type="success" size="small" @click="send()">发送</el-button>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        user_id: parseInt(Math.random() * (999999 - 10000 + 1) + 10000, 10),
        online_user_data: [],
        send_mesage: "",
        send_user: "",
        get_message: "",
        talk_data: [],
      };
    },
    methods: {
      send() {
        this.$axios({
          method: "post",
          url: "message/send",
          data: this.$qs.stringify({
            to_uid: this.send_user,
            user_id: this.user_id,
            message: this.send_mesage,
          }),
        }).then((response) => {
          //console.log(response);
          if (response.data == "'ok'") {
            var get_message = {
              message: this.send_mesage,
              from: this.user_id,
              to: this.send_user,
            };
            var data = [];
            var message = JSON.parse(sessionStorage.getItem(this.send_user));
            if (message == null) {
              data.splice(0, 0, get_message);
              sessionStorage.setItem(this.send_user, JSON.stringify(data));
            } else {
              message.splice(message.length, 0, get_message);
              sessionStorage.setItem(this.send_user, JSON.stringify(message));
            }
            //console.log(JSON.parse(sessionStorage.getItem(this.send_user)));
            this.talk_data = JSON.parse(sessionStorage.getItem(this.send_user));
            this.send_mesage = "";
            this.$message.success("发送成功");
            this.$refs.nav.scrollTop = this.$refs.nav.scrollHeight;
          } else {
            this.$message.warning("发送失败");
          }
        });
      },
      choose_user(index) {
        this.send_user = this.online_user_data[index];
        this.talk_data = JSON.parse(
          sessionStorage.getItem(this.online_user_data[index])
        );
      },
      connect() {
        this.$socket.emit("login", this.user_id);
        //console.log("登录成功");
      },
    },
    sockets: {
      new_msg(data) {
        this.get_message = data;
      },
      update_online_count(online_stat) {
        this.online_user_data = Object.keys(online_stat);
        for (let index = 0; index < this.online_user_data.length; index++) {
          if (this.online_user_data[index] == this.user_id) {
            this.online_user_data.splice(index, 1);
            break;
          }
        }
      },
      from_user(from_user) {
        var get_message = {
          message: this.get_message,
          from: from_user,
          to: this.user_id,
        };
        var data = [];
        var message = JSON.parse(sessionStorage.getItem(from_user));
        if (message == null) {
          data.splice(0, 0, get_message);
          sessionStorage.setItem(from_user, JSON.stringify(data));
          //console.log(JSON.parse(sessionStorage.getItem(from_user)));
        } else {
          message.splice(message.length, 0, get_message);
          sessionStorage.setItem(from_user, JSON.stringify(message));
        }
        //console.log(JSON.parse(sessionStorage.getItem(from_user)));
        this.talk_data = JSON.parse(sessionStorage.getItem(from_user));
        this.$refs.nav.scrollTop = this.$refs.nav.scrollHeight;
      },
    },
  };
</script>
<style scoped>
  .get_message_back {
    max-width: 200px;
    min-height: 40px;
    color: #ffffff;
    background-color: #40a0ffa4;
    border-radius: 20px;
    border: 1px solid #409EFF;
    margin-left: 10px;
    margin-bottom: 10px;
  }

  .send_message_back {
    max-width: 200px;
    min-height: 40px;
    color: #ffffff;
    background-color: #f56c6c8a;
    border-radius: 20px;
    border: 1px solid #F56C6C;
    margin-left: 10px;
    margin-bottom: 10px;
  }

  .mssage_list {
    min-height: 50px;
    margin-top: 10px;
  }

  .id {
    padding-top: 3vh;
    color: white;
  }

  .my {
    height: 10vh;
    background-color: #409eff;
  }

  .title {
    height: 10vh;
    background-color: #409eff;
  }

  .message_space {
    height: 34vh;
    overflow: auto;
  }

  .send {
    height: 15vh;
    background-color: rgba(105, 105, 105, 0);
    border-top: 1px solid #dcdfe6;
  }

  .user_list {
    background-color: white;
    border-right: 1px solid #909399;
    height: 50vh;
    overflow: auto;
  }

  .user {
    padding: 10px;
    cursor: pointer;
  }

  .user:hover {
    padding: 10px;
    cursor: pointer;
    background-color: #dcdfe6;
  }

  .user:active {
    padding: 10px;
    cursor: pointer;
    background-color: #dcdfe6;
  }

  #message {
    height: 60vh;
    overflow: auto;
    background-color: white;
    padding: 0px;
  }
</style>