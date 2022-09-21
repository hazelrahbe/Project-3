import React from "react";
import { useState, useEffect } from "react";
import { json, Link } from "react-router-dom";


const Markets = () => {
const [allmarket, setMarket] = useState([]);

useEffect(() => {fetch('https://cryptog-backend.herokuapp.com/coins/markets')
.then((res) => res.json())
.then((json) => {
    // console.log(json)
    setMarket(json)
})
.catch(console.error)}, []);
console.log(allmarket)
    return (
        <section className="container">
            {allmarket.map((market, index, data) => {
                return (
                <div key = {index} className="card">
                    <Link to= {'/markets'}></Link>
                    <p>ID: {market.id}</p>
                    <p>Name: {market.name}</p>
                    <p>Logo: {market.symbol}</p>
                    <p>{market.usd}</p>
                    <button>Trade</button>
                    </div>
                )
            })}
        </section>
    )
}
    export default Markets;