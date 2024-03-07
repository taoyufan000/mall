<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机电话卡</a>
              <div class="children">
                <ul v-for="(item, i) in menuList" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a :href="sub ? '/#/product' + sub.id : ''">
                      <img v-lazy="sub ? sub.img : '/imgs/item-box-1.png'" />
                      {{ sub ? sub.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机电话卡</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机电话卡</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机电话卡</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机电话卡</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机电话卡</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机电话卡</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">手机电话卡</a>
            </li>
          </ul>
        </div>
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          navigation
          :pagination="{ clickable: true }"
          :autoplay="{ autoplay: true, delay: 3000, pauseOnMouseEnter: true }"
          :loop="{ loop: true, slidesPerview: 'auto' }"
          :effect="'coverflow'"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id">
              <img v-lazy="item.img" />
              <!-- <img src="../assets/slider/slide-1.jpg" alt=""> -->
              <!-- <img src="/imgs/slider/slide-1.jpg" alt=""> -->
            </a>
          </swiper-slide>
        </swiper>
      </div>
      <div class="ads-box">
        <a
          :href="'/#/product' + item.id"
          v-for="(item, index) in adsList"
          :key="index"
        >
          <img v-lazy="item.img" />
        </a>
      </div>
      <div class="banner">
        <a href="">
          <img v-lazy="'/imgs/banner-1.png'" alt="" />
        </a>
      </div>
    </div>
    <div class="product-box">
        <div class="container">
          <h2>手机</h2>
          <div class="wrapper">
            <div class="banner-left">
              <a href="/#/product/35"
                ><img v-lazy="'/imgs/mix-alpha.jpg'" alt=""
              /></a>
            </div>
            <div class="list-box">
              <div class="list" v-for="(arr, i) in phoneList" :key="i">
                <div class="item" v-for="(item, j) in arr" :key="j">
                  <span :class="{'new-pro' : j%2 ==0}">新品</span>
                  <div class="item-img">
                    <img v-lazy="item.mainImage" />
                  </div>
                  <div class="item-info">
                    <h3>{{item.name}}</h3>
                    <p>{{item.subtitle}}</p>
                    <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <modal 
      title="提示" 
      btnType="1" 
      modalType="middle" 
      :showModal="showModal"
      v-on:submit="goToCart"
      v-on:cancel="showModal=false"
      >
        <p>商品添加成功！</p>
      </modal>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCube,
  EffectCoverflow,
  EffectCards,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Modal from"../components/Modal"
import axios from 'axios'

export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
    Modal
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        Autoplay,
        EffectCube,
        EffectCoverflow,
        EffectCards,
      ],
    };
  },
  data() {
    return {
      swiperOption: {},
      slideList: [
        {
          id: "45",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-5.jpg",
        },
      ],
      menuList: [
        [
          {
            id: 30,
            img: "imgs/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 31,
            img: "imgs/item-box-2.png",
            name: "小米8青春版",
          },
          {
            id: 32,
            img: "imgs/item-box-2.png",
            name: "Redmi K20 pro",
          },
          {
            id: 33,
            img: "imgs/item-box-2.png",
            name: "小米CC9",
          },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png",
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg",
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png",
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg",
        },
      ],
      phoneList: [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ],
      showModal:false,
    };
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
        axios.get('/products',{
            params:{
                categoryId:100012,
                pageSize:14
            }
        }).then((res) => {
            res.list = res.list.slice(6,14)
            this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)]
        })
    },
    addCart(){
      this.showModal  =true;
      
      // axios.post('/carts',{
      //   productId:id,
      //   selected:true
      // }).then(() => {

      // }).catch(()=> {
      //   this.showModal  =true;
      // })
    },
    goToCart(){
      this.$router.push('/cart');
    }
  }
};
</script>
<style lang="scss">
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 2;
      padding: 26px 0;
      background-color: #55585a7a;
      box-sizing: border-box;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            position: relative;
            display: block;
            &:after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: " ";
              @include bgImg(10px, 15px, "../assets/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a {
                color: $colorB;
                font-size: 14px;
              }
              img {
                width: 42;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
    .swiper {
      .swiper-button-prev {
        left: 274px;
      }
      height: 451px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 50px;
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            span {
                display: inline-block;
                width: 67px;
                height: 24px;
                font-size: 14px;
                line-height: 24px;
                color: $colorG;
                &.new-pro{
                    background-color: #7ECF68;
                }
                &.kill-pro{
                    background-color: #e82626;
                }
                
            }
            .item-img {
              img {
                height: 195px;
                width: 100% ;
              }
            }
            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bold;
              }
              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  content: " ";
                  @include bgImg(22px, 22px, "../assets/icon-cart-hover.png");
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>