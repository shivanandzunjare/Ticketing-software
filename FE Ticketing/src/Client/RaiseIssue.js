import axios from "axios";
import { useForm } from "react-hook-form"
import api from "../Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Admin from "../components/login_signIn/Admin";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useId } from 'react';
import "react-toastify/dist/ReactToastify.css";

function  Issue  ()  {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [issuetype , setIssueType] = useState("");
    const [issuedesc, setIssueDesc] = useState("");
    const [message, setMessage] = useState("");
    const [Status, setStatus] = useState("unsloved");
   // const [ticketno, setTicketNo] = useState("");
    const [ticketdate, setTicketDate] = useState("");
    
    const [Error, setError] = useState("");

   // const defaultStatus = "unsloved";

    const {
        reset,
        register,
    } = useForm();

    const loginid = sessionStorage["loginid"];
    console.log(loginid);
    console.log(Status);
   

    

    function sendingIssue() {
        // setStatus = () => {
        //     return 'unsolved';
        // }
        // const stat = setStatus();
        // console.log(stat);

        const setTicketNo = () => {
            const idd = uuidv4();
            const ticketno = idd.slice(0, 4);
            return ticketno;
        }

        const tkt = setTicketNo();

        const current = new Date();
        const today = `${current.getFullYear()}-${(current.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${current.getDate().toString().padStart(2, "0")}`;
        console.log(today);


        var body = {
            issuetype,
            issuedesc,
            loginid,
            dummy:loginid,
            statusmark:"unsloved",
            ticketno : tkt,
            ticketdate:today,

        };
        // if (!body.hasOwnProperty("Status")){
        //     body.statusmark= defaultStatus;
        // }

        console.log(body);
       
        axios
            .post(api.URL + "/issue/" + loginid + "/", body)
            .then((result) => {
                console.log(result);
                console.log(result.data);
                toast.success(" successfully  sended your issue ! ", {
                    position: "top-center",
                    autoClose: 1000,

                });

                setTimeout(() => {
                    navigate("/myissueList")
                }, 1000)
            })
            .catch((err) => {
                toast.error("errror is here");
                console.log(err);
            })
    }
   
    return(
        <div >
            <div className="container">
                <h4 className="px-5 mt-5"> Enter Issue Details</h4>
                <div className="row" style={{padding : " 2px"}}>
                    <div className="col-lg px-5">
                        
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            sendingIssue();
                        }} >
                            {/* issuetype, issuedesc, loginid */}
                            <div className="row">
                                <div class="col-xl-4">
                                    <label for="issuetype">Issue Type:</label><br></br>
                                    <select
                                     id="issuetype" name="issuetype" className="dropdowm-menu" 
                              
                                     onChange={(event) => {
                                        setIssueType(event.target.value);
                                     }} 
                                      value={issuetype} 
                                       >
                                        <option >--------</option>
                                        <option  value="Hardware">Hardware</option>
                                        <option value="Software">Software</option>
                                        <option value="Networking">Networking</option>
                                    </select>
                                   
                                </div>
                            </div>
                            <br></br>
                         
                            <div className="col-xl-4">
                                <label>Issue Description :</label>
                                <textarea type="text-area" name="issuedesc"
                                    rows="2" cols="4"
                                    className="form-control" placeholder="Issue Description"
                                    {...register("issuedesc",{ required : true})}
                                    onChange={(event) => {
                                        setIssueDesc(event.target.value);
                                    }}
                                ></textarea>
                        
                            </div>

                            <div>
                                
                            </div>
                            <br></br>
                            <button className="btn btn-btn btn-primary" type="submit"   > Send</button>
                            <br></br>
                            <p className="text-success">{message}</p>
                            <p className="text-danger">{Error}</p>
                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default Issue;

