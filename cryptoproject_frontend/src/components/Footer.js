import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
        <div className="footer">
            <Link style={{textDecoration: 'none'}} to="/aboutus">
                <p>About Us</p>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/privacypolicy">
                <p>Privacy Policy</p>
            </Link>
        </div>
    )
}

export default Footer;