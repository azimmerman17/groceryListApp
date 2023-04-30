import { useContext, useState, useEffect } from "react"

import { CurrentUser } from "../Contexts/currentUser"
import Stack from "react-bootstrap/Stack"
import GroceryListItem from "./GroceryListItem"

const GroceryList = () => {
  const { currentUser } = useContext(CurrentUser)
  let [foodList, setFoodList] = useState([])
  let groceryList = []

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/food`)
      const resData = await response.json()
      setFoodList(resData)
    }
    fetchData()
  },[])

  if (foodList.length && currentUser) {
    const { grocery_list } = currentUser
    grocery_list.forEach(item => {
      foodList.filter(food => item === food._id)
      groceryList.push(foodList)
    });
  }

  // if (!groceryList.length) return <h3>There are no items on your grocery list</h3>

  const showList = groceryList.map(item => {
      const { _id } = item
      return (
        <Stack key={_id} gap={2}>
          <GroceryListItem item={item} />
        </Stack>
      )
    })

  return (
    <div>
      {groceryList.length ? showList : <h3>There are no items on your grocery list</h3> }
    </div>
  )
}

export default GroceryList