import './App.css';
import React, { useState } from 'react';
import AddUser from './components/AddUser'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Edituser from './components/Edituser';

import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
function App() {

  let data = {
    earningMonthly:"40000",
    earningAnnualy:"480000",
    tasks:70,
    pendingRequst:22
  }


  let [student,setStudent]=useState([
    {
      name:"ananth",
      age:28,
      email:"ananth@gamil.com",
      batch:"tamil"
    },
    {
      name:"kumar",
      age:24,
      email:"kumar@gamil.com",
      batch:"tamil"
    },
    {
      name:"ashok",
      age:25,
      email:"ashok@gamil.com",
      batch:"tamil"
    },
    {
      name:"raj",
      age:23,
      email:"raj@gamil.com",
      batch:"tamil"
    }
  ])

const [Value,setValue] = useState("hi")

  return (
    <div id="wrapper">
        
  <BrowserRouter>
  <Sidebar />
        <Routes>
        
          <Route path='/navbar' element={<Navbar data={{data,setValue,Value,student,setStudent}}/>}/>
          <Route path='/addUser' element={<AddUser data={{data,setValue,Value,student,setStudent}}/>}/>
          <Route path='*' element={<Navigate to='./navbar'/>}/>
          <Route path='/edit-user/:id' element={<Edituser data={{student,setStudent}}/>}/>
        </Routes>
  
  </BrowserRouter>
    </div>
     
  );
    
  
}

export default App;
