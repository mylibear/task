import React, {useContext, useState} from 'react'
import {Card, Button} from 'react-bootstrap'
import './petStoreHome.css'
import {UserContext, CoinContext} from './context'

export var userItems = []
var boughtItems = []


const SingleProducts = ({prod}) => {
    var health = useContext(UserContext);
    var coins = useContext(CoinContext);
    const [Health, setHealth] = useState(health);
    const [Coin, setCoin] = useState(coins);

    const handleBuy = () => {
        if (!boughtItems.includes(prod.id) && (Coin >= prod.price)){
            userItems.push({id: prod.id,
                name: prod.name,
                price: prod.price,
                type: prod.type,
                image: prod.image})     
         }
            boughtItems.push(prod.id)
            setCoin(Coin - prod.price)
            console.log(coins, Coin)
        if (prod.name === 'Health Booster' && Health < 100 && (Coin >= prod.price)){
            if (Health > 90){
                setHealth(100);
                health = Health
                setCoin(Coin - prod.price)
            }
            else{
                setHealth(Health+10);
                health = Health
                setCoin(Coin - prod.price)
            }
         }
        if (prod.name === 'Health Detractor' && Health >= 0 && (Coin >= prod.price)){
            setHealth(Health - 10);
            health = Health
            console.log(Health, health)
            setCoin(Coin - prod.price)
         }
         console.log(Coin >= prod.price, Coin, coins, prod.price)
        };
  return (
    <div className='products'>
        <Card>
            <Card.Img variant ='top' src={prod.image} alt={prod.name}/>
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle style={{paddingBottom: 10}}>
                    <span>Cost: {prod.price}</span>
                </Card.Subtitle>
                <Button onClick={handleBuy}>
                    Buy
                </Button>
            </Card.Body>
        </Card>
    </div>
  )
  }

export default SingleProducts
