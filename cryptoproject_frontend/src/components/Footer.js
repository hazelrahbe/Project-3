import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
        <div className="footer">
            <Link to="/aboutus">
                <p>About Us</p>
            </Link>
            <Link to="/privacypolicy">
                <p>Privacy Policy</p>
            </Link>
        </div>
    )
}

export default Footer;