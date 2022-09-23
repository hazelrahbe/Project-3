import { Form, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
const Nav = (props) => {
    return (
        <div className="nav">
            <Link style={{textDecoration: 'none'}} to='/'>
            <div class="whiteP"><p>Home</p></div>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/cocktails">
            <div class="whiteP"><p>Cocktails</p></div>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/trade">
            <div class="whiteP"><p>CreateYourOwn</p></div>
            </Link>

            <div class="row h-100 justify-content-center align-items-center"></div>
        <InputGroup className="col-6">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>
    )
}

export default Nav;