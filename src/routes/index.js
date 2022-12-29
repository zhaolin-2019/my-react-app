//react-router不可以通过dom操作， react-router-dom在react-router的基础上提供了HashHistory,link等api
import React from 'react'
import ConnectTest from '../components/ConnectTest.jsx'
import NoConnectTest from '../components/NoConnectTest.jsx'
export const rootRoutes = [
    // {
    //     name:'home',
    //     path:'/',
    //     component:ConnectTest,
    // },
    // {
    //     name:'connectTest',
    //     path:'/connectTest',
    //     component:ConnectTest,
    // },
    // {
    //     name:'noConnectTest',
    //     path:'/noConnectTest',
    //     component:NoConnectTest,
    // },
    {
        name:'connectTest',
        path:'/connectTest',
        component:React.lazy(()=>import('../components/ConnectTest.jsx')),
    },
    {
        name:'noConnectTest',
        path:'/noConnectTest',
        component:React.lazy(()=>import('../components/NoConnectTest.jsx')),
    },

]