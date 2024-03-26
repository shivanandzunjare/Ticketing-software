import axios from 'axios';
import React, { useEffect, useState } from 'react'
import api from '../Api';
import { toast } from 'react-toastify';

function ShowUser ()  {
    var [data, setData] = useState([]);

    const loginid = sessionStorage["loginid"];
    console.log(loginid);

   // console.log(sessionStorage["token"]);

    useEffect(() => {
        axios
         .get(api.URL + "/user/getAllUser")
         .then((result) => {
            console.log(result.data);
            setData(result.data)
            // toast.success(" User that are working currently", {
            //     position:'top-center',
            //     autoClose:2000,
            // })
         })
         .catch((err) => {
            console.log(err);
         })
    },[])
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                  <h4 className='text-center mt-5'> All Users Details: </h4>
                <div className='card'>
                    <div className='card-body'>
                 
                          <table className='table table-striped table-bordered'>
                              <thead>
                                  {/* fname , lname email contactno loginid, userrole password */}
                                  <tr>
                                      <th scope='col'>Sr. No</th>
                                      <th scope='col'>Users Name</th>
                                      <th scope='col'>Email </th>
                                      <th scope='col'>Mobile No </th>
                                      {/* <th scope='col'>LoginId </th> */}
                                      <th scope='col'>UserRole </th>
                                      {/* <th scope='col'>Password </th> */}
                                  </tr>
                              </thead>
                              <tbody>
                                  {data && data.length >= 0 && data.map((obj, num) => {
                                      return (
                                          <tr>
                                              <td>{num + 1}</td>
                                              <td>{obj.fname + " " + obj.lname}</td>
                                              <td>{obj.email}</td>
                                              <td>{obj.contactno}</td>
                                              {/* <td>{obj.loginid}</td> */}
                                              <td>{obj.userrole}</td>
                                              {/* <td>{obj.password}</td> */}

                                          </tr>
                                      )
                                  })

                                  }
                              </tbody>
                          </table>
                    </div>
                </div>
            </div>
        </div>
          </div>
        

    </div>

  )
}

export default ShowUser