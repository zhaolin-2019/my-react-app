import logo from './logo.svg';
import './App.css';
import http from './util/axios'
import NoConnectTest from './components/NoConnectTest.jsx'
import ConnectTest from './components/ConnectTest.jsx'

function App() {
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
  return (
    <div className="App">
      <button onClick={getfun}>get</button>
      <button onClick={addfun}>post</button>
      <NoConnectTest></NoConnectTest>
      <ConnectTest></ConnectTest>
    </div>
  );
}

export default App;
