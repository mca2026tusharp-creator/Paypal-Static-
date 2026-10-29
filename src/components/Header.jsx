const PayPalLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 28"
    width="26"
    height="30"
    aria-label="PayPal"
    role="img"
  >
    <path
      d="M20.905 5.478C20.905 2.188 18.162 0 14.282 0H5.705C5.09 0 4.564 0.44 4.474 1.048L1.35 20.048C1.282 20.483 1.618 20.874 2.058 20.874H6.634L7.818 13.38L7.783 13.603C7.873 12.995 8.394 12.555 9.01 12.555H11.18C15.59 12.555 19.063 10.652 20.004 5.533C20.031 5.39 20.054 5.253 20.074 5.118C20.523 5.262 20.905 5.478 20.905 5.478Z"
      fill="#003087"
    />
    <path
      d="M9.413 5.248C9.473 4.91 9.68 4.636 9.956 4.48C10.087 4.405 10.236 4.363 10.394 4.363H16.385C17.095 4.363 17.757 4.41 18.363 4.51C18.537 4.539 18.706 4.574 18.869 4.614C19.033 4.654 19.19 4.7 19.342 4.752C19.418 4.777 19.492 4.805 19.565 4.834C19.855 4.95 20.12 5.087 20.357 5.248C20.031 3.176 18.472 1.445 15.805 1.445H9.84C9.225 1.445 8.697 1.885 8.609 2.493L5.488 21.493L5.453 21.717C5.508 21.365 5.81 21.1 6.168 21.1H8.003L9.413 5.248Z"
      fill="#003087"
    />
    <path
      d="M20.074 5.118C20.054 5.253 20.031 5.39 20.004 5.533C19.063 10.652 15.59 12.555 11.18 12.555H9.01C8.394 12.555 7.873 12.995 7.783 13.603L6.168 23.87C6.11 24.237 6.39 24.568 6.762 24.568H10.522C11.062 24.568 11.521 24.185 11.6 23.652L11.638 23.444L12.368 18.82L12.415 18.549C12.494 18.015 12.953 17.633 13.493 17.633H14.163C18.07 17.633 21.143 15.94 21.977 11.37C22.326 9.454 22.13 7.858 21.148 6.737C20.85 6.4 20.49 6.12 20.074 5.892C20.091 5.634 20.091 5.378 20.074 5.118Z"
      fill="#0070e0"
    />
  </svg>
)

const ChevronDown = () => (
  <svg
    className="chevron"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 4.5L6 8L9.5 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const navItems = ['Personal', 'Business', 'Partners', 'Useful Info']

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <span className="logo" aria-label="PayPal home">
          <PayPalLogo />
        </span>
        <nav className="nav-items">
          {navItems.map((item) => (
            <button key={item} className="nav-item" type="button">
              {item}
              <ChevronDown />
            </button>
          ))}
        </nav>
      </div>
      <div className="header-right">
        <button className="btn btn-login" type="button">
          Log In
        </button>
        <button className="btn btn-signup-header" type="button">
          Sign Up
        </button>
      </div>
    </header>
  )
}

export default Header
