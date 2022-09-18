import {Routes, Route } from "react-router-dom"
import Markets from '../pages/Markets'

const MarketPage = () => {
    return (
        <Route>
            <Route path='/market' element={<Markets/>} />
        </Route>
    )
}

export default MarketPage  