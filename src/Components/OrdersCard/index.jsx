// import { XCircleIcon } from '@heroicons/react/24/solid'

const OrdersCard = ({ totalPrice, totalProducts }) => {
  const date = new Date()
  return (
    <div className='flex justify-between items-center mb-3 border border-black'>
      <p>
        <span>{date.toLocaleDateString()}</span>&nbsp;
        <span>{totalProducts}</span>&nbsp;
        <span>{totalPrice}</span>&nbsp;
      </p>
    </div>
  )
}

export default OrdersCard
