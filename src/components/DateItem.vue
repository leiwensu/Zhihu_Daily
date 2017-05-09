<template>
<div>
    <div class="date_item" v-for="item in article">
        <h2>{{item.date.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')}}</h2>
        <div class="list_item" v-for="story in item.stories">
            <router-link :to="{name:'Details',params:{id:story.id}}">
                <p class="news_title">{{story.title}}</p>
                <p class="news_pic"><img :src="story.images[0]" alt=""></p>
            </router-link>
        </div>
    </div>
</div>
    
</template>
<script>
    export default {
         props: ['article']
    }
</script>