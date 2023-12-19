import { createContext, useState } from 'react'

/**
 * exporta el @createContext para ser consumido por componentes hijos usando @useContext
 */
export const ShoppingCartContext = createContext()

/**
 * exporta el @Provider para instanciarlo como wrapper en componentes padre
 */
export const ShoppingCartProvider = ({ children }) => {
  /**
   * SHOPPING CART COUNTER
   */
  const [counter, setCounter] = useState(0)

  /**
   * TOGGLERS
   */
  const [isProductDetailOpen, setIsProductDetailOpen] = useState()
  const toggleProductDetail = () => setIsProductDetailOpen(!isProductDetailOpen)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  /**
   * SHOW PRODUCT DETAIL
   */
  const [productToShow, setProductToShow] = useState({})

  /**
   * SHOPPING CART
   */
  const [shoppingCart, setShoppingCart] = useState([])

  return (
    <ShoppingCartContext.Provider
      value={{
        counter,
        setCounter,
        toggleProductDetail,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        shoppingCart,
        setShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
