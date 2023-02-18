import logo from './logo.svg';
import './App.css';
import './style.css'
import Home from './views/home'
import SignIn from './views/signup'
import LogIn from './views/log-in'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import User from './views/user';
import Organizer from './views/organizer';
import Chat from './pages/chat-page';


function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route element={<Home/>} exact path="/" />
        <Route element={<SignIn/>} exact path="/signup" />
        <Route element={<LogIn/>} exact path="/login" />
        <Route element={<User />} exact path="/user" />
        <Route element={<Organizer />} exact path="/org" />
        <Route element={<Chat />}  path="/chat" />
        </Routes>
       
      </div>
    </Router>
  )
}


export default App;
