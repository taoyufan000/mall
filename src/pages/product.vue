<template>
  <div class="product">
    <product-param v-bind:title="product.name">
      <template v-slot:buy>
        <button class="btn" @click="buy">立即购买</button>
      </template>
    </product-param>

    <div class="content">
      <div class="item-video">
        <h2>60帧超慢动作摄影<br />慢慢回味每一瞬间的精彩</h2>
        <p>
          后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br />更能AI
          精准分析视频内容，15个场景智能匹配背景音效。
        </p>
        <!-- <div class="video-bg" @click="showSlide=true"></div> -->
        <div class="video-bg" @click="showSlide='slideDown'"></div>
        <div class="video-box" v-if="showSlide">
          <!-- <div class="overlay" v-if="showSlide"></div> -->
          <div class="overlay" ></div>
          <!-- <div class="video" v-bind:class="{'slide':showSlide}"> -->
          <div class="video" v-bind:class="showSlide">
            <!-- <span class="icon-close" @click="showSlide=false"></span> -->
            <span class="icon-close" @click="closeVideo"></span>
            <video
              src="../assets/product/video.mp4"
              controls="controls"
              autoplay
              muted
            ></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductParam from "../components/ProductParam";
export default {
  name: "product",
  components: {
    ProductParam,
  },
  data(){
    return{
        //控制动画效果
        // showSlide:false
        showSlide:'',
        //  商品信息
        product:{},
    }
  },
  mounted(){
    this.getProductInfo();
  },
  methods:{
    getProductInfo(){
        let id = this.$route.params.id;
        this.$axios.get(`/products/${id}`).then((res)=>{
            this.product = res;
        })
    },
    buy(){
        let id = this.$route.params.id;
        this.$router.push(`/detail/${id}`);
    },
    closeVideo(){
        this.showSlide='slideUp';
        setTimeout(()=>{
            this.showSlide='';
        },600)
    }
  }
};
</script>
<style lang="scss">
@import '../assets/scss/mixin.scss';
.product {
  .h {
    height: 150px;
  }
  .item-video{
        height:1044px;
        background-color:#070708;
        margin-bottom:76px;
        color:#FFFFFF;
        text-align:center;
        h2{
          font-size:60px;
          padding-top:82px;
          margin-bottom:47px;
        }
        p{
          font-size:24px;
          margin-bottom:58px;
        }
        .video-bg{
          background:url('../assets/product/gallery-1.png') no-repeat center;
          background-size:cover;
          width:1226px;
          height:540px;
          margin:0 auto 120px;
          cursor:pointer;
        }
        .video-box{
            
            .overlay{
                @include position(fixed);
                background-color: #cccccc;
                opacity: .4;
                z-index: 10;
            }
            @keyframes slideDown{
                from{
                    top: -50%;
                    opacity: 0;
                }
                to{
                    top: 50%;
                    opacity: 1;
                }
            }
            @keyframes slideUp{
                from{
                    top: 50%;
                    opacity: 1;
                }
                to{
                    top: -50%;
                    opacity: 0;
                }
            }
            .video{
                position: fixed;
                top: -50%;
                left: 50%;
                transform: translate(-50%,-50%);
                z-index: 10;
                width: 1000px;
                height: 536px;
                // opacity: 0;
                opacity: 1;

                // transition:all .6s;
                // &.slide{
                //     top: 50%;
                //     opacity: 1;
                // }
                &.slideDown{
                    animation: slideDown .6s linear;
                    top: 50%;
                }
                &.slideUp{
                    animation: slideUp .6s linear;
                }
                .icon-close{
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    @include bgImg(20px,20px,'../assets/icon-close.png');
                    cursor:pointer;
                    z-index: 11;
                }
                video{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    outline: none;
                }
            }
        }
  }
}
</style>