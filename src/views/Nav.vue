<template>
    <div class="home">
        <div class="nav"></div>
        <div class="container">
            <div class="leftNav">
            <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
                @select="handleSelect">
                <el-menu-item index="/home">
                <template>
                    <i class="el-icon-goods"></i>
                    <span>首页</span>
                </template>
                    
                </el-menu-item>
                <el-menu-item index="/index">
                 <template>
                    <i class="el-icon-goods"></i>
                    <span>关于</span>
                </template>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="rightCont">
            <router-view></router-view>
        </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: "Nav",
        data() {
            return {

            }
        },
        methods: {
            handleSelect(key, keypath) {
                console.log(key, keypath)
                this.$router.push(key + "")
            }
        }
    };
</script>
<style lang="scss" scoped>
.container{
    display: flex;
    flex-direction: row;
}
    .leftNav {
        width: 200px;
    }
    .rightCont{
        flex-grow: 1;
    }
</style>