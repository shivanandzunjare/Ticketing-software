import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../Api"


function Register() {
    const navigate = useNavigate();

    const {
        register,
        formState: { errors},
        handleSubmit,

    } = useForm();

    const onSubmit = (event) => {
  
        console.log(event);

        axios.post(api.URL + "/user/signUp",event) 
        .then(( result) =>{
            console.log(result.status);
            console.log(result.data);
            toast.success(" Registration successfully completed ! ",{
                position:'top-center',
                autoClose:2000,
            });
            setTimeout(() =>{
                navigate("/allUsers")
            }, 2000);  
        })

        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div>
            <div className="Form my-5 mx-3">
                <div className="container">
                    <div className="row" style={{ padding :" 10px"}}>
                        <div className="col-xl-5">
                            <img>
                            
                            </img>  
                             {/* fname , lname email contactno loginid, userrole password */}
                        </div>
                        <div className="col-lg px-5">
                            <h1 className="font-weight-bold py-3"> Welcome, Finite4</h1>
                            {/* <h4> Sign into your account</h4> */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <label> First Name :</label>
                                        <input type="text" name="fname"
                                        className="form-control" placeholder="First Name"
                                        {...register("fname", {required : true})}
                                        ></input>
                                        {errors.fname?.type === "required" && (
                                            <p role="alert" className="text-danger">
                                                required !!
                                            </p>
                                        )}
                                  </div>
                                    <br></br>
                                    <br></br>
                                


                                      <div className="col-xl-6">
                                            <label> Last Name:</label>
                                            <input type="text" name="lname"
                                            className="form-control" placeholder="Last Name"
                                            {...register("lname", {required : true})}
                                            ></input>
                                            {errors.lname?.type === "required" && (
                                                <p role="alert" className="text-danger">
                                                    required !!
                                                </p>
                                            )}
                                        </div>
                                </div>
                                <br></br>

                                <div className="row">
                                    <div className="col-xl-6">
                                        <label> Email:</label>
                                        <input type="text" name="email" 
                                        className="form-control" placeholder="Email"
                                        {...register("email", {
                                            required : true
                                        // pattern : /^\S+@\S+$/i,
                                           })}
                                        ></input>
                                        {errors.email?.type === "required" && (
                                            <p role="alert" className="text-danger">
                                                required !!

                                            </p>
                                        )}

                                        {/* { errors.email?.type === "pattern" && (
                                            <p role="alert" className="text-danger">
                                                Write in proper format
                                            </p>

                                        )} */}

                                    </div>
                            
                                    <div className="col-xl-6">
                                        <label> Contact No:</label>
                                        <input type="text" name=" contactno"
                                            className="form-control" placeholder="Contact Number"
                                            {...register("contactno", { 
                                                required: true
                                                // pattern: /^[0-9+-]+$/,
                                                // minLength : 10,
                                                // maxLength : 13,
                                            })}
                                        ></input>
                                        {errors.contactNumber?.type === "required" && (
                                            <p role="alert" className="text-danger">
                                                required !!
                                            </p>
                                        )}

                                        {/* { errors.contactNumber?.type === "pattern" && (
                                            <p role="alert" className="text-danger">
                                                 required !!
                                            </p>
                                        )}

                                        {errors.contactNumber?.type === "minLength" && (
                                            <p role="alert " className="text-danger">
                                                required !!
                                            </p>
                                        )}

                                        {errors.contactNumber?.type === "maxLength" && (
                                            <p role="alert " className="text-danger">
                                                required !!
                                            </p>
                                        )} */}
                                    </div>
                                </div>
                                <br></br>

                                <div className="row">

                                    <div className="col-xl-6">
                                        <label> Login ID:</label>
                                        <input type="text" name="loginid"
                                            className="form-control" placeholder="Login ID"
                                            {...register("loginid", { required: true
                                               // pattern: /^[a-zA-Z0-9_-]+$/,

                                            })}
                                        ></input>
                                        {errors.loginId?.type === "required" && (
                                            <p role="alert" className="text-danger">
                                                required !!
                                            </p>
                                        )}
                                        {/* 
                                        {errors.loginId?.type === "pattern" && (
                                            <p role="alert" className="text-danger"> 
                                                required !!

                                            </p>
                                        )} */}
                                    </div>
                                    <div className="col-xl-6">
                                        <label > User Role:</label><br/>

                                        <select name="userrole" id="userrole"
                                            
                                            {...register("userrole", { required: true })}>
                                            <option value="Admin">Admin</option>
                                            <option value="Client">Client</option>

                                        </select>

                                        {errors.userrole?.type === "required" && (
                                            <p role="alert" className="text-danger">
                                                required !!
                                            </p>
                                        )}
                             
                                    </div>
                          
                                   
                                </div>
                                <br></br>


                                <div className="row">
                                    <div className="col-xl-6">
                                        <label> Password:</label>
                                        <input type="password" name="password"
                                            className="form-control" placeholder="Password"
                                            {...register("password", {
                                                 required: true
                                                
                                                 })}
                                        ></input>
                                        {errors.password?.type === "required" && (
                                            <p role="alert" className="text-danger">
                                                required !!
                                            </p>
                                        )}

                                        {errors.password?.type === "pattern" && (
                                            <li  role="alert" className="text-danger"> 
                                                Passwords must be atleast 8 characters long, contain
                                                atleast 1 smallcap letter, 1 largecap letter, 1 special
                                                character and number.
                                            </li>
                                        )}
                                    </div>
                                </div>
                                <br></br>

                                <button className="btn btn-btn btn-success" type="submit">
                                    Submit
                                </button>
                             


                            
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register;