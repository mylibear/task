import React, {useContext} from 'react'
import './petBar.css'
import moment from 'moment'
import {events} from '../../pages/Calendar/calendar.js'
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {currentCoins} from '../storeHeader/petStoreHome';
import {userItems} from '../storeHeader/singleProducts'
import Avator from '../img/avatarTest.jpg';
import {UserContext, CoinContext} from '../storeHeader/context'

import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { allUsersRoute, host } from "../../utils/APIRoutes";

const startDate = moment().startOf('week');
const endDate = moment().endOf('week');
const eventlist = events;
const tasklist = [];
var currentItems = userItems
var color = 'success'

function getMyTask(){
    for (let element of eventlist) {
     if (element.start >= startDate && element.end <= endDate){
      tasklist.push(<li>{(element.title)}</li>)
     }
   };
  }


export default function PetBar() {

  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);

  // const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);
    setCurrentUserImage(data.avatarImage);

  }, []);

  const [userName, setUserName] = useState("");
  const [currentPetImage, setCurrentPetImage] = useState(undefined);

  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username

      
    );

    setCurrentPetImage(data.petImage);
    setCurrentPetImage(data.petImage);

  }, []);

  const navigate = useNavigate();


  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(async () => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/login");
    } else {
      setCurrentUser(
        await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        )
      );
    }
  }, []);

  useEffect(async () => {
    if (currentUser) {
      if (currentUser.isAvatarImageSet) {
        const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
       
      } else {
        navigate("/setAvatar");
      }
    }
  }, [currentUser]);

  var health = useContext(UserContext);
  var Coins = useContext(CoinContext);
    getMyTask();
    const setHealthBarColor= () =>{
      if (health > 50) {
        return 'success'
    }
      if (health < 50) {
          return 'warning'
      }
      if (health < 20) {
          return 'danger'
      }
  }
  return (
    <div className='petBar'>
         <div className='userIcon'>
         <img src={`data:image/svg+xml;base64,${currentUserImage}`}alt="" className='topAvatar'/>{currentUserName}
            </div>
        <div className='personalTask'>
        <span className="myTaskTitle">My Weekly Task</span>
                <ul className='myTaskList'>
                {tasklist}
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
               </ul>
        </div>

        <div className='healthBar'>
            Team Health Bar
            <ProgressBar now={health} label={`${health}%`} variant = {color = setHealthBarColor()} />
        </div>

        <div className='pet'>
        <p className='coin'>Current Coins: {Coins}</p>
        <img src= {currentPetImage} alt="" className='petAvatar'/>
            </div>  
    </div>
  )
}
