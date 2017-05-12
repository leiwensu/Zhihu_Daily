<template>
  <div id="app" class="container">
    <loading v-show="loadingShow"></loading>
    <nav-vue v-show="headShow"></nav-vue>
    <!-- <home-vue></home-vue> -->
    <transition name="slide-down">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </transition>
  </div>
</template>

<script>
import navVue from './components/Nav.vue'
import {mapGetters} from 'vuex'
export default {
    name: 'app',
    computed:mapGetters([
            'headShow',
            'loadingShow'
        ]),
    mounted (){
        var path = this.$route.path;
        this.headerChange(path);
    },
    watch: {
        $route(to){
            var path=to.path;
            this.headerChange(path);
        }
    },
    methods: {
        headerChange(path) {
            if(path.indexOf('details') > 0 ){
                this.$store.dispatch('headHide')
            }else{
                this.$store.dispatch('headShow')
            }
        }
    },
    components: {
        navVue
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.slide-down-enter-active, .slide-down-leave-active {
    transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: 1;
    transform: translate3d(0, 6em, 0);
}
.slide-down-enter, .slide-down-leave-active {
    opacity: .1;
    transform: translate3d(0, 6em, 0);
}
</style>
