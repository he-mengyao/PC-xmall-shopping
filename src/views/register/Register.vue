<template>
  <div class="body">
    <div class="login">
      <div class="title flex flex_c fw f20 ai_c">注册 XMall 账号</div>
      <el-form>
        <el-form-item>
          <el-input placeholder="账号" v-model="username" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="密码"
            v-model="password"
            type="password"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="重复密码"
            clearable
            v-model="passwordRe"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item class="agree">
          <el-checkbox v-model="checked"></el-checkbox>我已阅读并同意遵守
          <span>法律声明</span> 和
          <span>隐私条款</span>
        </el-form-item>
        <el-form-item>
          <el-button
            class="register flex flex_c ai_c"
            :disabled="flag"
            :class="{ 'bgc-b': flag === false }"
            @click="register"
          >
            注册
          </el-button></el-form-item
        >
        <el-divider></el-divider>
        <el-form-item class="register-login">
          如果您已拥有 XMall 账号，则可在此
          <span @click="login">登陆</span></el-form-item
        >
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
      passwordRe: "",
      checked: false,
      // 用来判断注册是否能够点击
      flag: true,
    };
  },
  components: {},
  methods: {
    register() {
      if (this.passwordRe !== this.password) {
        this.$message.error("两次密码输入不一致");
        this.passwordRe = "";
      } else {
        if (this.checked === true) {
          axios
            .post("/api/users/register", {
              username: this.username,
              password: this.password,
            })
            .then((res) => {
              if (res.data.code !== 200) {
                this.$message.error(res.data.msg);
              } else {
                this.$message.success(res.data.msg);
                this.$router.push("/login");
              }
            })
            .catch((err) => {
              console.log(err, "请求失败");
            });
        } else {
          alert("请勾选协议条款");
          this.checked = true;
        }
      }
    },
    login() {
      this.$router.push("/login");
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
    },
    passwordRe(val) {
      this.passwordRe = val;
      if (
        this.username !== "" &&
        this.password !== "" &&
        this.passwordRe !== ""
      ) {
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
    height: 568px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #dadada;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    position: absolute;
    left: 50%;
    transform: translate(-50%, 10%);
  }
  .title {
    height: 60px;
    border-bottom: 1px solid #dadada;
    color: #666;
  }
  .el-form {
    padding: 40px;
    color: #b5b5b5;
    span {
      color: #5079d9;
      cursor: pointer;
    }
    .el-button {
      display: inline-block;
      background-color: #b1b1b1;
      color: #ffffff;
      border-radius: 5px;
      height: 50px;
      width: 370px;
      font-size: 18px;
      margin-bottom: 20px;
      border: 0;
    }
  }
}
.bgc-b {
  background-color: #678ee7 !important;
  &:hover {
    background-color: #617dc6 !important;
  }
}
</style>