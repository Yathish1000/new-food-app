import React, { useEffect, useState } from 'react'
import { DataBase } from './firebase'
import { useLocation } from 'react-router-dom';
import { get, ref, remove } from 'firebase/database';
import { Card, Button } from 'react-bootstrap'



const Addtocart = () => {

  const [cart, setCart] = useState([])

  const loc = useLocation()
  // console.log(loc);
  const loginid = loc.state.id

  useEffect(() => {
    const GetData = async () => {
      try {
        const data = await get(ref(DataBase, `Data/users/${loginid}/addtocart`))
        // console.log(data.val());

        const FinalData = Object.values(data.val())
        console.log(FinalData);

        setCart(FinalData)

        useEffect(() => {
          console.log(cart);
        }, [cart])

      }
      catch (err) {
        console.log(err);

      }
    }

    GetData()



  }, [loginid])

  const removeItem = async (item) => {
    console.log(item);

    try{
      await remove(ref(DataBase, `Data/users/${loginid}/addtocart/${item.name}`))
    const allData = await get(ref(DataBase, `Data/users/${loginid}/addtocart`))
    if (allData.exists()) {
      setCart(Object.values(allData.val()));
    } else {
      console.log("No events found");
      setCart([]);
    }
    }
    catch(err){
      console.log(err);
      
    }
  }

  


    return (
      <div>
        {
          cart.map((x) => {
            return (
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={x.image} width={200} />
                <Card.Body>
                  <Card.Title>{x.name}</Card.Title>
                  <Card.Text><strong>Meal Type :</strong> {x.mealType}</Card.Text>
                  <Button variant="danger" onClick={() => { removeItem(x) }}>removeItem</Button>
                </Card.Body>
              </Card>
            )
          })
        }
      </div>
    )
  }



  export default Addtocart