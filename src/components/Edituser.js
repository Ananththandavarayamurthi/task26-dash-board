import {useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useParams} from 'react-router-dom'
import React from 'react';
import {useNavigate} from 'react-router-dom'


function Edituser(props) {
    let params=useParams()
    let navigate=useNavigate()
    let [name,setName]=useState("");
    let [age,setAge]=useState("");
    let [email,setEmail]=useState("");
    let [batch,setBatch]=useState("");
    
    useEffect(()=>{
        if(params.id<props.data.student.length){
            setName(props.data.student[params.id].name)
            setAge(props.data.student[params.id].age)
            setEmail(props.data.student[params.id].email)
            setBatch(props.data.student[params.id].batch)
        }
        else{
            navigate('/navbar')
        }

    },[]
    )



    let handlesubmit=()=>{
      let newData ={name,age,email,batch}
      let data =[...props.data.student]
      data.splice(params.id,1,newData)
      props.data.setStudent(data) 
     navigate('/navbar')
  
    }

  return (
    <div className='mx-auto col-10'><Form>
    <Form.Group className="mb-3" >
      <Form.Label >Name</Form.Label>
      <Form.Control type="text" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" >
    <Form.Label>Age</Form.Label>
      <Form.Control type="text" value={age} placeholder="Age" onChange={(e)=>setAge(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" >
    <Form.Label>email</Form.Label>
      <Form.Control type="text" value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" >
    <Form.Label>batch</Form.Label>
      <Form.Control type="text" value={batch} placeholder="batch" onChange={(e)=>setBatch(e.target.value)}/>
    </Form.Group>
    
   
    <Button variant="primary" type="submit" onClick={()=>handlesubmit()}>
      Submit
    </Button>
  </Form></div>
  )
}

export default Edituser