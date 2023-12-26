import { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import { TotalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, shoppingCart, setShoppingCart, counter, setCounter, order, setOrder } =
    useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = shoppingCart.filter((product) => product.id != id)

    setShoppingCart(filteredProducts)
    setCounter(counter - 1)

    if (filteredProducts.length < 1) closeCheckoutSideMenu()
  }

  const handleCheckout = () => {
    // ? object with order card info
    const orderToAdd = {
      date: '12.12.12',
      products: shoppingCart,
      totalProducts: shoppingCart.length,
      totalPrice: TotalPrice(shoppingCart),
    }

    setOrder([...order, orderToAdd])
    setShoppingCart([])
    setCounter(0)
    closeCheckoutSideMenu()
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
      <div className='px-6 flex-1'>
        {shoppingCart.map(({ id, title, image, price }) => (
          <OrderCard key={id} id={id} title={title} image={image} price={price} handleDelete={handleDelete} />
        ))}
      </div>
      <div className='px-6'>
        <p className='flex justify-between items-center mb-5'>
          <span className='font-light'>Total: </span>
          <span className='font-medium text-2xl'>${TotalPrice(shoppingCart)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button className='bg-black p-3 text-white font-bold rounded-lg w-full' onClick={() => handleCheckout()}>
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
