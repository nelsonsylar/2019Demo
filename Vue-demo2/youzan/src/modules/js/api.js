let url={
    hotLists:'index/hotLists',
    banner:'index/banner',
    topList:'category/topList',
    rank:'category/rank',
    subList:'category/subList',
    searchList:'search/list',
    goodsDetails:'goods/details',
    goodsDeal:'goods/deal',
    goodsEvaluation:'goods/evaluation',
    cartAdd:'cart/add',
    cartUpdate:'cart/update',
    cartList:'cart/list',
    cartReduce:'cart/reduce',
    cartRemove:'cart/remove',
    cartMrremove:'cart/mrremove',
    addressAdd:'address/add',
    addressRemove:'address/remove',
    addressList:'address/list',
    addressUpdate:'address/update',
    addressSetDefault:'address/setDefault'
}
//这里用host+url.xxx来代替整个网址,方便后期生产环境替换真实网址
let host='http://rap2api.taobao.org/app/mock/7058/'

for (let key in url) {
    if (url.hasOwnProperty(key)) {
        url[key] = host+url[key]
        //url.key = host+url.key
        //在for in遍历中,不能使用"对象.属性"的方式,因为会被自动转换为'对象.["属性"]'
        //详情见https://blog.csdn.net/weixin_41786576/article/details/87711760
    }
}
export default url
