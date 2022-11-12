
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
function AddUser(props) {

  let [name,setName]=useState("");
  let [age,setAge]=useState("");
  let [email,setEmail]=useState("");
  let [batch,setBatch]=useState("");
  let navigate=useNavigate()
  let handlesubmit=()=>{
    let newData ={name,age,email,batch}
    let data =[...props.data.student]
    data.push(newData)
    props.data.setStudent(data) 
   navigate('/navbar')

  }
  
  return (
   
    
  
        <div className='mx-auto col-10'><Form>
        <Form.Group className="mb-3" >
          <Form.Label >Name</Form.Label>
          <Form.Control type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="Age" onChange={(e)=>setAge(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>email</Form.Label>
          <Form.Control type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>batch</Form.Label>
          <Form.Control type="text" placeholder="batch" onChange={(e)=>setBatch(e.target.value)}/>
        </Form.Group>
        
       
        <Button variant="primary" type="submit" onClick={()=>handlesubmit()}>
          Submit
        </Button>
      </Form></div>
    
  );
}

export default AddUser