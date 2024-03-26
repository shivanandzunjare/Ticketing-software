import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About";

import Admin from "./components/login_signIn/Admin";
import Login from "./components/login_signIn/Login";
import Register from "./Admin/Register";

import Issue from "./Client/RaiseIssue";
import ShowUser from "./Admin/AllUsersDetails";

import UpdateUser from "./Admin/UpdateUserDetails";
import MyIssueList from "./Client/MyIssueList";
import IssueList from "./Admin/GetAllIssue";
import EditUser from "./Admin/EditUserDtls";
import EditIssue from "./Admin/EditIssueDtls";
import ResetPassword from "./components/login_signIn/ResetPassword";
import Ticket from "./Admin/Ticket";
import Home from "./components/Home";
import Overview from "./components/Overview";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path:"/overview",
                element:<Overview/>
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/register",
                element: <Register/>,
            },
            {
                path: "/admin",
                element: <Admin/>,
            },
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/register/login",
                element: <Login />,
            },
            {
                path: "/register/allusers",
                element: <ShowUser />,
            },
            {
                path: "/allusers",
                element: <ShowUser />,
            },
            {
                path: "/raiseIssue",
                element: <Issue />,
            },
            {
                path: "/myissueList",
                element: <MyIssueList />,
            },
            {
                path: "/updateUser",
                element: <UpdateUser />,
            },
            {
                path: "/editUser",
                element: <EditUser />,
            },
            {
                path: "/issueList",
                element: <IssueList />,
            },
            {
                path: "/updateUser/user/edit/:id",
                element: <EditUser />,
            },
            {
                path: "/issueList/issue/edit/:id",
                element: <EditIssue />,
            },
            {
                path: "/login/forgotpassword",
                element: <ResetPassword />,
            },
            {
                path: "/issue/ticket/:ticketno",
                element: <Ticket />,
            },
            // {
            //     path:"/issueList/",
            //     element:
            // }
        ]
    }
]);
export default router;