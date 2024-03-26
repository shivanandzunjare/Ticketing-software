import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../Api';
import { toast } from 'react-toastify';

 function ResetPassword  ()  {
    let navigate = useNavigate();
    const {
            register,
            handleSubmit,
            reset,
            formState:{errors},
        } = useForm();

    const onsubmit = (event) => {
        console.log(event);
        axios
        .post(api.URL + "/user/reset",event)
        .then((result) => {
            console.log(result.data);
            if(result.data === "Password gets updated"){
                toast.success(result.data,{
                    position:'top-center',
                    autoClose:1000
                });
                navigate("/login")
            }
            else{toast.error(result.data,{
                position:"top-center",
                autoClose:1000
            });
        }

        })
        .catch((err) => {
            console.log(err);
            toast.error("error")
        });
        reset();
    }

  return (
    <div className='container'>
          <h4 className='text-center '>Reset Your Password</h4>
          <div >
              <div className='row' style={{ padding: "20px" }}>
                <div className='col-xl-5'>

                </div>
                <div className='col-xl-5'>
                    <form onSubmit={handleSubmit(onsubmit)}>
                          <div className='form-row'>
                              <div className='col-lg-5'>
                                  <div>
                                    <input type='text'
                                        name="loginid"
                                        placeholder='LoginId'
                                          className='form-control my-3 p-2'
                                          {...register("loginid",{
                                            required :true
                                          })}
                                        >
                                    </input>
                                    {errors.loginid?.type === "required " && (
                                        <p role='alert' className='text-danger'>
                                            LoginId is required 
                                        </p>
                                    )}
                                    
                                  </div>
                              </div>
                          </div>

                          <div className='form-row'>
                              <div className='col-lg-5'>
                                  <div>
                                      <input type='text'
                                          name="email"
                                          placeholder='email'
                                          className='form-control my-3 p-2'
                                          {...register("email", {
                                              required: true
                                          })}
                                      >
                                      </input>
                                      {errors.email?.type === " required " && (
                                        <p role='alert ' className='text-danger'> 
                                            Email is requied 
                                        </p>
                                      )}

                                  </div>
                              </div>
                          </div>

                          <div className='form-row'>
                              <div className='col-lg-5'>
                                  <div>
                                      <input type='password'
                                          name="password"
                                          placeholder='Set New Password'
                                          className='form-control my-3 p-2'
                                          {...register("password",{
                                            required:true
                                          })}
                                      >
                                      </input> <span className='text-danger'></span>

                                      {errors.password?.type === "required" &&(
                                        <p role='alert' className='text-danger'>
                                            Password is requied 
                                        </p>
                                      )}
                                     

                                  </div>
                              </div>
                          </div>
                          <button className='btn btn-primary' onClick={() => window.location.reload}> Reset Password</button>
                          <br></br>
                          <p>
                              Go to   <Link to="/login" className='text-height:20px'  >Login  </Link>  page
                          </p>
                          
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword