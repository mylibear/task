import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './petStore.css'
import StoreHeader from '../../components/storeHeader/storeHeader.js'
import PetStoreHome from '../../components/storeHeader/petStoreHome.js'
import NavigationBar from '../../components/navigationBar/navigationBar.jsx';
import SideBar from '../../components/sideBar/sideBar.jsx';
import PetBar from '../../components/petBar/petBar.jsx';
import '../../App.css'

export default function petStore() {
  return (
    <>
    <NavigationBar /> 
    <div className = 'container'>
    <SideBar />
    <div className= 'content'>
    <PetStoreHome />
      </div>
      <PetBar />
    </div>
    </>
  )
}
