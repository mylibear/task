import React, { useEffect, useState } from "react";
import styled from "styled-components";

import axios from "axios";
import { FiArrowLeftCircle } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { selectedPetRoute } from "../../utils/APIRoutes";

export default function SelectedPet() {
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentBreed, setCurrentBreed] = useState(undefined);
  const [currentPetImage, setCurrentPetImage] = useState(undefined);
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(undefined);
  const navigate = useNavigate();
  const [values, setValues] = useState({ petname: "",});
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };





  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
   
    setCurrentPetImage(data.petImage);
    setCurrentBreed(data.breed);
   
  }, []);


  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { petname} = values;
    if (petname === "") {
      toast.error("Please give name your pet.", toastOptions);
      return false;
    } 
    return true;
  };



  const handleSubmit = async (event) => {

    event.preventDefault();
  
    if (validateForm()) {
      // const { petname } = values;
      // const { data } = await axios.post(selectedPetRoute, {
      //   petname,
      // });
      // if (data.status === false) {
      //   toast.error(data.msg, toastOptions);
      // }
      // if (data.status === true) {
      //   localStorage.setItem(
      //     process.env.REACT_APP_LOCALHOST_KEY,
      //     JSON.stringify(data.user)
      //   );
        navigate("/");
      // }
    }
  };

  const goBack = () => {
    console.log('hi')
    navigate("/setPet");
  };

 
  
  return (
    <Section >
 
      <div className="main">
      <button className="back" onClick={goBack}><FiArrowLeftCircle  color="white" fontSize="3em" /></button>
      <div></div>
      <div className="image">
        <img src={currentPetImage} alt="lighthouse" />
        
      </div>
      <div className="content">
        <div className="title">
          {/* <h1>Shiba inu{currentBreed}</h1> */}
     
          <h1>A bundle of joy!</h1> 
        </div>
        <div className="list">
          <p> This pet will be sure to keep your team's spirit high!</p>
          <p>Missing deadlines and team conflicts will make your pet sad and decrease the pet's health :)</p>
          <p>Please take care of your pet!</p>
          <p>What would you like to name your pet?</p>
        </div>
        
        <div className="confirm">
        <input
            type="text"
            name="petname"
            onChange={(e) => handleChange(e)}
            min="3"
          />
        <button className="btn" type="submit" onClick={handleSubmit} >Continue</button>
        </div>
      </div>
      </div>
      <ToastContainer />
    </Section>
  );
}

const Section = styled.section`
 
  padding:4%;
  align-items: center;
  gap: 2rem;
  background-color: #ad6b16;
  height: 100vh;
  width: 100vw;

  color: black;
  .image {
    img {
      height: 14rem;
      margin-right:50px;
   
    }
  }

  .main{
    background-color: #A1D9EB;
    padding-left:10%;
    padding-right:10%;
    padding-top:50px;
    padding:7%;
    border-radius: 4.4rem;
    align-items: center;
    display: flex;
    justify-content: center;
     align-items: center;
    
  }
  .back{
    border: 0;
    margin-right:5%;
    height: 50px;
  width: 50px;
  background-color: #A1D9EB;
    
  }

  .confirm{
    margin-left:37%;
    
  }
  .btn{
    background-color: #ad6b16;
    color: white;
    margin-left:3px;
    

    text-transform: uppercase;
    &:hover {
      background-color: #85FFBD;
      color: white;
    }
  }
  .content {
    background-color: white;
    padding:10px;
    border: 0.3rem solid black;  
    border-radius: 2rem;

    .title {
      margin: 3rem 0;
      h1 {
        font-size: 2rem;
      }
    }
    .list {
      list-style-type: none;
      p {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 2rem 0;
        font-size: 1.4rem;
       
       
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 5rem 1rem;
    gap: 2rem;
    .image {
      img {
        max-inline-size: 100%;
        block-size: auto;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 2rem;
          text-align: center;
        }
      }
      .list {
        p {
          gap: 1rem;
          margin: 2rem 0;
          .text {
            h3 {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
`;
  