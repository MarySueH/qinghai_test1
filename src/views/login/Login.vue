<template>
    <div class="container">

    </div>
</template>
<script>
import mock from '../../mock/index.js'
import axios from 'axios';
export default {
    data(){
        return{

        }
    },
    methods:{
        getList(){
            axios.post('/user/userinfo').then(res=>{
                console.log(res)
            })
        }
    },
    mounted(){
        // this.getList()
    }
}
</script>
<style lang="scss" scoped>
.container{
    
}
</style>