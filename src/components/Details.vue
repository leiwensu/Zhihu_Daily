<template>
    <div class="details">
        <div class="feedback"><a href="javascript:;" onclick="window.history.go(-1)">返回</a></div>
        <div class="details_head" v-if="detailsData.image">
            <img :src="detailsData.image">
            <p class="details_title">{{detailsData.title}}</p>
            <p class="details_name">{{detailsData.image_source}}</p>
        </div>
        <div class="details_content">
            <!-- <h2>Ueli Steck滑坠身亡，我们失去了一位伟大的攀登家</h2>
            <p class="sm_title"><img src="../assets/images/0c76301ca41cd4feb97d.jpg">户外探险杂志，户外不是探险，人生才是。</p>
            <p class="sm_title from">文章来自机构账号：<span>户外探险杂志</span></p> -->
            <div class="main_content" v-html="detailsData.body"></div>
        </div>

    </div>
</template>
<script>
    import {sourceApi} from '../assets/js/common.js'
    export default {
        data() {
            return {
                detailsData:[]
            }
        },
        mounted(){
            this.fatchData(this.$route.params.id);
        },
        watch:{
            $route(to){
                var reg=/details\/\d+/;
                if(reg.test(to.path)){
                    let articleId = this.$route.params.id;
                    this.fatchData(articleId);
                }

            }
        },
        methods:{
            fatchData(id){
                let _this = this;
                _this.$http.get(sourceApi+'4/news/'+id).then(function(res){
                    _this.detailsData = res.data;
                }).catch(function(err){
                    alert(err);
                })
            }
        }
    }
</script>
<style scoped>
    @import url('http://news-at.zhihu.com/css/news_qa.auto.css?v=4b3e3');
    .details{
        background-color: #fff;
    }
    .feedback{
        position: fixed;
        top: 0;
        left: 0;
        height: 1.44rem;
        background: #252e39;
        width: 100%;
        line-height: 1.44rem;
        padding-left: .4rem;
        z-index: 9;
    }
    .feedback a{
        color: #fff;
    }
    .details_head{
        position: absolute;
        width: 100%;
        height: 200px;
        overflow: hidden;
    }
    .details_head img{
        width: 100%;
    }
    .details_head .details_title{
        font-size: 0.56rem;
        color: #fff;
        position: absolute;
        top: 0.1rem;
        line-height: 1rem;
        padding: 0.4rem;
        background: rgba(0, 0, 0, 0.2);
        width: 100%;
        box-sizing: border-box;
    }
    .details_head .details_name{
        color: #fff;
        position: absolute;
        bottom: 0.4rem;
        right: 0.4rem;
    }
    .sm_title{
        font-size: 12px;
        color: #ddd;
    }
    .sm_title img{
        width: 1rem;
        height: 1rem;
        margin-right: 0.2rem;
        border-radius: 50%;
        vertical-align: middle;
    }
    .from{
        padding-top: 0.2rem;
        border-bottom: 1px solid #000;
        padding-bottom: 0.1rem;
    }
    .main_content{
        padding: 0.1rem 0;
    }
</style>