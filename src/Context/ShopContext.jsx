import React, { useState, useEffect, createContext } from "react"; 
import axios from 'axios';
import { BASE_URL } from "../helper.js";
import new_collections from "../components/assets/new_collections.js";
const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [inputVal, setInputVal] = useState('');
    const [filteredCollections, setFilteredCollections] = useState([]);
    const authToken = localStorage.getItem('auth-token');
    console.log('Auth Token:', authToken);
    
    const getUser = async () => {
        if (localStorage.getItem('auth-token')) {
            try {
                const response = await axios.get(`${BASE_URL}/getcart`, {
                    headers: {
                        'auth-token': authToken,
                        'Content-Type': 'application/json',
                    },
                });
                setCartItems(response.data);
                console.log(response.data);
            } catch (error) {
                console.log({"error in getcart frontend": error});
            }
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        // Filter the collections based on the input value
        const filtered = new_collections.filter(item => item.name.toLowerCase() === inputVal.toLowerCase());
        setFilteredCollections(filtered);
        console.log(filtered);
    }, [inputVal]);

    const addToCart = async (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
        if (localStorage.getItem('auth-token')) {
            try {
                await axios.post(`${BASE_URL}/addtocart`, { itemId: itemId }, {
                    headers: {
                        'auth-token': `${localStorage.getItem('auth-token')}`,
                        'Content-Type': 'application/json',
                    },
                });
                getUser();
            } catch (error) {
                console.error(error);
            }
        } 
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
        if (localStorage.getItem('auth-token')) {
            try {
                await axios.post(`${BASE_URL}/removeFromcart`, { itemId: itemId }, {
                    headers: {
                        'auth-token': `${localStorage.getItem('auth-token')}`,
                        'Content-Type': 'application/json',
                    },
                });
                getUser();
            } catch (error) {
                console.error(error);
            }
        } 
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = new_collections.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    }

    const getTotalCartItem = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {
        new_collections,
        getTotalCartAmount,
        cartItems,
        getTotalCartItem,
        addToCart,
        removeFromCart,
        getUser,
        inputVal,
        setInputVal, // Pass setInputVal to update the input value
        filteredCollections // Pass filteredCollections to access the filtered data
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export { ShopContext, ShopProvider };
