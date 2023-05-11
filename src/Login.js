
import React from "react"
import { Link } from "react-router-dom"
import { ToastContainer ,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef ,useEffect} from "react";
export default function (props) {
  const username = useRef("");
  const password = useRef("");
  // useEffect(() => {
  // },[]);
  const loginUser = (e) => {
     e.preventDefault();

    if (username.current.length === 0 || password.current.length === 0) {
      toast.error("All fields are required !", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }
  return (
    <div className="Auth-form-container">
      <img src="data:image/png;base64,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" alt="Not found"/>
      <form className="Auth-form" onSubmit={(e) => loginUser(e)}>
      <ToastContainer />
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Interns Review Management system</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              onChange={(e) => (username.current = e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              onChange={(e) => (password.current = e.target.value)}
              placeholder="Enter password"
              
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" style={{backgroundColor:"#2b8a8bcf"}}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
          <Link to="/Forgot-pass">Forgot password?</Link>
          </p>
        </div>
      </form>
    </div>
  )
}