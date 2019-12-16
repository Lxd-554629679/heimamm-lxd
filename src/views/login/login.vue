<template>
  <div class="login-box">
    <div class="form-box">
      <div class="logoIn">
        <img src="../../assets/logo-login.png" alt />
        <span class="heima">黑马面面</span>
        <i></i>
        <span class="userLo">用户登录</span>
      </div>

      <el-form class="login-form" ref="form" :model="form" :rules="rules">
        <!-- 手机号 -->
        <el-form-item prop="phone">
          <!-- v-model="form.name1" -->
          <el-input v-model="form.phone" prefix-icon="el-icon-user" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            show-password
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="captcha">
          <el-row>
            <el-col :span="18">
              <div class="grid-content bg-purple">
                <el-input v-model="form.captcha" prefix-icon="el-icon-key" placeholder="请输入验证码"></el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <img class="captcha" :src="captchaUrl" @click="captchaRefresh" />
              </div>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-checkbox name="type" v-model="form.checked">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">登录</el-button>
          <el-button type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        // 判断手机号的格式
        // 正则
        const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        // 判断是否符合
        // .test(验证的字符串) 返回的是 true 或者false
        if (reg.test(value) == true) {
          callback();
        } else {
          // 不满足 手机号的格式
          callback(new Error("老铁，你的手机号写错了噢"));
        }
      }
    };
    return {
      form: {
        phone: "",
        password: "",
        captcha: "",
        checked: false
      },
      captchaUrl: process.env.VUE_APP_BASEURL + "/captcha?type=login",

      rules: {
        // 手机号
        phone: [{ required: true, validator: checkPhone, trigger: "blur" }],
        // 密码
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "change"
          },
          {
            min: 6,
            max: 18,
            message: "密码长度为 6 到 18",
            trigger: "change"
          }
        ],
        // 验证码
        captcha: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "change"
          },
          {
            min: 4,
            max: 4,
            message: "验证码长度为4",
            trigger: "change"
          }
        ]
      }
    };
  },

  methods: {
    // 表单验证方法
    submitForm() {
      if (this.form.checked === false) {
        this.$message.warning("老铁，没勾哦，先勾一下呗！");
      } else {
        this.$refs.form.validate(valid => {
          if (valid) {
            // 验证成功
            this.$message.success("恭喜你，成功啦");
            axios({
              url: process.env.VUE_APP_BASEURL + "/login",
              withCredentials: true,
              method: "post",
              data: {
                phone: this.form.phone,
                password: this.form.password,
                code: this.form.captcha
              }
            }).then(res => {
              //成功回调
              window.console.log(res);
            });
          } else {
            // 验证失败
            this.$message.error("很遗憾，内容没有写对！");

            return false;
          }
        });
      }
    },
    captchaRefresh() {
      this.captchaUrl =
        process.env.VUE_APP_BASEURL + "/captcha?type=login&" + Date.now();
    }
  }
};
</script>

<style lang="less">
.login-box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  .form-box {
    background-color: #f5f5f5;
    width: 478px;
    height: 550px;
    box-sizing: border-box;
    padding: 0 42px;
    .logoIn {
      display: flex;
      align-items: center;
      margin-top: 44px;
      img {
        width: 22px;
        height: 17px;
        margin-right: 16px;
      }
      .heima {
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: #0c0c0c;
        margin-right: 14px;
      }
      i {
        width: 1px;
        height: 28px;
        background-color: #c7c7c7;
        margin-right: 12px;
      }
      .userLo {
        font-size: 22px;
        font-family: PingFangSC;
        font-weight: 400;
        color: #0c0c0c;
      }
    }
    .login-form {
      margin-top: 27px;
      .el-form-item {
        height: 40px;
      }
      .el-form-item {
        margin-bottom: 25px;
      }
      .el-button {
        width: 100%;
        margin-left: 0;
      }
      .captcha {
        width: 100%;
        height: 40px;
      }
      .el-checkbox {
        display: flex;
        align-items: center;
        margin-top: 7px;
        font-size: 14px;
        .el-checkbox__label {
          display: flex;
          align-items: center;
        }
      }
      .el-button {
        margin-bottom: 26px;
        //   font-size: 16px;
      }
    }
  }
}
</style>