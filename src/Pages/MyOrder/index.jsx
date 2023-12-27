import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'

const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext)
  return (
    <>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black-500 cursor-pointer' />
        </Link>
        <h1>MyOrder</h1>
      </div>
      <div className='flex flex-col w-80'>
        {order?.slice(-1)[0].products.map(({ id, title, image, price }) => (
          <OrderCard key={id} id={id} title={title} image={image} price={price} />
        ))}
      </div>
    </>
  )
}

export default MyOrder
