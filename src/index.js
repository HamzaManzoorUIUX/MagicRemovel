import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import UserContext from './context';

// import 'bootstrap/dist/css/bootstrap-grid.min';
// import 'bootstrap/dist/css/bootstrap-reboot.min';
import 'font-awesome/css/font-awesome.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';
import Login from './pages/loginNew'
const APs=  ()=>{
  const [user,setUserstate]=React.useState(null);
  React.useEffect(()=>{
   try
   {
   const dataGet= localStorage.getItem('loginData');
    if(dataGet && dataGet!=null)
    {
      setUserstate(dataGet)
    }
  }
   catch
   {

   }

  },[])
   return <UserContext.Provider value={{user,setUserstate}}>
       {
       (user!=null? <App />:<Login/>)
     }
 
    </UserContext.Provider>
 }
ReactDOM.render(
  <React.StrictMode>
   <APs/>
  </React.StrictMode>
,
  document.getElementById('root')
);

