//import 数据 from '' 这里面可以获取数据
//import * as types from './type'

export default{

    /*头部信息*/
    headShow:({commit})=>{
        commit('headShow');
    },
    headHide:({commit})=>{
        commit('headHide');
    }
}