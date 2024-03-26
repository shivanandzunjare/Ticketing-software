import axios from "axios";
import { useEffect, useState } from "react";
import { Container,Row, Col, Button } from "react-bootstrap";
import api from "../Api";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

function Ticket() {
    const [issuetype, setIssueType] = useState("");
    const [issuedesc, setIssueDesc] = useState("");
    const [statusmark, setStatusmark] = useState("");
    //const [ticketno, setTicketNo] = useState("");
    const [ticketdate, setTicketDate] = useState("");
    const [dummy, setDummy] = useState("");

    const navigate = useNavigate();
    const [data, setData] = useState();

    const {ticketno} = useParams();
    console.log(ticketno);
    console.log(issuetype);

    useEffect(() => {
        axios
            .get(api.URL + "/issue/getByTicketno/"+ ticketno)
            .then((result) => {
                console.log(result.data);
                setData(result.data);
                toast.success(" ticket is here !!!!!!!")
            })
            .catch((err) => {
                console.log(err);
                toast.error("error")
            })
    },[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div>

                         <div className="col-md-8">
                            <h4 className="text-center mt-5"> Ticket Conversation :  </h4>
                              <div className="card">
                                 <div className="card-body">
                                      <Container>
                                          <Row>
                                              <Col className="text-weight-bolder text-secondary"> 
                                                  {/* <div className="issuetype">Issue Description</div>
                                                  <div className="issuedesc">Status</div>
                                                  <div className="ticketno">Ticket No</div> */}
                                                  <table>
                                                    <tbody>
                                                        {
                                                            data && data.map((obj) => {
                                                                return(
                                                                    <>
                                                                        <tr>
                                                                            <td>Issue Type :</td>
                                                                            <td>{obj.issuetype}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Issue Description :</td>
                                                                            <td>{obj.issuedesc}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Status :</td>
                                                                            <td>{obj.statusmark}</td>

                                                                        </tr>
                                                                        <tr>
                                                                            <td>Ticket No :</td>
                                                                            <td>{obj.ticketno}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Ticket Date :</td>
                                                                            <td>{obj.ticketdate}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Login Id :</td>
                                                                            <td>{obj.dummy}</td>
                                                                        </tr>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </tbody>

                                                  </table>
                           
                                               </Col>
                                               <Col className="text-right col-md-2">
                                                  <Button onClick={() => {
                                                    navigate("/issueList")
                                                  }} >Close Ticket</Button>
                                               </Col>
                                           </Row>
                                           
                                      </Container>
                                   </div>
                                </div>
                          </div>
                      </div>
                   </div >
               </div >
               <br/>

               {/* <div className="container ">
                  <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div >
                            </div>
                        </div>
                    </div>
                  </div>
               </div> */}
          </div >
    )
}

export default Ticket