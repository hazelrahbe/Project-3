import React from "react";
import { useState, useEffect } from "react";
import { json, Link } from "react-router-dom";


const Markets = () => {
const [allmarket, setMarket] = useState([]);

useEffect(() => {fetch('https://rest-sandbox.coinapi.io/v1/exchangerate/USD?apikey=E886BD4A-B5AA-479D-8002-ED0EFEFF048B')
.then((res) => res.json())
.then((json) => {
    console.log(json)
    setMarket(json.rates)
})
.catch(console.error)}, []);
console.log(allmarket)
    return (
        <section className="container">
            {allmarket.map((market, index, rates) => {
                return (
                <div key = {index} className="card">
                    <Link to= {`/markets/${index}`}></Link>
                    <p>Time: {market.time}</p>
                    <p>Asset ID: {market.asset_id_quote}</p>
                    <p>Rate: {market.rate}</p>
                    <button>Trade</button>
                    </div>
                )
            })}
        </section>
    )
}
    export default Markets;

