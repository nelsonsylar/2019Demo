import 'css/common.css'
import './category.css'
import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import foot from 'components/foot.vue'


var app = new Vue({
  el:'#app',
  data:{
    topLists:null,
    topIndex:0,
    rankData:null,
    subData:null
  },
  created() {
    this.getToplists()
    this.getSubLists(800,0)
    this.getRank()
  },
  methods:{
    getToplists(){
      axios.get(url.topList).then((res)=>{
        this.topLists=res.data.lists
      }).catch((err)=>{
        console.log(`error is ${err}`)
      })
    },
    getSubLists(id,index){
      this.topIndex=index
      if(index>0){
        axios.get(url.subList,{id}).then((res)=>{
          this.subData=res.data.data
        })
      }
    },
    getRank(){
      axios.get(url.rank).then((res)=>{
        this.rankData=res.data.data
      }).catch((err)=>{
        console.log(`error is ${err}`)
      })
    }
  },
  components:{
    foot
  }

})
