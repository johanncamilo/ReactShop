import PropTypes from 'prop-types'
import { useContext } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Card = ({ data }) => {
  Card.propTypes = {
    data: PropTypes.object.isRequired,
  }

  /**
   * @useContext lee el estado global
   */
  const { counter, setCounter, openProductDetail } = useContext(ShoppingCartContext)
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg' onClick={() => openProductDetail()}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.category}</span>
        <img className='w-full h-full object-cover rounded-lg' src={data.image} alt={data.title} />
        <button
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2'
          onClick={() => setCounter(counter + 1)}
        >
          <PlusCircleIcon className='h-6 w-6 text-black-500' />
        </button>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data.title}</span>
        <span className='text-lg font-medium'>${data.price}</span>
      </p>
    </div>
  )
}

export default Card
