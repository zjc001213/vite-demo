<template>
  <div class="cart">
    <head-bar>
      <template v-slot:center>
        <div>
          <span>购物车</span>
        </div>
      </template>
    </head-bar>
    <nav-bar></nav-bar>

    <div class="cart-body">
      <van-checkbox-group>
        <van-swipe-cell>
          <div class="good-item" v-for="item in list" :key="item">
            <van-checkbox :name="item.cartItemId" :checked="checked" checked-color="blue  "/>
            <div class="good-img">
              <img :src="$filters.prefix(item.goodsCoverImg)" alt="" />
            </div>
            <div class="good-desc">
              <div class="good-title">
                <span>
                  {{ item.goodsName }}
                </span>
                <span style="">
                  ×{{ item.goodsCount }}
                </span>
              </div>
              <div class="good-btn">
                <div class="price">
                  <span>${{ item.sellingPrice }}</span>
                </div>
                <van-stepper
                  integer
                  :min="1"
                  :max="5"
                  v-model="item.goodsCount"
                  :name="item.cartItemId"
                  button-size="20"
                  input-width="20"
                />
              </div>
            </div>
          </div>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>

    <van-submit-bar
      class="submit-all van-hairlin--top"
      :price="100"
      button-text="结算"
      @submit="onSubmit"
    >
      <van-checkbox @click="allCheck"/>
    </van-submit-bar>

    <div>
      <van-checkbox checked="check" checked-color="#ee0a24" icon-size="24px"/>
      <span>我在这里</span>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import headBar from "../components/headBar.vue";
import { onMounted, reactive, ref, toRefs } from "vue";
import { getCart } from "../service/cart";
export default {
  name: "cart",
  components: {
    NavBar,
    headBar,
  },
  setup() {
    const state = reactive({
      list: {},
      checked: false,
    });

    onMounted(() => {
      init();
    });

    const init = async function () {
      const { data } = await getCart({ pageNumber: 1 });
      state.list = data;
      console.log("data", state.list);
    };

    const onSubmit = function () {
      console.log("结算");
    };

    const allCheck = function() {
      console.log('allcheck')
    }

    const total = function() {

    }

    return {
      ...toRefs(state),
      onSubmit,
      allCheck,
      total
    };
  },
};
</script>

<style scoped>
.good-item {
  display: flex;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
}
.good-img > img {
  width: 100px;
  height: 100px;
}
.good-desc {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}
.price {
  color: red;
  size: 16px;
  line-height: 28px;
}
.good-title {
  display: flex;
  justify-content: space-between;
}
.good-btn {
  display: flex;
  justify-content: space-between;
}

.van-checkbox {
  width: 100px;
}

.van-icon::before{
  /* background: red; */
  content: '12';
}
.van-checkbox__icon--checked .van-icon {
  background: chartreuse;
  color: red;
}

.van-icon-success::before {
    content: '\F0C8';
}

</style>