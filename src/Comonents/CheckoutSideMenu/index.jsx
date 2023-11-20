import { useContext } from 'react';
import { XMarkIcon} from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    return(
        <aside className={` ${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-1 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl p-6'> My Order </h2>
                <XMarkIcon className="h-6 w-6 text-black fixed right-3 cursor-pointer" onClick={() => context.closeCheckoutSideMenu()}/>

            </div>
        </aside>
    )
};

export { CheckoutSideMenu }