import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    // Product Details - Product Open/Close
    const openProductDetail = () => setIsProductDetailsOpen(true);
    const closeProductDetail = () => setIsProductDetailsOpen(false);
    
    // Product Details - Show Product
    const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);

    return (
        <ShoppingCartContext.Provider value = {{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailsOpen
            }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};