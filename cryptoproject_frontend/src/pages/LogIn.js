import { useState } from "react"

const Login = () => {
  const initialState = { username: '', password: '' };
  const [formState, setFormState] = useState(initialState);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    setFormState(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <input id="username" placeholder="Username" type="text" onChange={handleChange} value={formState.username}/>
      <label htmlFor="password"></label>
      <input id="password" placeholder="Password" type="password" onChange={handleChange} value={formState.password}/>
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;