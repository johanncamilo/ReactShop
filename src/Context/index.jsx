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

  return <ShoppingCartContext.Provider value={{ counter, setCounter }}>{children}</ShoppingCartContext.Provider>
}
