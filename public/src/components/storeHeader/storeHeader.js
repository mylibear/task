import React, {useContext} from 'react'
import './storeHeader.css'
import {Container, FormControl, Navbar} from 'react-bootstrap'
import {CoinContext} from '../storeHeader/context'

const StoreHeader = () => {
    var currentCoins = useContext(CoinContext);
  return (
    <div>
        <Navbar bg = 'dark' variant ='dark' style ={{height:80}}>
            <Container>
                <Navbar.Brand>
                    <h2>Current Coins: {currentCoins}</h2>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl  style = {{width: 500}} 
                    placeholder ='Search' 
                    className = 'm-auto'/>
                </Navbar.Text>
            </Container>
        </Navbar>
    </div>
  )
}

export default StoreHeader