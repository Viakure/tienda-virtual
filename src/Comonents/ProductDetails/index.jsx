import { useContext } from 'react';
import { XMarkIcon} from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import './styles.css'

const ProductDetails = () => {
    const context = useContext(ShoppingCartContext);
    return(
        <aside className={` ${context.isProductDetailsOpen ? 'flex' : 'hidden'} product-details flex-col fixed right-1 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl p-6'>
                Detalles
                </h2>
                <XMarkIcon className="h-6 w-6 text-black fixed right-3 cursor-pointer" onClick={() => context.closeProductDetail()}/>

            </div>

        </aside>
    )
};

export { ProductDetails }