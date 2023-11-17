import { useContext } from "react";
import { NavLink } from "react-router-dom";
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
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/mens-clothing'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        men's clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/womens-clothin'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        women's clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/jewelery'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
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
                <li>
                    🛒 {context.count}
                </li>
            </ul>
        </nav>
    );
};

export { Navbar };