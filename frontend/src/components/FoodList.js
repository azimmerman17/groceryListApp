import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useContext } from "react";

//import Recipes from "../Recipes";
import AddToListItem from "./AddToListItem";
import { CurrentUser } from "../Contexts/currentUser"

const FoodList = () => {
 let [fooditems, setFoodItems] =useState([])
 let [selectedList, setSelectedList] = useState([])
 const { currentUser } = useContext(CurrentUser)

try {
  useEffect(() => {
   const fetchData = async () => {
    const response = await fetch(`https://grocery-list-app-4y2gz122s-azimmerman17.vercel.app/food`)
    const resData = await response.json()
    setFoodItems(resData)
   }
   fetchData()
  }, [])
 
  const handleClick = (e, _id) => {
    e.target.checked ?  e.target.value = 'on' :  e.target.value = 'off'
   if (e.target.checked === true) {
     setSelectedList([...selectedList, _id])
   } else {
     selectedList.forEach((item, i) => {
       item = _id ? setSelectedList(selectedList.splice(1,i)) : null
       })
   }
  }
  
    let food = fooditems.map((item) => {
      const { _id } = item
        return (
          <Row className="width-80 border rounded p-2 m-auto my-2" key={_id}>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="" onClick={e => handleClick(e, _id)} />
            </Form.Group>
              <AddToListItem item={item} />
          </Row>
        )  
    })

    return (
    <Form method='POST' action={`https://grocery-list-app-4y2gz122s-azimmerman17.vercel.app/user/${currentUser._id}/food?_method=PUT&food=${selectedList}`}>
      <Button variant="primary" type="submit" >
        Save List
      </Button>
      {food}
    </Form>
    )
  }  catch (error) {

  }
}

export default FoodList;

