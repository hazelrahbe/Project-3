import { Link } from "react-router-dom";


const Footer = (props) => {
    return (
        <div className="footer">
            <Link style={{textDecoration: 'none'}} to="/aboutus">
            <div className="footerdiv">
            <div class="whiteP"><p>About Us</p></div></div>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/privacy">
                <div className="footerdiv">
            <div class="whiteP"><p>Privacy Policy</p></div></div>
            </Link>
        </div>
    )
}

export default Footer;