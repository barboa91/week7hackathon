import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navBar">
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="">About</Link>
        </li>
        <li>
          <Link to="">Travel</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
