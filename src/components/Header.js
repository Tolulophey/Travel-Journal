import logo from '../images/world-logo.png'

function Header() {
  return (
    <div className='header'>
      <img src={logo} alt="world" />
      <p>my travel journal.</p>
    </div>
  )
}

export default Header