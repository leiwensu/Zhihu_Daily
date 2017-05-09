<template>
    <div class="main">
            <div class="daily_item" v-for="item in themeData">
                <router-link :to="{name:'DailyList',params:{id:item.id}}">
                    <p class="daily_item_pic">
                        <img :src="item.thumbnail" alt="">
                    </p>
                    <div class="daily_item_con">
                        <p class="daily_item_title">{{item.name}}</p>
                        <p class="daily_item_brief">{{item.description}}</p>
                    </div>
                </router-link>
            </div>
        </div>
</template>
<script>
import {sourceApi} from '../assets/js/common.js'
    export default{
        data () {
            return{
                themeData:[]
            }
        },
        mounted(){
           var _this = this;
           _this.$http.get(sourceApi+'4/themes').then(function(res){
                _this.themeData = res.data.others;
           }).catch(function(err){
                alert(err);
           })
        }
    }
</script>
<style scoped>
/* 主题日报页 */
.daily_item{
    background-color: #fff;
    margin-top: 0.4rem;
}
.daily_item_pic{
    height: 3.36rem;
    overflow: hidden;
}
.daily_item_pic img{
    width: 100%;
}
.daily_item_con{
    padding: 0.4rem;
}
</style>