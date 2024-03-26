import axios from "axios";
import { useEffect, useState } from "react"
import api from "../Api";
import { toast } from "react-toastify";



function MyIssueList(){

    const [data, setData] = useState([]);

    const loginid = sessionStorage["loginid"];
    console.log(loginid);
    // let dummy = loginid;
    // console.log(dummy);

    useEffect(() => {
        axios
        .get(api.URL + "/issue/getByDummy/" + loginid)
        .then((result) =>{
            console.log(result);
            console.log(result.data);
            setData(result.data)
            toast.success(" here ")

        })
        .catch((err) => {
            toast.error(" error")
            console.log(err);
        })
    },[])
    return (
        <div>
            
            <div className="container">
                <div className="row">
                    <h3> your all isssue ahe here </h3>
                    <div className="card">
                        
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Sr. No</th>
                                    <th scope="col">Issue Type</th>
                                    <th scope="col">Issue Description</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Ticket No</th>
                                    <th scope="col">Ticket Date </th>
                                    <th scope="col">Your loginId</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data && data.map((obj, num) => {
                                    return(
                                        <tr>
                                            <td>{num+1}</td>
                                            <td>{obj.issuetype}</td>
                                            <td>{obj.issuedesc}</td>
                                            <td>{obj.statusmark}</td>
                                            <td>{obj.ticketno}</td>
                                            <td>{obj.ticketdate}</td>
                                            
                                            <td>{obj.dummy}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>

                        </table>

                    </div>


                </div>

            </div>
        </div>
    )

}
export default MyIssueList