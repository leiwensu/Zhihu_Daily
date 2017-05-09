<template>
    <div class="header">
        <ul class="nav">
            <router-link to="/home" tag="li" active-class="active">
                <a href="javascript:;">首页</a>
            </router-link>
            <router-link to="/daily" tag="li" active-class="active">
                <a href="javascript:;">主题日报</a>
            </router-link>
            <router-link to="/about" tag="li" active-class="active">
                <a href="javascript:;">关于</a>
            </router-link>
        </ul>
    </div>
</template>
<style scoped>
.header{
    position: fixed;
    top: 0;
    left: 0;
    background-color: #252e39;
    height: 1.44rem;
    width: 100%;
}
.header .nav{
    width: 100%;
    height: 100%;
    line-height: 1.44rem;
    text-align: center;
    display: flex;
}
.header .nav li{
    flex: 1;
}
.header .nav a{
    padding-bottom: 0.16rem;
    color: #fff;
}
.header .nav .active a{
    border-bottom: 2px solid #4cfffe;
}
</style>