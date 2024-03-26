import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../../Api';
import {signin} from "../../slices/authSlice";
import { toast } from 'react-toastify';


function Admin  () {    // --->>>  Only for an admin login

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,             //get an array of registration 
        formState: {errors},      
        handleSubmit,   // for onsubmit event
        reset,
    } = useForm();

    const onSubmit = (event) => {
        console.log(event);
        axios
        .post(api.URL + "/user/signIn", event)
        .then((result) => {
            console.log(typeof result.data);
            dispatch(signin(result.data));
            //alert(" done")
            toast.success("Login success");
            setTimeout(() =>{
                navigate("/");

            }, 2000);
        })
        .catch((err) => {
            toast.error("Invalid");
            
           console.log(err);
            //alert(" error occured ")
        });
        reset();
    };
  return (
        <div>
            <div className="Form my-5 mx-3">
                <div className="container">
                  <div className='row' style={{ padding: "10px" }}>
                        <div className='col-xl-5' >
                            <h2> Welcome , Finite4</h2>
                            <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
                                <div className='form-row'>
                                    <div className='col-lg-7'>
                                        <input
                                            type='text'
                                            name='loginid'
                                            placeholder='LoginId'
                                            className='form-control my-2 p-2'
                                            {...register("loginid", {
                                                required: true,
                                               
                                            })}
                                        />
                                        {errors.loginid?.type === "required" && (
                                            <p role='alert' className='text-danger'>
                                                required !!
                                            </p>
                                        )}
                                        <span className='text-danger font-weight-bold'></span>
                                    </div>
                                </div>
                                <br></br>
                                <div className='form-row'>
                                   <div className='col-lg-7'>
                                      <input 
                                         type='password'
                                         name='password'
                                         placeholder='Password'
                                         className='form-control my-2 p-2'
                                         {...register("password",{
                                            required: true,
                                          })}>
                                      </input>
                                      {errors.password?.type === "required" && (
                                        <p role='alert' className='text-danger'>
                                            required !!
                                        </p>
                                      )}
                                      <span className="text-danger font-weight-bold"></span>
                                  </div>
                               </div>

                                <button className='btn btn-btn btn-success' > Login</button>
                                <br></br>

                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>
  )
}

export default Admin