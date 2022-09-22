import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useEffect } from 'react';

const Search = (props) => {
    return (
        <div class="row h-100 justify-content-center align-items-center">
        <InputGroup className="col-6">
        <FormControl placeholder="Search" aria-label="Search"aria-describedby="basic-addon2"/>
        <Button variant="outline-secondary" id="button-addon2">Search</Button>
        </InputGroup>
        </div>
    )
}
export default Search;