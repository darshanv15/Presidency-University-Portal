import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import HomeScreen from "./components/HomeScreen";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ResultComponent from "./components/ResultComponent";
import AdminScreen from "./components/AdminScreen";
import ResultPage from "./components/ResultPage";
import AboutPage from "./components/AboutPage";
import StudentAdmissionFormScreen from "./components/StudentAdmissionFromScreen";
import AdmissionDetailsScreen from "./components/AdmissionDetailsScreen";
import CircularNotification from "./components/CircularNotification";
import ExamApplication from "./components/ExamApplication";
import Departments from "./components/Departments";
import Guidelines from "./components/Guideline";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<HomeScreen />} />
      <Route path="/results" element={<ResultComponent />} />
      <Route path="/login/admin" element={<AdminScreen />} />
      <Route path="/resultpage/:id" element={<ResultPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/admissionform" element={<StudentAdmissionFormScreen />} />
      <Route
        path="/admin/admissiondetails"
        element={<AdmissionDetailsScreen />}/>
      <Route path="/circularnotification" element={<CircularNotification/>}/>
      <Route path="/examapplication" element={<ExamApplication/>}/>
      <Route path="/departments" element={<Departments/>}/>
      {/* <Route path="/guide" element={<Guidelines/>}/> */}
    </Route>

  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
