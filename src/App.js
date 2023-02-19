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
import { useState } from 'react';


function App() {
  const [hackid,setHackid]=useState('');
  const [teamid,setTeamId]=useState('');
  const [userid,setUser]=useState('');
  return (
    <Router>
      <div>
        <Routes>
        <Route element={<Home/>} exact path="/" />
        <Route element={<SignIn/>} exact path="/signup" />
        <Route element={<LogIn/>} exact path="/login" />
        <Route element={<User setUser={setUser} hackid={hackid} setHackid={setHackid} teamid={teamid} setTeamId={setTeamId} />} exact path="/user" />
        <Route element={<Organizer />} exact path="/org" />
        <Route element={<Chat hackid={hackid} setHackid={setHackid} teamid={teamid} setTeamId={setTeamId} userid={userid}  />}  path="/chat" />
        </Routes>
       
      </div>
    </Router>
  )
}


export default App;
