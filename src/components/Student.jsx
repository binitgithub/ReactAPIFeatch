import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Student = () => {

const [student, setStudent] = useState([]);

useEffect(() =>{
    loadUser();
},[]);

const loadUser = async () =>{
    const result = await axios.get('https://localhost:7037/api/Students');
    setStudent(result.data);
}
  return (
    <div className='container'>
        <div className='row'>
        <table class="table shadow">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">DOB</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Gender</th>
                </tr>
            </thead>
            <tbody>
                {student.map((user, index) =>(
                    <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.dateOfBirth}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>{user.gender.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
    
  )
}

export default Student