import { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';


const FoodList = () => {
 let [fooditems, setFoodItems] =useState([])

 useEffect(() => {
  const fetchData = async () => {
   const response = await fetch(`http://localhost:8080/food`)
   console.log(response)
   const resData = await response.json()
   setFoodItems(resData)
  }
  fetchData()
 }, [])
 console.log(fooditems)
 let food = fooditems.map((item) => {
  return (
   <ListGroup.Item>
    Food Item
   </ListGroup.Item>
  )
 })

 return (
   <ListGroup>
    {food}
   </ListGroup>
 )
}

export default FoodList;

