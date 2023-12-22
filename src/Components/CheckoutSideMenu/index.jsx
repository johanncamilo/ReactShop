import { useContext } from 'react'

import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import './styles.css'

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, shoppingCart, setShoppingCart, counter, setCounter } = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = shoppingCart.filter((product) => product.id != id)

    setShoppingCart(filteredProducts)
    setCounter(counter - 1)

    if (filteredProducts.length < 1) closeCheckoutSideMenu()
  }
  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } checkout-side-menu scrollable-cards flex flex-col fixed right-0 border border-black rounded-lg bg-white/80`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
          <XCircleIcon className='h-6 w-6 text-black-500 cursor-pointer' onClick={() => closeCheckoutSideMenu()} />
        </div>
      </div>
      <div className='px-6'>
        {shoppingCart.map(({ id, title, image, price }) => (
          <OrderCard key={id} id={id} title={title} image={image} price={price} handleDelete={handleDelete} />
        ))}
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
