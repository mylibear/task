import NavigationBar from './components/navigationBar/navigationBar.jsx';
import SideBar from './components/sideBar/sideBar.jsx';
import PetBar from './components/petBar/petBar.jsx';
import Home from './pages/Home/home.jsx';
import Login from "./pages/Auth/Login";
import SetAvatar from "./pages/Auth/SetAvatar";
import SetPet from "./pages/Auth/SetPet";
import SelectedPet from "./pages/Auth/SelectedPet";
import Register from "./pages/Auth/Register";
import Calendar from './pages/Calendar/calendar.js';
import PetStore from './pages/petStore/petStore.js'
import TeamManagement from './pages/TeamManagement/teamManagement.jsx'
import TaskManager from './pages/taskManager/taskManager.jsx'
import Grades from './pages/Grades/grade.jsx'
import Chat from './pages/Chat/chat';
import Feedback from './pages/Chat/feedback';
import Conflicts from './pages/teamConflict/teamConflict.jsx';
import './App.css'
import './auth.css'
import { useEffect } from 'react'
import React from 'react'

import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";
import { UserContext, CoinContext } from './components/storeHeader/context.js';

function App() {
  useEffect(() => {
    console.log('hi');
  }, []);
  return (
    <UserContext.Provider value = {80}>
      <CoinContext.Provider value = {3}>
    <Router>
    
      {/* <NavigationBar/> */}
    <div>
      {/* <SideBar/> */}
      <div className= 'MainPage'>
      <Routes>
        <Route exact path ='/' element={<Home />} />
        <Route path ='/calendar' element={<Calendar />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/setPet" element={<SetPet />} />
        <Route path="/selectedPet" element={<SelectedPet />} />
        <Route path = '/teamManagement' element={<TeamManagement />} />
        <Route path = '/petStore' element={<PetStore />} />
        <Route path = '/taskManager' element={<TaskManager />} />
        <Route path = '/grade' element={<Grades />} />
        <Route path = '/chat' element={<Chat />} />
        <Route path = '/feedback' element={<Feedback />} />
        <Route path = '/diversity' element={<Conflicts />} />
      </Routes>
      </div>
      {/* </div> */}
       {/* <PetBar/> */}
      </div>
    </Router>
    </CoinContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
