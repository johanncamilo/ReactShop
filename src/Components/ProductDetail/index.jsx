import { XCircleIcon } from '@heroicons/react/24/solid'
import './styles.css'

const ProductDetail = () => {
  return (
    <aside className='product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white/60'>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <XCircleIcon className='h-6 w-6 text-black-500' />
        </div>
      </div>
    </aside>
  )
}

export default ProductDetail
