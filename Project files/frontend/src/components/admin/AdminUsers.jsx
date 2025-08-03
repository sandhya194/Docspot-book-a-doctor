import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const AdminUsers = () => {

   const [users, setUsers] = useState([])

   const getUsers = async()=>{
      try {
         const res = await axios.get('http://localhost:8001/api/admin/getallusers', {
            headers: {
               Authorization : `Bearer ${localStorage.getItem("token")}`,
            },
         })
         if(res.data.success){
            setUsers(res.data.data)
            console.log(users)
         }
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(()=>{
      getUsers()

   },[])


   return (
      <div>
         <h4 className='p-3 text-center'>All Users</h4>
         
         <Container>
            <Table className='my-3' striped bordered hover>
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Phone</th>
                     <th>isAdmin</th>
                     <th>isDoctor</th>
                  </tr>
               </thead>
               <tbody>
                  {users.length > 0 ? (
                     users.map((user) => {

                        return (
                           <tr key={user._id}>
                              <td>{user.fullName}</td>
                              <td>{user.email}</td>
                              <td>{user.phone}</td>
                              <td>{user.type}</td>
                              <td>{user.isdoctor === true ? 'Yes' : 'No'}</td>
                              
                           </tr>
                        )
                     })
                  ) : (
                     <Alert variant="info">
                        <Alert.Heading>No Users to show</Alert.Heading>
                     </Alert>
                  )}
               </tbody>
            </Table>
         </Container>
      </div>
   )
}

export default AdminUsers
