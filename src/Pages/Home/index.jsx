import { useContext } from 'react'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

const Home = () => {
  const { items, setSearchValue } = useContext(ShoppingCartContext)

  return (
    <>
      <h1>Exclusive Products</h1>
      <input
        type='text'
        placeholder='Search a product'
        className='rounded-lg border border-black w-80 p-4 mb-10 focus:outline-none'
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className='grid gap4 grid-cols-4 w-full max-w-screen-lg'>
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </>
  )
}

export default Home
