import "./App.css";
import React, { useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route, useNavigate
} from "react-router-dom";
import HomePage from "./components/Landing Pages/HomePage";
import Vision from "./components/Landing Pages/Vision";
import WhatWeDo from "./components/Landing Pages/WhatWeDo";
import Resources from "./components/Landing Pages/Resources";
import Registered from "./components/Landing Pages/Startup/Registered";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import UserContext from "./Context/userContext";
import EmailVerification from "./components/Login/EmailVerification";
import Alert from "./components/Alert/Alert";
import Product from "./components/Dashboard/Product";
import Form from "./components/Forms/Form";
import Profile from "./components/Dashboard/profile/Profile";
import ReviewForm from "./components/Forms/ReviewForm";
import Error from "./components/failed/Error";
import YourProjects from "./components/Dashboard/your-projects/YourProjects";
import Investment from "./components/Dashboard/investments/Investment";
import ViewReview from "./components/Dashboard/viewReview/ViewReview";
function App() {
  const context = useContext(UserContext);
  let { alert,getUserData } = context;
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getUserData();
    }
    return ()=>{
      getUserData();
    }
  }, [])

  return (
    <>
      <Router>
        <>

          {alert && <Alert></Alert>}
          <Routes>
            <Route exact path="/" element={<HomePage />}>
            </Route>

            <Route exact path="/vision" element={<Vision />}>
            </Route>

            <Route exact path="/whatwedo" element={<WhatWeDo />}>
            </Route>

            <Route exact path="/howwedoit" element={<Registered />}>
            </Route>

            <Route exact path="/resources" element={<Resources />}>
            </Route>

            <Route exact path="/signup" element={<Signup />}>
            </Route>

            <Route exact path="/login" element={<Login />}>
            </Route>

            <Route exact path="/dashboard" element={<Dashboard />}></Route>

            <Route exact path="/activate/:id" element={<EmailVerification />}></Route>

            <Route exact path="/dashboard/startup/:id" element={<Product></Product>}></Route>

            <Route exact path="/dashboard/startup/:id/viewReview" element={<ViewReview></ViewReview>}></Route>

            <Route exact path="/dashboard/create-startup" element={<Form></Form>}></Route>

            <Route exact path="/dashboard/profile" element={<Profile></Profile>}></Route>

            <Route exact path="/dashboard/startup/review" element={<ReviewForm></ReviewForm>}></Route>

            <Route exact path="/dashboard/yourProject" element={<YourProjects></YourProjects>}></Route>

            <Route exact path="/dashboard/investments" element={<Investment></Investment>}></Route>

            <Route exact path="*" element={<Error></Error>} />
          </Routes>
        </>


      </Router>
    </>
  );
}

export default App;