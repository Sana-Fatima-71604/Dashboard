import { Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import DashboardSample from './Components/DashboardSample'
import ReactCalendar from './Components/ReactCalendar';


function App() {
  return (
    <div>
            <Routes>
              <Route path = '/signin' element = {<SignIn/>} exact ={true}></Route>
              <Route path = '/signup' element = {<SignUp/>} exact ={true}></Route>
              <Route path = '/' element = {<DashboardSample/>} exact ={true}></Route>
              <Route path = '/Calendar' element = {<ReactCalendar/>} exact ={true}></Route>
            </Routes>
    </div>
  );
}

export default App;
