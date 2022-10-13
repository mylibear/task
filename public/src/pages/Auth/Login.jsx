import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../../utils/APIRoutes";
import Logo from "../../assets/mochicat.gif";
import Banner from "../../components/Banner";
import "../../auth.css"



export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light ",
  };
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );

        navigate("/");
      }
    }
  };

  return (
    <>
    <div className="banner"><Banner/></div>
      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>Simplify</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Log In</button>
          <span>
            Don't have an account ? <Link to="/register">Create One.</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
    height: 90vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: #9b6115;

  
    


    .brand {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        img {
            height: 8rem;
        }
        h1 {
            color: white;
            text-transform: uppercase;
        }
    }
        
        form {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            
            border-radius: 2rem;
            padding: 2rem 4rem;
          }
          input {
            background-color: #FFE4C4;
            padding: 1rem;
            
            
            border-radius: 3rem;
            color:#808080;
            width: 100%;
            font-size: 1rem;
            &:focus {
              border: 0.1rem solid #997af0;
              outline: none;
            }
          }
          button {
            background-color: #41E316;
            
            color: white;
            padding: 1rem 2rem;
            border: none;
            font-weight: bold;
            cursor: pointer;
            border-radius: 0.4rem;
            font-size: 1rem;
            text-transform: uppercase;
            border-radius: 10px;
            border: 5px solid #256536;
            &:hover {

              border-style: solid;
              border-color: green;
              background-color: #24fc91;
              text-transform: uppercase;
              transition: transform 80ms ease-in;
            }
          }
          span {
            color: white;
            font-size:25px;
            text-transform: uppercase;
            a {
              color: #41E316;
              text-decoration: none;
              font-weight: bold;
            }
          }
    }
`;