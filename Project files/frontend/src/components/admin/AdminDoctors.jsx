import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { message } from 'antd';

const AdminDoctors = () => {

   const [doctors, setDoctors] = useState([])

   const getDoctors = async () => {
      try {
         const res = await axios.get('http://localhost:8001/api/admin/getalldoctors', {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         })
         if (res.data.success) {
            setDoctors(res.data.data)
         }
      } catch (error) {
         console.log(error)
         message.error('something went wrong')
      }
   }

   const handleApprove = async (doctorId, status, userid) => {
      console.log(doctorId, status, userid)
      try {
         const res = await axios.post('http://localhost:8001/api/admin/getapprove', { doctorId, status, userid }, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         })

         if (res.data.success) {
            message.success(res.data.message)
         }
         console.log(res)
      } catch (error) {
         console.log(error)
         message.error('something went wrong')
      }
   }

   const handleReject = async (doctorId, status, userid) => {
      console.log(doctorId, status, userid)
      try {
         const res = await axios.post('http://localhost:8001/api/admin/getreject', { doctorId, status, userid }, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         })

         if (res.data.success) {
            message.success(res.data.message)
         }
         console.log(res)
      } catch (error) {
         console.log(error)
         message.error('something went wrong')
      }
   }


   useEffect(() => {
      getDoctors()

   }, [])


   return (
      <div>
         <h2 className='p-3 text-center'>All Doctors</h2>

         <Container>
            <Table striped bordered hover>
               <thead>
                  <tr>
                     <th>Key</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Phone</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {doctors.length > 0 ? (
                     doctors.map((user) => {
                        return (
                           <tr key={user._id}>
                              <td>{user._id}</td>
                              <td>{user.fullName}</td>
                              <td>{user.email}</td>
                              <td>{user.phone}</td>
                              <td>{user.status === 'pending' ?
                                 <Button onClick={() => handleApprove(user._id, 'approved', user.userId)} className='mx-2' size='sm' variant="outline-success">
                                    Approve
                                 </Button>
                                 :
                                 <Button onClick={() => handleReject(user._id, 'rejected', user.userId)} className='mx-2' size='sm' variant="outline-danger">
                                    Reject
                                 </Button>}</td>
                           </tr>
                        )
                     })
                  ) : (
                     <tr>
                        <td colSpan={5}>
                           <Alert variant="info">
                              <Alert.Heading>No Doctors to show</Alert.Heading>
                           </Alert>
                        </td>
                     </tr>

                  )}
               </tbody>
            </Table>
         </Container>
      </div>
   )
}

export default AdminDoctors
