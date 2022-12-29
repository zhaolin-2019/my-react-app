import { Suspense } from 'react'
import './App.css';
import http from './util/axios'
import {rootRoutes} from './routes/index'
import { HashRouter, Link, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import ConnectTest from './components/ConnectTest.jsx'


function App(props) {
  const navigate = useNavigate()

  function getfun(){
    console.log('调用get接口')
    http("get",'/getsomething').then(res=>{
      console.log('res',res)
    }).catch((err)=>{
      console.log('err',err)
    })
  }
  function addfun(){
    console.log('post接口，前端')
    http("post",'/add',{name:'zhaolin'}).then(res=>{
      console.log('res',res)
    })
  }

  function goto(){
    navigate('/noConnectTest');
  }
  return (
    <div className="App">
      <button onClick={getfun}>get</button>
      <button onClick={addfun}>post</button>
      {/* <HashRouter> */}
      {
        rootRoutes.map((routeItem,index)=>{
          return (
              <div key={index}>
                <Link to={routeItem.path}>{routeItem.name}</Link>
              </div>
          )
        })
      }
      <button onClick={goto}>点我跳转</button>

      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      {
        rootRoutes.map((routeItem,index)=>{
          return (
            <Route key={index} path={routeItem.path} element={<routeItem.component/>}></Route> 
          )
        })
      }
       <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
      </Routes>
      </Suspense>
      {/* </HashRouter> */}
    </div>
  );
}

export default App;
