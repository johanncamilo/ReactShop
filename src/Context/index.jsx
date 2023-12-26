import { createContext, useState } from 'react'

/**
 * exporta el @createContext para ser consumido por componentes hijos usando @useContext
 */
export const ShoppingCartContext = createContext()

/**
 * exporta el @Provider para instanciarlo como wrapper en componentes padre
 */
export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart Counter
  const [counter, setCounter] = useState(0)

  // Toggle Product Detail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const toggleProductDetail = () => setIsProductDetailOpen(!isProductDetailOpen)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Toggle Checkout Side Menu
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const toggleCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Show Product Detail
  const [productToShow, setProductToShow] = useState({})

  // Shopping Cart - Add products to cart
  const [shoppingCart, setShoppingCart] = useState([])

  // Shopping Cart - Order
  const [order, setOrder] = useState([])

  return (
    <ShoppingCartContext.Provider
      value={{
        counter,
        setCounter,
        toggleProductDetail,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        toggleCheckoutSideMenu,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        isCheckoutSideMenuOpen,
        productToShow,
        setProductToShow,
        shoppingCart,
        setShoppingCart,
        order,
        setOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
