import axios from "axios";
import { useEffect, useState } from "react"
import api from "../Api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


function IssueList() {
    const [data, setData] = useState();

     useEffect(() => {
        axios
        .get(api.URL + "/issue/getAllIssue")
        .then((result) => {
            console.log(result);
            console.log(result.data);
            toast.done("All Issues Are Here"  , {
                position:'top-center',
                autoClose:2000,
            })
            setData(result.data)
        })
        .catch((err) => {
            console.log(err);
            toast.error("error")
        })
     },[])

    //  function updateIssue(obj) {
    //     axios
    //     .then((result) => {
    //         console.log(result.data);
    //         toast.success(" updated ")
    //         setTimeout(() => {
    //             window.location.reload();
    //         },1000)
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         toast.error("not yet updated")
    //     })
    //  }

     function deleteIssue(id) {
        axios
        .delete(api.URL+ "/issue/del/" + id)
        .then((result) => {
            console.log(result.data);
            toast.success("deleted ")
            setTimeout(() => {
                window.location.reload();
            }, 1000);
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
                    
                           <h4 className="text-center mt-5"> Issue Details :</h4>
                      
                      <div className="card">
                        <div className="card-body">
                    
                        <table className=" table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th scope='col'>Sr. No</th>
                                    <th scope='col'>Issue Type :</th>
                                    <th scope='col'>Issue Description :</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Ticket No</th>
                                    <th scope="col" to="/ticket" >Ticket Date</th>
                                  
                                    <th scope='col'>LoginId:</th>
                                    <th scope='col'>Update </th>
                                    <th scope='col'>Delete </th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                { data && data.map((obj, num) =>{
                                    return(
                                        <tr>
                                            <td>{num + 1}</td>
                                            <td>{obj.issuetype}</td>
                                            <td>{obj.issuedesc}</td>
                                            <td>{obj.statusmark}</td>
                                            <td>
                                                <Link to={"/issue/ticket/" + obj.ticketno}>
                                                    {obj.ticketno}
                                                </Link>
                                            </td>
                                            <td>{obj.ticketdate}</td>
                                            
                                            <td>{obj.dummy}</td>
                                            <td>
                                                <Link className="btn btn-sm btn-primary"
                                                    to={"issue/edit/"+ obj.id}>
                                                        Update
                                                </Link>
                                            </td>
                                            <td>
                                                <Link className="btn btn-sm btn-danger"
                                                   onClick={() => deleteIssue(obj.id)}>
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                }

                                   )}
                                
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
export default IssueList