import React,{createContext,useReducer} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Mainnavbar from './Components/Mainnavbar';
import ErrorPage from './Components/ErrorPage';
import Logout from './Components/Logout';
import {iState,reducer} from './reducer/reducerFunc'

export const myContext=createContext()
function App() {
  const [state, dispatch] = useReducer(reducer, iState)
  return (
    <div className="App">
      <myContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
      <Mainnavbar/>
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
    </myContext.Provider>
    </div>
  );
}

export default App;
