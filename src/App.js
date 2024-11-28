import { Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Dashboard from './Components/Dashboard';


function App() {
  return (
    <div>
            <Routes>
              <Route path = '/signin' element = {<SignIn/>} exact ={true}></Route>
              <Route path = '/signup' element = {<SignUp/>} exact ={true}></Route>
              <Route path = '/' element = {<Dashboard/>} exact ={true}></Route>
            </Routes>
    </div>
  );
}

export default App;
