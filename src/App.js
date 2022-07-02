import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './componants/Home/Home';
import Signin from './componants/authentication/signIn/Signin';
import SignUp from './componants/authentication/SignUp/SignUp';
import Courses from './componants/Home/page2/Courses';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='courses' element={<Courses />}></Route>
        <Route path='signin' element={<Signin />}></Route>
        <Route path='signup' element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
