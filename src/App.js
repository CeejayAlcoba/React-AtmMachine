import logo from './logo.svg';
import './App.css';
import RoutesPage from './components/routes/Routes';
import NavigationBar from './components/commons/page/NavigationBar';
import { LogIn } from './components/apis/userApi';
import UnAuthorizeRoutes from './components/routes/UnautorizeRoutes';
import { useEffect } from 'react';
function App() {
  var getUser = sessionStorage.getItem('username');
  return (
    <div className="">
      {getUser?  <RoutesPage/>:<UnAuthorizeRoutes/>}
    </div>
  );
  
}

export default App;
