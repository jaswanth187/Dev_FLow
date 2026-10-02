import logo from '../assets/Dev_flow_black_theme.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="DevFlow" className="logo" />
      </div>

      <nav className="nav">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#login">Login</a>

        <button className="header-cta">
          Get Started
        </button>
      </nav>
    </header>
  )
}

export default Header