import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Show = () => {
  const [alldrinks, setDrink] = useState([])
  const { id } = useParams()
  const URL = `https://drinks--backend.herokuapp.com/drinks/${id}`

  const getDrink = async () => {
    try {
      const response = await fetch(URL)
      const result = await response.json()
      setDrink(result)
    } catch (err) {
      console.log(err)
    }
  }

//   console.log(`Current Drink: ${JSON.stringify(alldrinks)}`)

  useEffect(() => {
    getDrink()
  }, [])

  return (
    <div className="person">
            <h1>Show Page</h1>
            <h2>{alldrinks.strDrink}</h2>
            <img src={alldrinks.strDrinkThumb} />
    </div>

  )
}

export default Show
