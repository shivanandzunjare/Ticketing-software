import axios from "axios";
import { useEffect, useState } from "react";
import api from "../Api";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";


function EditUser() {

    const navigate = useNavigate();


    const [user, setUser] = useState({
        fname:"",
        lname:"",
        email:"",
        contactno:"",
        loginid:"",
        userrole:"",
        password:"",

    });
    // const loginid = sessionStorage["loginid"];
    // console.log(loginid);

    const { id } = useParams();
    console.log(id);

    useEffect(() =>{
        axios
        .get(api.URL + "/user/getById/"+id)
        .then((result) => {
            console.log(result);
            console.log(result.data);
            setUser(result.data);

        })
        .catch((err) => {
            console.log(err);
            toast.error("error ")
        })
    },[])

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value });

    };

    const UserUpdate = (e) =>{
        e.preventDefault();

        axios
        .put(api.URL +"/user/update",user)
        .then((result) => {
           
            console.log(result);
            console.log(result.data);
            toast.success("updated ");
            setUser({
                fname: "",
                lname: "",
                email: "",
                contactno: "",
                loginid: "",
                userrole: "",
               // password: "",

            });
            navigate("/allusers")


        })
        .catch((err) => {
            console.log(err);
            toast.error("error ")
        })
    }

   
    return (
        <div>
            
            <div className="container">
                <div className="row">
                    <div className="text-center">
                        <h3>edit </h3>
                    </div>
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                           
                            <div className="card-body">
                                {/* fname , lname email contactno loginid, userrole password */}
                                <form onSubmit={(e) => UserUpdate(e)}>
                                        <div className="mb-3">
                                            <label> First Name :</label>
                                            <input type="text" name="fname"
                                                className="form-control" placeholder="First Name"
                                                onChange={(e) => handleChange(e)}
                                                value={user.fname}

                                            ></input>
                                        </div>
                                      
                                       
                                       <div className="mb-3">
                                            <label> Last Name:</label>
                                            <input type="text" name="lname"
                                                className="form-control" placeholder="Last Name"   
                                            onChange={(e) => handleChange(e)}
                                            value={user.lname}                                           
                                            ></input>
                                        </div>                                  
                                      

                                        <div className="mb-3">
                                            <label> Email:</label>
                                            <input type="text" name="email"
                                                className="form-control" placeholder="Email"
                                            onChange={(e) => handleChange(e)}
                                            value={user.email}
                                               
                                            ></input>                                           
                                        </div>

                                        <div className="mb-3">
                                            <label> Contact No:</label>
                                            <input type="text" name=" contactno"
                                                className="form-control" placeholder="Contact Number"
                                            onChange={(e) => handleChange(e)}
                                            value={user.contactno}
                                                
                                            ></input>                                           
                                        </div>
                                 
                                        <div className="mb-3">
                                            <label> Login ID:</label>
                                            <input type="text" name="loginid"
                                                className="form-control" placeholder="Login ID"
                                            onChange={(e) => handleChange(e)}
                                            value={user.loginid}
                                                
                                            ></input>
                                        </div>

                                        <div className="mb-3">
                                            <label > User Role:</label>

                                            <select name="userrole" id="userrole"
                                            onChange={(e) => handleChange(e)}
                                            value={user.userrole}>
                                                <option value="Admin">Admin</option>
                                                <option value="Client">Client</option>

                                            </select>
                                        </div>
                                       
                                        {/* <div className="mb-3">
                                            <label> Password:</label>
                                            <input type="password" name="password"
                                                className="form-control" placeholder="Password"
                                            onChange={(e) => handleChange(e)}
                                            value={user.password}
                                               
                                            ></input>
                                           
                                        </div> */}
                                                                       
                                     <button className="btn btn-btn btn-success" type="submit">
                                        Submit
                                      </button>
                                </form>                             
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EditUser