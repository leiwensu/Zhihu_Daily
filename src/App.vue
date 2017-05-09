<template>
  <div id="app" class="container">
    <nav-vue v-show="headShow"></nav-vue>
    <!-- <home-vue></home-vue> -->
    <router-view></router-view>
  </div>
</template>

<script>
import navVue from './components/Nav.vue'
import {mapGetters} from 'vuex'
export default {
    name: 'app',
    computed:mapGetters([
            'headShow'
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
</style>
