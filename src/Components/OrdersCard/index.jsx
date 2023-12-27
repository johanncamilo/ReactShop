import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = ({ totalPrice, totalProducts }) => {
  const date = new Date()
  return (
    <div className='flex justify-center items-center mb-3 border border-black p-4 w-80 rounded-lg'>
      <div className='flex justify-between w-full'>
        <p className='flex flex-col font-light'>
          <span>{date.toLocaleDateString()}</span>
          <span>
            {totalProducts} {totalProducts === 1 ? 'article' : 'articles'}
          </span>
        </p>
        <p className='flex items-center gap-2'>
          <span className='font-medium text-2xl'>${totalPrice}</span>
          <ChevronRightIcon className='h-6 w-6 text-black-500 cursor-pointer' />
        </p>
      </div>
    </div>
  )
}

export default OrdersCard
