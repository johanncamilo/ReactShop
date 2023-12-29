import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'

const Category = ({ category }) => {
  const { setCategory, filteredItems } = useContext(ShoppingCartContext)
  const title = category.charAt(0).toUpperCase() + category.slice(1)

  setCategory(category)

  const renderView = () => {
    return filteredItems?.map((item) => <Card key={item.id} data={item} />)
  }

  return (
    <>
      <h1>{title}</h1>
      <div className='grid gap4 grid-cols-4 w-full max-w-screen-lg'>{renderView()}</div>
      <ProductDetail />
    </>
  )
}

export default Category

// ! index.jsx:10 Warning: Cannot update a component (`ShoppingCartProvider`) while rendering a different component (`Category`). To locate the bad setState() call inside `Category`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render
// ! at Category (http://localhost:5173/src/Pages/Category/index.jsx:22:21)
