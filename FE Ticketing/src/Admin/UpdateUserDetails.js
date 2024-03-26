import { useEffect, useState } from "react"
import api from "../Api";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/updateUser.css"

function UpdateUser() {
    const[data, setData] = useState();

    const loginid = sessionStorage["loginid"];
    console.log(loginid);

    useEffect(() => {
        init();

    }, [])
    
        const init =() => {
            axios
                .get(api.URL + "/user/getAllUser")
                .then((result) => {
                    console.log(result.data);
                    setData(result.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    
    function deleteUser(id)  {
        axios
        .delete(api.URL + "/user/del/" + id )
        .then((result) => {
            console.log(result);
            console.log(result.data);
            toast.success(" Deleted ")
            init();
            // setTimeout(() =>{
            //     window.location.reload();
            // },1000);
        })
        .catch((err) => {

            console.log(err);
            toast.error(" not yet deleted ")
        })

    }

    return (
        <div>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="text-center mt-5"> update all users details</h4>
                        
                        <div className="card">
                            
                            <div className="card-body">
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope='col'>Sr. No</th>
                                            <th scope='col'>First Name</th>
                                            <th scope='col'>Last Name</th>
                                            <th scope='col'>Email </th>
                                            <th scope='col'>Mobile No </th>
                                            <th scope='col'>LoginId </th>
                                            <th scope='col'>UserRole </th>
                                            <th scope='col'>Update </th>
                                            <th scope='col'>Delete </th>
                                            {/* <th scope='col'>Password </th> */}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {data && data.length >= 0 && data.map((obj, num) => {
                                            return (
                                                <tr>
                                                    <td>{num + 1}</td>
                                                    <td>{obj.fname }</td> 
                                                    <td>{obj.lname}</td>
                                                    <td>{obj.email}</td>
                                                    <td>{obj.contactno}</td>
                                                    <td>{obj.loginid}</td>
                                                    <td>{obj.userrole}</td>
                                                    <td>
                                                        <Link className="btn btn-sm btn-primary"
                                                           to={"user/edit/" +obj.id}>Update</Link>
                                                    </td>
                                                    <td>
                                                        <Link className="btn btn-sm btn-danger" 
                                                          onClick={() => deleteUser(obj.id)}>
                                                             Delete
                                                        </Link>

                                                    </td>
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

export default UpdateUser