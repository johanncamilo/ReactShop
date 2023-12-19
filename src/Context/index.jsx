import { createContext, useState } from 'react'

/**
 * exporta el @createContext para ser consumido por componentes hijos usando @useContext
 */
export const ShoppingCartContext = createContext()

/**
 * exporta el @Provider para instanciarlo como wrapper en componentes padre
 */
export const ShoppingCartProvider = ({ children }) => {
  const [counter, setCounter] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState()
  const toggleProductDetail = () => setIsProductDetailOpen(!isProductDetailOpen)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  return (
    <ShoppingCartContext.Provider value={{ counter, setCounter, toggleProductDetail, openProductDetail, closeProductDetail, isProductDetailOpen }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
