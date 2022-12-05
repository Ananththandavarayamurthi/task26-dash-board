import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from 'react-router-dom'
function Navbar(props) {

    let handledelete =(i)=>{
      let newdata =  [...props.data.student]
      newdata.splice(i,1)
      props.data.setStudent(newdata)
    }
    let navigate=useNavigate()
    
  return (
    
            <div id="content" className='mx-auto col-10 '>

              
                {/* <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">

{/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}

<div className="topbar-divider d-none d-sm-block"></div>
                {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
             </div>
             {/* <!-- Content Row --> */}
               

               

                   
                    </div>
                
                 


                </ul>
                <div>
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>serial number</th>
          <th>Name</th>
          <th>Age</th>
          <th>email</th>
          <th>batch</th>
       
        </tr>
      </thead>
      <tbody>  
        {

            
            props.data.student.map((user,i)=>{
            return <tr key={i} >
          <td>{i+1}</td>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.email}</td>
          <td >{user.batch}&nbsp;&nbsp;<Button variant="primary" onClick={()=>navigate(`/edit-user/${i}`)}><EditIcon/>&nbsp;edit</Button>&nbsp;
          <Button variant="danger" className='mx-auto' onClick={()=>handledelete(i)} ><DeleteIcon/>&nbsp;delete</Button></td> 
          
          
          
          
        </tr>
            })
        }

        
        
      </tbody>
    </Table>
                </div>
            </div>
           
    
        )
}

export default Navbar