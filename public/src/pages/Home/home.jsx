import React from 'react'
import './home.css'
import FeatureInfo from '../../components/featureInfo/featureInfo.jsx'
import NavigationBar from '../../components/navigationBar/navigationBar.jsx';
import SideBar from '../../components/sideBar/sideBar.jsx';
import PetBar from '../../components/petBar/petBar.jsx';
import '../../App.css'

export default function Home() {
  return (
    <>
    <NavigationBar /> 
   <div className = 'container'>
   <SideBar />
   <div className='content'>
    <div className='home'>
        <FeatureInfo/>
      </div>
    </div>
    <PetBar />
    </div>
    </>
  )
}
