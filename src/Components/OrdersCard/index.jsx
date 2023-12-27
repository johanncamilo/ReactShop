// import { XCircleIcon } from '@heroicons/react/24/solid'

const OrdersCard = ({ totalPrice, totalProducts }) => {
  return (
    <div className='flex justify-between items-center mb-3 border border-black'>
      <p>
        <span>26/12/2023</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  )
}

export default OrdersCard
