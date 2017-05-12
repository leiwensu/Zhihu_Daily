<template>
      <div class="main">
          <date-item :article="articleData"></date-item>
          <div class="footer">
                <a @click="fetchData()" href="javascript:;">更多</a>
          </div>
      </div>
</template>

<script>
    import dateItem from './DateItem.vue'
    // import moreVue from './More.vue'
    import {format,sourceApi} from '../assets/js/common.js'
    export default {
      data () {
        return {
          articleData: [],
          day:-1
        }
      },
      mounted(){
        var _this = this;
        // 获取最新的文章
       _this.fetchData();
      },
      components: {
        dateItem
      },
      methods: {
        fetchData(){
          var _this = this;
          _this.day = _this.day+1;//每点击一次，时间往后退一天
          var str = _this.day*1000*60*60*24;
          var time = new Date(new Date()-str).Format('yyyyMMdd');
          _this.$http.get(sourceApi+'4/news/before/'+time).then(function(res){
            _this.articleData.push(res.data);
            console.log(res.data)
        }).catch(function(err){
            alert(err);
        })
        }
      }
    }
</script>