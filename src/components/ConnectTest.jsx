import React, {Component} from 'react';
import { connect } from "react-redux";  // 通过此方法实现store 模块化对应的操作
import {addAction,deleteAction} from '../store/action'
import { ADD_NUM,DELETE_NUM } from "../store/constants";

// const toAdd = () => {
//     store.dispatch(addAction(2))
//    console.log('store',store.getState().counter)
// }
// const toDelete = () => {
//     store.dispatch(deleteAction(2))
// }
const mapStateToProps = (state) => {
    return {
       counter:state.counter
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        toAdd: () => {
            dispatch(addAction(2))//调用addAction(2)其实就是返回{type:DELETE_NUM,num:2}
        },
        toDelete: () => {
            dispatch({type:DELETE_NUM,num:2})
        }
    }
}
class NoConnectTest extends Component {
    constructor(props){
        super(props)
    }

    render(){
        //别忘了这个
        const {counter,toAdd,toDelete} = this.props

        return (
           <div>
                <button onClick={toAdd}>+</button>{counter}
                <button onClick={toDelete}>-</button>
           </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoConnectTest);  // 暴露必须使用connect方法连接