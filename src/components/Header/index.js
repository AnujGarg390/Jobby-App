import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="navbar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            />
          </Link>
          <ul className="navbar-mobile-icon-container">
            <li>
              <Link to="/">
                <AiFillHome className="mobile-nav-link" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <BsFillBriefcaseFill className="mobile-nav-link" />
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="logout-img-btn"
                onClick={onClickLogout}
                aria-label="Control Label"
              >
                <FiLogOut className="mobile-nav-link" />
              </button>
            </li>
          </ul>
        </div>

        <div className="navbar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/jobs" className="nav-link">
                Jobs
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="logout-desktop-btn"
                onClick={onClickLogout}
              >
                LogOut
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
