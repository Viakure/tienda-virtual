import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0);
    // Shopping Cart - Save products to cart
    const [cartProducts, setCartProducts] = useState([]);

    // Product Details - Product Open/Close
    const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailsOpen(true);
    const closeProductDetail = () => setIsProductDetailsOpen(false);
    
    // Product Details - Show Product
    const [productToShow, setProductToShow] = useState({});

    return (
        <ShoppingCartContext.Provider value = {{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailsOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts
            }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};