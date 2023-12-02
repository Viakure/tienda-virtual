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
    const [filteredItems, setFilteredItems] = useState(null);

    // Gets Products By Title
    const [searchByTitle, setSearchByTitle] = useState(null);

    // Gets Products By Category
    const [searchByCategory, setSearchByCategory] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=50')
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    };

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.includes(searchByCategory))
    };

    const filterBy = (searchType, items, searchByTitle, searchByCategory) =>{
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (!searchType) {
            return items
        }
    }

    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory]);

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
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};