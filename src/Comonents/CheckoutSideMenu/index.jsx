import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon} from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../Utils';
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
    };
    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.lenght,
            totalPrice: totalPrice(context.cartProducts)
        };
        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
    };

    return(
        <aside className={` ${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-1 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl p-6'> My Order </h2>
                <XMarkIcon className="h-6 w-6 text-black fixed right-3 cursor-pointer" onClick={() => context.closeCheckoutSideMenu()}/>

            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {
                context.cartProducts.map(product => (
                    <OrderCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageUrl={product.image}
                    price={product.price}
                    handleDelete={handleDelete}
                    />
                ))
            }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-lg'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/MyOrders/last'>
                    <button className='w-full bg-black py-3 text-white rounded ' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
};

export { CheckoutSideMenu }