import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import axios from 'axios'
import { ref, set } from 'firebase/database'
import { DataBase } from './firebase'
import { FaBookmark } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";


const Recipes = () => {
  const [data, setData] = useState([])

  const loc = useLocation()
  // console.log(loc);


  const personData = loc.state.personData


  const LoggedInUserId = loc.state.personData.id

  useEffect(() => {
    axios.get('https://dummyjson.com/recipes')
      .then(res => (setData(res.data.recipes)))
      .catch(err => (console.log(err)))
  }, [])

  // console.log(data);  

  const Addtocart = async (item) => {

    try {
      await set(ref(DataBase, `Data/users/${LoggedInUserId}/addtocart/${item.name}`), {
        name:item.name,
        image: item.image,
        mealType: item.mealType,
        caloriesPerServing: item.caloriesPerServing,
        cookTimeMinutes: item.cookTimeMinutes,
        cuisine: item.cuisine,
        difficulty: item.difficulty,
        id: item.id,
        ingredients: item.ingredients,
        instructions: item.instructions,
        prepTimeMinutes: item.prepTimeMinutes,
        rating: item.rating,
      })
      alert("done")
    }
    catch (err) {
      console.log(err);

    }
  }


  const Favorites = async (item) => {

    try {
      await set(ref(DataBase, `Data/users/${LoggedInUserId}/Favorites/${item.name}`), {
        name:item.name,
        image: item.image,
        mealType: item.mealType,
        caloriesPerServing: item.caloriesPerServing,
        cookTimeMinutes: item.cookTimeMinutes,
        cuisine: item.cuisine,
        difficulty: item.difficulty,
        id: item.id,
        ingredients: item.ingredients,
        instructions: item.instructions,
        prepTimeMinutes: item.prepTimeMinutes,
        rating: item.rating,
      })
      alert("done")
    }
    catch (err) {
      console.log(err);

    }
  }


  return (
    <>
        <Link to="/addtocart" state={personData} 
        style={{background:'orange' ,
          color:'black',
          textDecoration:'none',
          fontWeight:'bold',
          padding:'5px 5px',
          border:'2px black solid',
          margin:'30px',
          }} >Cart <IoCartSharp size={25} /> </Link>
        <Link to="/favorites" state={personData}
         style={{background:'orange' ,
          color:'black',
          textDecoration:'none',
          fontWeight:'bold',
          padding:'5px 5px',
          border:'2px black solid'}}>Favorites <FaBookmark size={20}/></Link>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: "5px" }} >
        {/* <Link to='/addtocart' state={{ PersonData }}>addtocart</Link> */}

        {
          data.map((x) => {
            return (
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={x.image} width={200} />
                <Card.Body>
                  <Card.Title>{x.name}</Card.Title>
                  <Card.Text><strong>Meal Type :</strong> {x.mealType}</Card.Text>
                  <Button variant="primary" style={{ marginRight: '5px' }} onClick={() => { Addtocart(x) }} >add to cart</Button>
                  <Button variant="primary" onClick={() => { Favorites(x) }}>save</Button>
                </Card.Body>
              </Card>
            )
          })
        }
      </div >
    </>
  )
}



export default Recipes
