import { useContext } from 'react'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

const Home = () => {
  const { items, filteredItems, searchValue, setSearchValue } = useContext(ShoppingCartContext)

  const renderView = () => {
    if (searchValue.length > 0) {
      if (filteredItems.length > 0) return filteredItems?.map((item) => <Card key={item.id} data={item} />)

      return <>Sorry we don&apos;t have anything :(</>
    }
    return items?.map((item) => <Card key={item.id} data={item} />)
  }

  return (
    <>
      <h1>Exclusive Products</h1>
      <input
        type='text'
        placeholder='Search a product'
        className='rounded-lg border border-black w-80 p-4 mb-10 focus:outline-none'
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className='grid gap4 grid-cols-4 w-full max-w-screen-lg'>{renderView()}</div>
      <ProductDetail />
    </>
  )
}

export default Home
