import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const activeStyle = 'underline underline-offset-4'

  const leftnav = [
    { to: '/', text: 'Shope', className: 'font-semibold text-lg' },
    { to: '/', text: 'All', className: '' },
    { to: '/clothes', text: 'Clothes', className: '' },
    { to: '/electronics', text: 'Electronics', className: '' },
    { to: '/furniture', text: 'Furniture', className: '' },
    { to: '/toys', text: 'Toys', className: '' },
    { to: '/others', text: 'Others', className: '' },
  ]

  const rightnav = [
    { to: undefined, text: 'milodevcool@gmail.com', className: 'text-black/60' },
    { to: '/my-orders', text: 'my-orders', className: '' },
    { to: '/my-account', text: 'my-account', className: '' },
    { to: '/sign-in', text: 'sign-in', className: '' },
    { to: undefined, text: '🛒 0', className: '' },
  ]

  const NavLinkClass = (isActive) => (isActive ? activeStyle : undefined)

  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
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

      <ul className='flex items-center gap-3'>
        {rightnav.map(({ to, text, className }) => {
          return (
            <li key={text} className={className}>
              {to ? (
                <NavLink to={to} className={({ isActive }) => NavLinkClass(isActive)}>
                  {text}
                </NavLink>
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
