import { useContext } from 'react'
import { ShoppingCartContext } from '../Context'

/**
 * This function calculates total price of a new order
 * @React_component names must start with an uppercase letter.
 * @React_Hook names must start with the word "use".
 */
export const TotalPrice = () => {
  const { shoppingCart } = useContext(ShoppingCartContext)

  const initialValue = 0
  const getSum = shoppingCart.reduce((total, current) => total + current.price, initialValue)
  return getSum
}
