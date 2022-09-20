import { Link } from "react-router-dom";

const LoginLink = () => {
    return (
    <div className="login">
        <Link to='/login'>
            <h4>LogIn</h4>
        </Link>
    </div>
    )
}

export default LoginLink;