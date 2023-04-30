import { useContext, useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import { CurrentUser } from "../Contexts/currentUser"
import Stack from "react-bootstrap/Stack"
import GroceryListItem from "./GroceryListItem"

const GroceryList = () => {
  const { currentUser } = useContext(CurrentUser)

  let [foodList, setFoodList] = useState([])
  let [selectedList, setSelectedList] = useState([])
  let groceryList = []

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/food`)
      const resData = await response.json()
      setFoodList(resData)
    }
    fetchData()
  },[currentUser])

  if (currentUser) {
    const { grocery_list } = currentUser
    grocery_list.forEach(item => {
      foodList.filter(food => item === food._id)
      groceryList.push(foodList)
    });
    // setSelectedList(groceryList)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const showList = groceryList.map(item => {
      const { _id } = item
      return (
        <Stack key={_id} gap={2}>
          <GroceryListItem item={item} selectedList={selectedList} setSelectedList={setSelectedList}/>
        </Stack>
      )

    })

    const showButton = () => {
      //  this button does not work
      return (
        <Button className='p-2 m-1' variant="primary" type='submit' onSubmit={e => handleSubmit(e)}>
          Save
        </Button>
      )
    }

  return (
    <Form>
      {groceryList.length ? showList : <h3>There are no items on your grocery list</h3> }
      {/* {groceryList.length ? showButton() : null } */}
    </Form>
  )
}

export default GroceryList