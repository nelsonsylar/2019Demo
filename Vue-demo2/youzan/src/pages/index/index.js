import './index.css'
import 'css/common.css'
import axios from 'axios'//注意导入都是小写,且需要用引号括起来
import Vue from 'vue'
import url from 'js/api.js'
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);
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
        lists:null,
        pageNum:1,
        pageSize:6,
        loading:false,
        allLoaded:false,
    },
    created(){
        this.getHotlist()
    },
    methods:{
        getHotlist(){
                axios.get(url.hotList,{
                    pageNum:this.pageNum,
                    pageSize:this.pageSize
                }).then((response)=>{
                    this.lists= response.data.lists
                    console.log('执行了一次')
                })
        }
    }
            // if(this.allLoaded===true) return  
                // axios.get(url.hotList,{
                //     pageNum:this.pageNum,
                //     pageSize:this.pageSize,
                // }).then((response)=>{
                //     let currentList=response.data.lists
                //     if(this.lists){
                //         this.lists= this.lists.concat(currentList)
                //         console.log('走的1')
                //     }else{
                //         this.lists=currentList
                //         console.log('走的2')
                //     }
                //     this.pageNum++
                //     // this.loading=true
                // }).catch((error)=>{
                //     console.log('Fail to get data'+error)
                // })
                // this.pageNum++
                // this.loading=true
                  
        

    
    // components:{
    //     foot
    // }

})
