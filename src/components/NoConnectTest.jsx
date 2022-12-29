import React, {Component} from 'react';
import { connect } from "react-redux";  // 通过此方法实现store 模块化对应的操作
import store from '../store/index'
import {addAction,deleteAction} from '../store/action'
const toAdd = () => {
    store.dispatch(addAction(2))
   console.log('store',store.getState().counter)
}
const toDelete = () => {
    store.dispatch(deleteAction(2))
}
class NoConnectTest extends Component {
    constructor(props){
        super(props)
        this.state={
          counter:store.getState()
        }
    }

    componentDidMount(){
        //store.subscribe函数是用来去订阅 store 的变化，每次对 store 进行 dispatch(action) 都会触发
        //监听的原因是每次通过dispatch 修改数据的时候，其实只是数据发生了变化，如果不手动调用 render方法（setState），页面上的内容是不会发生变化的。
        //可通过 react-redux 提供的 Provider、connect 高阶函数实现 store 的改变触发 render 重新渲染
        store.subscribe(() => {
            const state = store.getState()
            this.setState({ counter: state.counter })
          })
    }

    render(){
        return (
           <div>
                <button onClick={toAdd}>+</button>{store.getState().counter}
                <button onClick={toDelete}>-</button>
           </div>
        )
    }
}
export default NoConnectTest