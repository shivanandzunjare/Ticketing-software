import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import api from "../../Api";
import { toast } from 'react-toastify';
import { signin } from '../../slices/authSlice';

function Login  () {  // login for client and Support Team(tier)\

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = (event) => {
        console.log(event);
        axios
        .post(api.URL+"/user/signIn", event)
        .then((result) => {
            console.log(typeof result.data);
            dispatch(signin(result.data));
            toast.success("login success");

            setTimeout(() => {
                navigate("/");

            }, 2000);
        })
        .catch((error) => {
            toast.error("invalid")
            console.log(error);
            

        });
        reset();
    }


  return (
 <div>
    <div className='form my-5 mx-3'>

       <div className='container'>
              <div className='row' style={{ padding: "10px" }}>
              <div className='col-xl-3'>
                  <h2> Welcome, Finite4</h2>
                          {/* fname , lname email contactno loginid, userrole password */}
                   <form className='form-control' onSubmit={handleSubmit(onSubmit)}>
                       <div className='form-row'>
                           <div className='col-lg-7'>
                                <input type='text '
                                name='loginid'
                                placeholder='LoginId'
                                className='form-control  p-2'
                                {...register("loginid",{
                                      required: true,
                                })}>
                                </input>
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
                                    className='form-control my-3 p-2'
                                    {...register("password",{
                                        required: true,

                                    })}>
                                 </input>
                                    {errors.password?.type === "required" &&(
                                        <p role='alert' className='text-danger'>
                                            required !!
                                        </p>
                                    )}
                                <span className='text-danger font-weight-bold'></span>
                           </div>
                       </div>

                        <div class="d-grid gap-2 d-md-flex justify-content-center">
                            <button className='btn btn-btn btn-primary' > Login</button>
                            <br></br>
                        </div>
                            <Link  to="forgotpassword">
                                 Forgot Password
                            </Link>
                   </form>
               </div>
          </div>
        </div>
   </div>
      </div>
  )
}

export default Login