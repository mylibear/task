import {React, createContext} from 'react'
import Background1 from '../img/background1.jpg';
import Background2 from '../img/background2.jpg';
import testImage from '../img/avatarTest.jpg'

export const products = [{
    id: 1,
    name: 'Background1',
    price: 2,
    type: 'Background',
    image: {Background1}
},
{
    id: 2,
    name: 'Background2',
    price: 2,
    type: 'Background',
    image: {Background2}
},
{
    id: 3,
    name: 'Health Booster',
    price: 1,
    type: 'Food',
    image: {testImage}
},
{
    id: 4,
    name: 'Health Detractor',
    price: 1,
    type: 'Food',
    image: {testImage}
},
]
    ;

export var UserContext = createContext();
export var CoinContext = createContext();
// const useContext = ({children}) => {
//     const products = [...Array(20)].map(()=>({
//     id: faker.datatype.uuid(),
//     name: faker.commerce.productName(),
//     price: faker.commerce.price(),
//     type: faker.word.noun(),
//     image: faker.image.animals(),
//     })
//     );

//     const [state, dispatch] = useReducer(cartReducer, {
//         products: products,
//         cart: [],
//     });

//     const [productState, productDispatch] = useReducer(productReducer, {
//         byType: false,
//         searchQuery:'',
//     });

//   return <Cart.Provider value={{state, dispatch,productState, productDispatch}}>
//     {children}</Cart.Provider>;
  
// };

// export default useContext;

// export const CartState = () => {
//     return useContext(Cart);
// };