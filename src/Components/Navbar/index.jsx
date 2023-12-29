import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
  const { counter, toggleCheckoutSideMenu } = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  const leftnav = [
    { to: '/', text: 'Shope', className: 'font-semibold text-lg' },
    { to: '/', text: 'All', className: '' },
    { to: `/mens-clothing`, text: `Men's clothing`, className: '' },
    { to: `/womens-clothing`, text: `Women's clothing`, className: '' },
    { to: '/electronics', text: 'Electronics', className: '' },
    { to: '/jewelery', text: 'Jewelery', className: '' },
    { to: '/others', text: 'Others', className: '' },
  ]

  const rightnav = [
    { to: undefined, text: 'milodevcool@gmail.com', className: 'text-white font-bold cursor-pointer' },
    { to: '/my-orders', text: 'My Orders', className: '' },
    { to: '/my-account', text: 'My Account', className: '' },
    { to: '/sign-in', text: 'Sign In', className: '' },
    { to: undefined, text: 'shopping-bag', className: 'cursor-pointer flex items-center' },
  ]

  const NavLinkClass = (isActive) => (isActive ? activeStyle : undefined)

  return (
    <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light bg-black/80 text-white shadow-2xl'>
      <ul className='flex items-center gap-3'>
        {leftnav.map(({ to, text, className }) => {
          return (
            <li key={text} className={className}>
              <NavLink to={to} className={text === 'Shope' ? '' : ({ isActive }) => NavLinkClass(isActive)}>
                {text}
              </NavLink>
            </li>
          )
        })}
      </ul>

      {/* Conditional Rendering */}
      <ul className='flex items-center gap-3'>
        {rightnav.map(({ to, text, className }) => {
          return (
            <li key={text} className={className}>
              {to ? (
                <NavLink to={to} className={({ isActive }) => NavLinkClass(isActive)}>
                  {text}
                </NavLink>
              ) : text === 'shopping-bag' ? (
                <>
                  <ShoppingBagIcon className='h-6 w-6 text-white' onClick={() => (counter > 0 ? toggleCheckoutSideMenu() : {})} /> &nbsp;{' '}
                  <div className='font-bold'>{counter}</div>
                </>
              ) : (
                <>{text}</>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default Navbar
