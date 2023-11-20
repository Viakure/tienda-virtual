import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0);
    // Shopping Cart - Save products to cart
    const [cartProducts, setCartProducts] = useState([]);
    // Shopping Cart - Order
    const [order, setOrder] = useState([]);

    // Product Details - Product Open/Close
    const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailsOpen(true);
    const closeProductDetail = () => setIsProductDetailsOpen(false);
    // Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
    
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
            setCartProducts,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
            }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};