<template>
  <div class="user">
    <head-bar>
      <template v-slot:center>
        <div><span>我的</span></div>
      </template>
    </head-bar>
    <nav-bar></nav-bar>
    <van-skeleton title row="3" avatar :loading="loading">
      <div class="user-info">
        <div class="info">
          <img src="https://s.yezgea02.com/1604040746310/aaaddd.png" alt="" />
          <div class="user-desc">
            <span>昵称：{{ user.nickName }}</span>
            <span>登录名：{{ user.loginName }}</span>
            <span>个性签名：{{ user.introduceSign }}</span>
          </div>
        </div>
      </div>
    </van-skeleton>
    <ul class="use-list">
      <li>
        <span>我的订单</span>
        <van-icon name="arrow" />
      </li>
      <li>
        <span>账号管理</span>
        <van-icon name="arrow" />
      </li>
      <li>
        <span>地址管理</span>
        <van-icon name="arrow" />
      </li>
      <li>
        <span>关于我们</span>
        <van-icon name="arrow" />
      </li>
    </ul>
  </div>
</template>

<script>
import headBar from "../components/headBar.vue";
import navBar from "../components/NavBar.vue";
import { onMounted, reactive, toRefs } from "vue";
import { getUserInfo } from "../service/user";
export default {
  name: "user",
  components: {
    headBar,
    navBar,
  },
  setup() {
    const state = reactive({
      loading: true,
      user: {},
    });

    onMounted(async () => {
      const { data } = await getUserInfo();
      console.log("data", data);
      state.user = data;
      state.loading = false;
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.user-desc {
  display: flex;
  flex-direction: column;
}
.user-info {
  height: 165px;
  width: 100%;
}
.info {
  display: flex;
  background: linear-gradient(90deg, #1baeae, #51c7c7);
  margin: 10px;
  border-radius: 10px;
  padding: 36px 28px;
}
.info > img {
  border-radius: 50%;
  width: 86px;
  height: 86px;
}
.user-desc {
  display: flex;
  text-align: left;
  flex-direction: column;
  color: white;
  font: bold;
}
</style>