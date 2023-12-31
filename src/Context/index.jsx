import { createContext, useState, useEffect, useCallback } from 'react'
import { apiUrl } from '../api'

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

  // Get Products
  const [items, setItems] = useState(null)

  // Filter Products by searchValue, category
  const [filteredItems, setFilteredItems] = useState(null)

  // Get products by searchValue
  const [searchValue, setSearchValue] = useState(null)

  // Get products by category
  const [category, setCategory] = useState(null)

  useEffect(() => {
    fetch(apiUrl)
      .then((respone) => respone.json())
      .then(setItems)
      .catch(console.error)
  }, [])

  const filteredItemsByValue = (items, searchValue) => {
    return items?.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
  }

  const filteredItemsByCategory = (items, category) => {
    return items?.filter((item) => item.category === category)
  }

  const filterBy = useCallback((type, items, searchValue, category) => {
    if (type === 'BY_TITLE') return filteredItemsByValue(items, searchValue)
    if (type === 'BY_CATEGORY') return filteredItemsByCategory(items, category)
    if (type === 'BY_TITLE_AND_CATEGORY')
      return filteredItemsByCategory(items, category).filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    if (!type) return items
  }, [])

  useEffect(() => {
    if (searchValue && category) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchValue, category))
    if (searchValue && !category) setFilteredItems(filterBy('BY_TITLE', items, searchValue, category))
    if (!searchValue && category) setFilteredItems(filterBy('BY_CATEGORY', items, searchValue, category))
    if (!searchValue && !category) setFilteredItems(filterBy(null, items, searchValue, category))
  }, [items, searchValue, category, filterBy])

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
        items,
        setItems,
        searchValue,
        setSearchValue,
        filteredItems,
        setFilteredItems,
        category,
        setCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
