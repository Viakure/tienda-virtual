import { XMarkIcon} from '@heroicons/react/24/solid'

const OrderCard = props => {
    const { title, imageUrl, price } = props
    return(
        <div className="flex justify-between items-center py-2">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} title={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium px-2'>{price}</p>
                <XMarkIcon className="h-6 w-6 text-black fixed right-3 cursor-pointer pl-2"/>
            </div>
        </div>
    )
};

export { OrderCard };