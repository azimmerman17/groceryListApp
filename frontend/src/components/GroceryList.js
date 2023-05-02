import { useContext, useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { CurrentUser } from "../Contexts/currentUser"
import AddToListItem from "./AddToListItem";

const GroceryList = () => {
  const { currentUser } = useContext(CurrentUser)
  let [selectedList, setSelectedList] = useState([])
  let [list, setList] = useState([])

  useEffect(() => {
    if (currentUser) {
      setList(currentUser.grocery_list)

      let idList =[]
      list.forEach(item => {
        const { _id } = item
        idList.push(_id)
      })

      setSelectedList(idList)
    }
    },[currentUser])

    const handleClick = (e, _id) => {
      e.target.checked ?  e.target.value = 'on' :  e.target.value = 'off'
      if (e.target.checked === true) {
        let list = selectedList
        selectedList.forEach((item, i) => {
          if (item === _id) {
            list.splice(i,1)
          } 
          })
        setSelectedList(list)
      } else {
        setSelectedList([...selectedList, _id])
      }
    }

    console.log(selectedList)
  
    let food = list.map((item) => {
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

    try {
      return (
      <Form method='POST' action={`https://grocery-list-app-4y2gz122s-azimmerman17.vercel.app/user/${currentUser._id}/food?_method=PUT&food=${selectedList}`}>
        <Button variant="danger" type="submit" >
          Remove Selected Items
        </Button>
        {food}
      </Form>
      )
    } catch (error) {
      
    }
}

export default GroceryList