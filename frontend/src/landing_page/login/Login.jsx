import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-left" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return handleError("All fields are required");
    }

    try {
      const { data } = await axios.post(
        "http://localhost:3002/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        // setTimeout(() => window.location.href = "http://localhost:5174/", 1000);
        // localStorage.setItem("token", data.token);
        // localStorage.setItem("user", JSON.stringify(data.user));

        window.location.href = "http://localhost:5174/";
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("Axios error:", error);
      handleError(error.response?.data?.message || "Server not reachable");
    }

    setInputValue({ email: "", password: "" });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-6 col-lg-4">

          <div className="p-4">
            <h2 className="text-center mb-4">Login Account</h2>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
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

              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  autoComplete="current-password"
                  className="form-control"
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>

              <p className="text-center mt-3 mb-0">
                Don’t have an account?{" "}
                <Link to="/signup">Signup</Link>
              </p>

            </form>

            <ToastContainer />
          </div>

        </div>
      </div>
    </div>


  );
};

export default Login;
