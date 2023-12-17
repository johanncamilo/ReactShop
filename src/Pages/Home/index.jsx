import { useState, useEffect } from 'react'
import Card from '../../Components/Card'
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
      Home
      <div className='grid gap4 grid-cols-4 w-full max-w-screen-lg'>
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </>
  )
}

export default Home
