import { useContext } from 'react'
import { Link } from 'react-router-dom'

import OrdersCard from '../../Components/OrdersCard'
import { ShoppingCartContext } from '../../Context'

const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext)
  return (
    <>
      <div className='flex items-center justify-center relative w-80'>
        <h1>MyOrders</h1>
      </div>
      {/* Avoiding Annoying semicolon */}
      {order.map(({ id, totalPrice, totalProducts }, index) => (
        <Link key={index} to={`/my-orders/${id}`}>
          <OrdersCard totalPrice={totalPrice} totalProducts={totalProducts} />
        </Link>
      ))}
    </>
  )
}

export default MyOrders
