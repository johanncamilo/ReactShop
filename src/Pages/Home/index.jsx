import { useContext } from 'react'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

const Home = () => {
  const { items } = useContext(ShoppingCartContext)
  return (
    <>
      <h1>Home</h1>
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
