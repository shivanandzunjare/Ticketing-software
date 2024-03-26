import { useEffect, useState } from "react";
import api from "../Api";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function EditIssue () {
    const navigate = useNavigate();
    const [issue, setIssue] = useState({
        issuetype:"",
        issuedesc:"",
        statusmark:"",
    });

    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        axios
            .get(api.URL + "/issue/getById/"+id)
            .then((result) => {
                console.log(result);
                console.log(result.data);
                //toast.success("euuuuuuuuu")
                 setIssue(result.data)

            })
            .catch((err) => {
                console.log(err);
                toast.error("error")
            })
    }, [])

    const handleChange = (e) => {
        const value = e.target.value;
        setIssue({...issue, [e.target.name]: value});
    };

    const IssueUpdate = (e) => {
        e.preventDefault();

        axios
            .put(api.URL + "/issue/update",issue)
            .then((result) => {
                
                console.log(result.data);
                toast.success(" updated ")
                setIssue({
                    issuetype: "",
                    issuedesc: "",
                    statusmark:"",

                });
                navigate("/issueList")
               
            })
            .catch((err) => {
                console.log(err);
                toast.error("not yet updated")
            })

    }

    return (
        <>
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-3">
                        <div className="card mt-5">
                               <div className="text-center mt-4">
                                  <h4> Edit issue</h4>
                               </div>

                               <div className="card-body">
                                <form onSubmit={(e) => IssueUpdate(e)}>
                                    <div className="mb-3">
                                        <label> Issue Type:</label>
                                        <select name="issuetype" id="issuetype"
                                        onChange={(e) => handleChange(e)}
                                        value={issue.issuetype}>
                                            <option value="Hardware">Hardware</option>
                                                <option value="software">Software</option>
                                                <option value="networking">Networking</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label> Issue Description:</label>
                                        <input type="issuedesc" name="issuedesc"
                                             className="form-control"
                                                onChange={(e) => handleChange(e)}
                                                value={issue.issuedesc}>
                                        </input>
                                            
                                    </div>

                                    <div className="mb-3">
                                        <label> Status</label>
                                        <input name="statusmark" id="statusmark"
                                           className="form-control"
                                                onChange={(e) => handleChange(e)}
                                                value={issue.statusmark}>
                                        </input>
                                    </div>

                                          {/* 
                                        <div className="mb-3">
                                            <label> LoginId</label>
                                            <input type="dummy" name="dummy"
                                                className="form-control"
                                                onChange={(e) => handleChange(e)}
                                                value={issue.dummy}>
                                            </input>

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
        
        </>

    )
}

export default EditIssue