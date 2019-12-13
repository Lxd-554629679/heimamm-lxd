<template>
  <div class="login-box">
    <div class="form-box">
      <div class="logoIn">
        <img src="../../assets/logo-login.png" alt />
        <span class="heima">黑马面面</span>
        <i></i>
        <span class="userLo">用户登录</span>
      </div>

      <el-form class="login-form" ref="form" :model="form">
        <!-- 手机号 -->
        <el-form-item>
          <el-input v-model="form.name1" prefix-icon="el-icon-user" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input v-model="form.name2" show-passwordgit prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item>
          <el-row>
            <el-col :span="18">
              <div class="grid-content bg-purple">
                <el-input v-model="form.name3" prefix-icon="el-icon-key" placeholder="请输入验证码"></el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <img class="captcha" src="../../assets/captcha.jpg" alt />
              </div>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-checkbox-group v-model="form.type">
            <el-checkbox name="type">我已阅读并同意
              <el-link type="primary">用户协议</el-link>和
              <el-link type="primary">隐私条款</el-link>
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">登录</el-button>
          <el-button type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        name1: "",
        name2: "",
        name3: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        checked: false
      }
    };
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