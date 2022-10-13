import React, { useState } from 'react'
import { products } from './context.js'
import SingleProducts from './singleProducts.js'
import './petStoreHome.css'
import {Form,Button,Container, FormControl, Navbar} from 'react-bootstrap'

export var currentCoins = 3;

const usePetStoreHome = () => {

  const [query, setQuery] = useState("")
  
  return (
    <div>
    <div>
        <Navbar bg = 'dark' variant ='dark' style ={{height:80}}>
            <Container>
                <Navbar.Brand>
                    <h2>Current Coins: {currentCoins}</h2>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl  style = {{width: 500}} 
                    placeholder ='Search' 
                    className = 'm-auto'
                    onChange ={e=> setQuery(e.target.value)}/>
                </Navbar.Text>
            </Container>
        </Navbar>
    </div>

    <div className = 'petStoreHome'>
      <div className='productContainer'>

      <div className='filters'>
        <span className='filterTitle'>Filter</span>
        <span>
            <Form.Check
            inline
            label='Health'
            name='group1'
            type='radio'
            id={'inline-1'}/>
        </span>
        <span>
            <Form.Check
            inline
            label='Environment'
            name='group1'
            type='radio'
            id={'inline-2'}/>
        </span>
        <span>
            <Form.Check
            inline
            label='Apparel'
            name='group1'
            type='radio'
            id={'inline-3'}/>
        </span>
        <Button variant = 'light'>Clear Filters</Button>
    </div>

        {products.filter(prod=>prod.name.toLowerCase().includes(query)).map((prod) => {
          return <SingleProducts prod={prod} key={prod.id}/>;
        })
        }
      </div>
    </div>
    </div>
  )
}

export default usePetStoreHome