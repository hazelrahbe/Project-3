import { Link } from "react-router-dom";


const Footer = (props) => {
    return (
        <div className="footer">
            <Link class="whiteP" style={{textDecoration: 'none'}} to="/aboutus">
            {/* <div class="footerdiv"> */}
            {/* <div ><p> */}
                About Us
                {/* </p></div> */}
            {/* </div> */}
            </Link>
            <Link class="whiteP" style={{textDecoration: 'none'}} to="/privacy">
            {/* <div className="footerdiv"> */}
            {/* <div ><p> */}
            Privacy Policy
            {/* </p></div> */}
            {/* </div> */}
            </Link>
        </div>
    )
}

export default Footer;