import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'
    const context = useContext(ShoppingCartContext);

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/all'
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/mensClothing'
                        onClick={() => context.setSearchByCategory("men")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Men's clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/womensClothing'
                        onClick={() => context.setSearchByCategory("wo")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Women's clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                        onClick={() => context.setSearchByCategory("electronics")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/jewelery'
                        onClick={() => context.setSearchByCategory("jewelery")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                        onClick={() => context.setSearchByCategory("others")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    viakure@example.com
                </li>
                <li>
                    <NavLink to='/MyOrders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/MyAccount'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/SignIn'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center">
                    <ShoppingBagIcon className="h-6 w-6 text-black" />
                    <div>{context.cartProducts.length}</div>
                </li>
            </ul>
        </nav>
    );
};

export { Navbar };