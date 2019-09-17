import './index.css'
import 'css/common.css'
import axios from 'axios'//注意导入都是小写,且需要用引号括起来
import Vue from 'vue'
import url from 'js/api.js'
// import foot from 'componens/foot.vue'
//注释为学习笔记
//这里由于我在webpack配置文件写了alias
//'css':'@/modules/css/',
//'js':'@/modules/js/',
//另外一切皆为模块,css由js导入,并且webpack的配置会识别相应文件夹的相同名.js并自动加载
//所以此index.js为入口

//vue导入并且需要new Vue作为入口,并以el:'#xxx'挂载,并且范围要小于html的body
//axios需要先安装再导入
var app = new Vue({
    el:'#app',
    data:{
        lists:null
    },
    created(){
        
        axios.get(url.hotList,{
            pageNum:0,
            pageSize:6,
        }).then((response)=>{
            this.lists=response.data.lists
        }).catch((error)=>{
            console.log('Fail to get data'+error)
        })
    },
    // components:{
    //     foot
    // }
})
