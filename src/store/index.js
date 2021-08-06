import {createStore} from 'vuex'
import action from './action'
import state from './state'
import mutations from './mutations'

export default createStore({
    state,
    mutations,
    action
})