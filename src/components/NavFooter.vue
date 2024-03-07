<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="../assets/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://coding.imooc.com/class/397.html" target="_blank">河畔一角主页</a><span>|</span>
            <a href="https://coding.imooc.com/class/397.html" target="_blank">河畔一角主页</a><span>|</span>
            <a href="https://coding.imooc.com/class/397.html" target="_blank">河畔一角主页</a><span>|</span>
            <a href="https://coding.imooc.com/class/397.html" target="_blank">河畔一角主页</a>
        </div>
        <div class="copyright">Copyright © 2024 <span class="domain">imooc.com</span> All Rights Reserved</div>
    </div>
</template>
<script>
export default{
    name:'nav-footer'
}
</script>

<style lang="scss">
    .footer{
        height: 234px;
        border-top:4px solid #FF6600;
        background-color: #333333;
        color: #999999;
        font-size: 16px;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color: #999999;
                display: inline-block;
            }
            span{
                margin: 0 10px;
            }
            margin-bottom: 13px;
        }
        .copyright{
            .domain{
                color:#FF6600;
            }
        }
    }
</style>