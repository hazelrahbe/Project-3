import React from "react";
import { useState, useEffect } from "react";
import { json, Link } from "react-router-dom";

const Cocktails = () => {
const [alldrinks, setDrink] = useState([]);

useEffect(() => {fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
.then((res) => res.json())
.then((json) => {
    // console.log(json.rates)
    setDrink(json.drinks)
})
.catch(console.error)}, []);
console.log(alldrinks)
    return (
        <section className="container">
            {alldrinks.map((drink, index) => {
                return (
                <div key = {index} className="card">

                    <Link to= {'/markets'}></Link>
                    <p>Cocktail Name: {drink.strDrink}</p>
                    <img src={drink.strDrinkThumb}/>
                    <p>ID: {drink.idDrink}</p>

                    </div>
                )
            })}
        </section>
    )
}
    export default Cocktails;