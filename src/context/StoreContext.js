import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cart, setCart] = useState({});

    const addToCart = (itemId) => {
        if (!cart[itemId]) {
            setCart((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cart) {
            if (cart[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cart[item];
            }
        }
        return totalAmount;
    }
    const contextValue =
    {
        food_list,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;
