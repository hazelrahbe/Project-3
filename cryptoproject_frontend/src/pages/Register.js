import { useState } from "react"

const Register = () => {
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
      <label htmlFor="username">Username:</label>
      <input id="username" type="text" onChange={handleChange} value={formState.username}/>
      <label htmlFor="email">email:</label>
      <input id="email" type="text" onChange={handleChange} value={formState.password}/>
      <label htmlFor="password">Password:</label>
      <input id="password" type="password" onChange={handleChange} value={formState.password}/>
      <button type="submit">Register</button>
    </form>
  );
}
export default Register;