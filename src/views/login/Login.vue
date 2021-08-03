<template>
  <div class="body">
    <div class="login">
      <div class="logo flex flex_c ai_c col">
        <div class="title">M</div>
      </div>
      <div class="title-item">使用XMall账号 登录官网</div>
      <el-form>
        <el-form-item>
          <el-input placeholder="账号" v-model="username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="密码" v-model="password"></el-input>
        </el-form-item>
        <el-form-item class="agree">
          <el-checkbox v-model="checked"></el-checkbox>记住密码
          <span class="user" @click="register">注册XMall账号</span>
          <span class="password">忘记密码？</span>
        </el-form-item>
        <el-form-item>
          <el-button
            class="register flex flex_c ai_c"
            :disabled="flag"
            :class="{ 'bgc-b': flag === false }"
            @click="login"
          >
            登录
          </el-button></el-form-item
        >
        <el-form-item>
          <el-button class="back flex flex_c ai_c" @click="back">
            返回
          </el-button></el-form-item
        >
        <el-divider></el-divider>
        <el-form-item class="login-item f12">
          其他账号登录
          <i class="cursor iconfont icon-weixin"></i>
          <i class="cursor iconfont icon-xinlang_"></i>
          <i class="cursor iconfont icon-qq"></i>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      username: "",
      password: "",
      checked: false,
      // 用来判断注册是否能够点击
      flag: true,
    };
  },
  components: {},
  methods: {
    login() {
      axios
        .post("/api//users/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          if (res.data.code === 200) {
            this.$message.success(res.data.msg);
            this.$router.push("/");
          }
        })
        .catch((err) => {
          console.log(err, "请求失败");
        });
    },
    register() {
      this.$router.push("/register");
    },
    back() {
      this.$router.back();
    },
  },
  mounted() {},
  computed: {},
  watch: {
    username(val) {
      this.username = val;
    },
    password(val) {
      this.password = val;
      if (this.username !== "" && this.password !== "") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.body {
  background-color: #f4f4f4;
  height: 100%;
  .login {
    width: 450px;
    height: 680px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #dadada;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    position: absolute;
    left: 50%;
    transform: translate(-50%, 5%);
  }
  .logo {
    height: 167px;
    .title {
      font-size: 60px;
      color: #fff;
      background-color: #c53520;
      width: 90px;
      height: 90px;
      border-radius: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .title-item {
    font-size: 20px;
    text-align: center;
  }
  .el-form {
    padding: 40px;
    color: #b5b5b5;
    span {
      color: #5079d9;
      cursor: pointer;
    }
    .register {
      display: inline-block;
      background-color: #b1b1b1;
      color: #ffffff;
      border-radius: 5px;
      height: 50px;
      width: 370px;
      font-size: 18px;
      margin-bottom: 20px;
      border: 0;
      margin-bottom: -20px;
    }
    .back {
      height: 50px;
      width: 370px;
      margin-top: -40px;
      border: 1px solid #dadada !important;
      color: #646464;
      font-size: 18px;
      &:hover {
        background-color: #f1f1f1;
      }
    }
    .user {
      margin: 0 0 0 80px;
      padding-right: 20px;
      border-right: 1px solid #dadada;
    }
    .password {
      margin-left: 10px;
    }
  }
}
.bgc-b {
  background-color: #678ee7 !important;
  &:hover {
    background-color: #617dc6 !important;
  }
}
i {
  margin: 0 5px;
  font-size: 18px;
}
</style>