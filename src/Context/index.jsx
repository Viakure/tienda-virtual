import { createContext, useState, useEffect } from "react";

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

    // Gets Products
    const [items, setItems] = useState(null);

    // Gets Products By Title
    const [searchByTitle, setSearchByTitle] = useState(null);
    console.log('Search: ', searchByTitle);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=30')
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);


    return (
        <ShoppingCartContext.Provider value={{
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
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};