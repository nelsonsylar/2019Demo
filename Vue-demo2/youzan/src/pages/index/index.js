import 'css/common.css'
import './index.css'
import swipe from'components/swipe.vue'
import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import foot from 'components/foot.vue'


import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)

new Vue({
  el: '.vue-el',
  data: {
    pageNum: 1,
    pageSize: 6,
    lists: null,
    loading: false,
    allLoaded: false,
    bannerLists: null
  },
  created() {
    this.getLists()
    this.getBanner()
  },
  methods: {
    getLists() {
      if (this.allLoaded) return//如果加载完了就不加载
      this.loading = true//这里让在请求的过程中不重复请求
      axios.get(url.hotLists, {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        let curLists = res.data.lists
        if(curLists.length < this.pageSize) {//如果某一次加载得到的lists数据长度不足6,说明已经加载完毕
          this.allLoaded = true
        }
        if (this.lists) {//如果this.lists存在,说明不是第一次加载
          this.lists = this.lists.concat(curLists)
        } else {//第一次加载
          this.lists = curLists
        }
        this.loading = false//请求完成后再让其复原,方便下次请求
      })
    },
    getBanner() {
      axios.get(url.banner).then(res => {
        this.bannerLists = res.data.lists
      })
    }
  },
  components: {
    foot,
    swipe
  }
})