import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <div className="nav">
            <Link style={{textDecoration: 'none'}} to='/'>
            <div class="whiteP"><p>Home</p></div>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/markets">
            <div class="whiteP"><p>Markets</p></div>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/trade">
            <div class="whiteP"><p>Trade</p></div>
            </Link>
        </div>
    )
}

export default Nav;