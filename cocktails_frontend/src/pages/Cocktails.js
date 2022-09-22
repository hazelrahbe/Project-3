import React from "react";
import { useState, useEffect } from "react";
import { json, Link } from "react-router-dom";

const Cocktails = () => {
const [alldrinks, setDrink] = useState([]);

useEffect(() => {fetch('https://drinks--backend.herokuapp.com/drinks')
.then((res) => res.json())
.then((json) => {
    // console.log(json)
    setDrink(json)
})
.catch(console.error)}, []);
console.log(alldrinks)
    return (
        <section className="container">
            {alldrinks.map((drink) => {
                return (
                <div key = {drink._id} className="card">

                    <Link to= {`/cocktails/`}></Link>
                    <p>ID: {drink._id}</p>
                    <p>Cocktail Name: {drink.strDrink}</p>
                    <img src={drink.strDrinkThumb}/>
                    </div>
                )
            })}
        </section>
    )
}
    export default Cocktails;