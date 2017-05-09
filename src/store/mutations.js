//import {HEAD_SHOW_SUCC,HEAD_SHOW_FAIL} from './type'

const state={
    headShow:true,
    loadingShow:true
};

const mutations={
    /*头部*/
    headShow (state){
        state.headShow=true;
    },
    headHide (state){
        state.headShow=false;
    },
    loadingShow (state){
        state.loadingShow = true;
    },
    loadingHide (state){
        state.loadingShow = false;
    }
};

const getters={
    headShow(state){
        return state.headShow;
    },
    loadingShow(state){
        return state.loadingShow;
    }
};

export default{
    state,
    mutations,
    getters
}