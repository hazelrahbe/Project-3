import { useState } from "react"
import { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
const BASE_URL = "https://drinks--backend.herokuapp.com/drinks";


const initialForm = { strDrink: '', strDrinkThumb: '', idDrink:''};
const getCocktails = async () => {
  try {
    const response = await fetch(BASE_URL);
    const allCocktails = await response.json();
    console.log(response)
   setCocktail(allCocktails)
  } catch (err) {
    console.log(err);
  }
  
};

const navigate = useNavigate();
const [cocktail, setCocktail] = useState([]);
const [newForm, setNewForm] = useState(initialForm)

useEffect(() => {
    getCocktails();
}, [])

const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const newCocktail = { ...newForm }
    const testingOutput = JSON.stringify(newCocktail)
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // specify authentication values for apis
      },
      body: testingOutput

    }
    
    const response = await fetch(BASE_URL, options)
    const responseData = await response.json()
    navigate('/cocktails')
  } catch (err) {
    console.log(err)
  }
}

const handleChange = (e) => {
  console.log("current input", e.target.id)
  const data = { ...newForm, [e.target.id]: e.target.value }
  console.log(data)
  setNewForm(data)
}

const loaded = () => {
return cocktail?.map((drink) => {
   return (
       <div key={drink._id} className='drink-card'>
           <Link to={`/create/${drink._id}`}>
           <h1>{drink.name}</h1>
           <img src={drink.image} alt={drink.title} />
           <h3>{drink.title}</h3>
           </Link>
       </div>
   );
  });
};

const loading = () => {
  return (
<section className="people-list">
   <h1>
       Loading...
       <span>
          <img role="presentation" alt="spinner logo" className="spinner" src="https://freesvg.org/img/1544764567.png"/>
       </span>
   </h1>
</section>
)};

  return (
    <form onSubmit={handleSubmit}>
      <div className="login">
        <label className="labels">cocktailName</label>
        <div className="placeholders">
          <input id="strDrink" type="text" onChange={handleChange} value={newForm.strDrink} />
        </div>
        <label className="labels">img</label>
        <div className="placeholders">
          <input id="strDrinkThumb" type="text" onChange={handleChange} value={newForm.strDrinkThumb} />
        </div>
        <div className="placeholders">
          <button id="createButton" type="submit">Create Cocktail</button>
        </div>
      </div>
    </form>
  );
}

export default Create
// export {getCocktails}