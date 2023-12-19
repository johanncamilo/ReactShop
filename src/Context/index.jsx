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
   * PRODUCT DETAIL - SHOW PRODUCT
   */
  const [productToShow, setProductToShow] = useState({})

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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
