import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <div className="nav">
            <Link style={{textDecoration: 'none'}} to='/'>
                <p>Home</p>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/markets">
                <p>Markets</p>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/trade">
                <p>Trade</p>
            </Link>
        </div>
    )
}

export default Nav;