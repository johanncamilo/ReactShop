import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'

const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext)
  return (
    <>
      <h1>MyOrder</h1>
      <div className='flex flex-col w-80'>
        {order?.slice(-1)[0].products.map(({ id, title, image, price }) => (
          <OrderCard key={id} id={id} title={title} image={image} price={price} />
        ))}
      </div>
    </>
  )
}

export default MyOrder
