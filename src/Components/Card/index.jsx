import PropTypes from 'prop-types'
import { useContext } from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Card = ({ data }) => {
  Card.propTypes = {
    data: PropTypes.object.isRequired,
  }

  /**
   * @useContext lee el estado global
   */
  const {
    counter,
    setCounter,
    closeProductDetail,
    openProductDetail,
    setProductToShow,
    shoppingCart,
    setShoppingCart,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
  } = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    closeCheckoutSideMenu()
    openProductDetail()
    setProductToShow(productDetail)
  }

  const addProductsToCart = (productData) => {
    setCounter(counter + 1)
    setShoppingCart([...shoppingCart, productData])
    closeProductDetail()
    openCheckoutSideMenu()
  }

  const renderIcon = (id) => {
    const isInCart = shoppingCart.filter((product) => product.id === id).length > 0
    // Conditional Rendering
    return (
      <>
        {isInCart ? (
          <div className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2'>
            <CheckIcon className='h-6 w-6 text-white' />
          </div>
        ) : (
          <button
            className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2'
            onClick={(e) => {
              e.stopPropagation()
              addProductsToCart(data)
            }}
          >
            <PlusIcon className='h-6 w-6 text-black' />
          </button>
        )}
      </>
    )
  }

  return (
    <div className='bg-white cursor-pointer w-56 rounded-lg mb-5' onClick={() => showProduct(data)}>
      <figure className='relative mb-3 w-full'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black font-bold text-xs m-2 px-3 py-0.5'>{data.category}</span>
        <img className='bg-white w-full h-72 object-contain rounded-lg' src={data.image} alt={data.title} />
        {renderIcon(data.id)}
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data.title}</span>
        <span className='text-lg font-medium'>${data.price}</span>
      </p>
    </div>
  )
}

export default Card
