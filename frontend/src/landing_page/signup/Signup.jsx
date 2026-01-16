import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  // Handle input changes
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  // Toast helpers
  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !username) {
      return handleError("All fields are required");
    }

    try {
      const { data } = await axios.post(
        "http://localhost:3002/api/auth/signup",
        { email, password, username },
        { withCredentials: true }
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => navigate("/login"), 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log("Axios error:", error);
      handleError(error.response?.data?.message || "Server not reachable");
    }

    // Reset form
    setInputValue({ email: "", password: "", username: "" });
  };

  return (
    <div className="container pt-5 pb-3 mt-5">
      <div className="row">

        {/* LEFT IMAGE */}
        <div className="col-6 pr-5 mt-5">
          <img
            src="../media/images/signup.png"
            alt="Signup preview"
            style={{ width: "90%" }}
          />
        </div>

        {/* RIGHT FORM */}
        <div className="col-6 p-3 mt-3">

          <h2 className="mb-2">Signup now</h2>
          <p className="text-muted mb-4">
            Create your account to continue
          </p>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
                autoComplete="email"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Enter your username"
                onChange={handleOnChange}
                autoComplete="username"
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
                autoComplete="new-password"
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Sign up
            </button>

            <p className="text-center text-muted mt-3">
              Already have an account?{" "}
              <Link to="/login">Login</Link>
            </p>

          </form>

          <ToastContainer />
        </div>

      </div>
    </div>





  );
};

export default Signup;
