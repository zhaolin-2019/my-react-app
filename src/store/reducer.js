import {ADD_NUM,DELETE_NUM} from "./constants"
//默认的初始化state
const initialState = {
  counter:8
}
//处理收到的action事件
//reducer是纯函数，不能修改参数
export default function reducer(state = initialState,action){
  switch(action.type){
        case ADD_NUM:
            console.log('add action',action)
            return {
              ...state,
              counter:state.counter+action.num
            }
        case DELETE_NUM:
        return {
            ...state,
            counter:state.counter-action.num
        }
      default:
          return state
  }
}