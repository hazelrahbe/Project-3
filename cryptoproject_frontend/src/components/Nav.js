import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to='/'>
                <p>Home</p>
            </Link>
            <Link to="/markets">
                <p>Markets</p>
            </Link>
            <Link to="/trade">
                <p>Trade</p>
            </Link>
        </div>
    )
}

export default Nav;