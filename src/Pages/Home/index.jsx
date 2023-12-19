import { useState, useEffect } from 'react'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { apiUrl } from '../../api'

const Home = () => {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch(apiUrl)
      .then((respone) => respone.json())
      .then(setItems)
      .catch(console.error)
  }, [])

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
