import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col } from "react-bootstrap";
import { TbAlarmAverage } from "react-icons/tb";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";



// const ExampleCarouselImage = ({ src, alt }) => (
//     <img className="d-block w-100" src={src} alt={alt} />
//   );

const Home = () => {
  const nav=useNavigate()


  const navToRecipes=()=>{
    nav("/recipes") 
  }



  return (
    <div >
      <Carousel data-bs-theme="white" id='home'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.squarespace-cdn.com/content/v1/5abbec19f8370a187f55fec9/1615042481635-VKCO3BRG0JZW9NP13DDZ/Green+Kitchen+-+Food+Photography+%26+Food+Styling+by+Alinea+Collective-12.jpg?format=2500w"
            alt="First slide"
            style={{ maxHeight: '650px' }}
          />
          <Carousel.Caption>
            <h5> Vegitarian Food </h5>
            <p>All Types Of Veg Items Available</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.greatbigphotographyworld.com/wp-content/uploads/2022/04/food-photographer-ideas.jpg"
            alt="Second slide"
            style={{ maxHeight: '650px' }}
          />
          <Carousel.Caption>
            <h5>Continental food</h5>
            <p>continental Food Available Here</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i1.adis.ws/i/canon/pro-sid-ali-food-photography-trends-2_e5830f8b14d841ecab4f62b476497935?$media-collection-full-dt-jpg$"
            alt="Third slide"
            style={{ maxHeight: '650px' }}
          />
          <Carousel.Caption>
            <h5>Non-Vegitarian Food </h5>
            <p>
              All Types ofNon-vegitarian food available here
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <div>

        <h2 >-----------------------------------------------             Indian Food         -------------------------------------------------------</h2>
        <CardGroup style={{ gap: '20px' }}>
          <Card>
            <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/02/84/46/89/360_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg" />
            <Card.Body>
              <Card.Title>veg-nonveg combo</Card.Title>
              <Card.Text>
                This is veg and non veg combo with 30% off
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/02/75/39/23/240_F_275392381_9upAWW5Rdsa4UE0CV6gRu2CwUETjzbKy.jpg" />
            <Card.Body>
              <Card.Title>veg combo with desert</Card.Title>
              <Card.Text>
                This is veg combo click here to order
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--eiYxnqvQSZWIpV8reQix67vOzvsvL_R9A&s" />
            <Card.Body>
              <Card.Title>non veg combo</Card.Title>
              <Card.Text>
                THis is non-veg combo with chicken mutton and fish
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>

      </div>
      <div>
       <Accordion defaultActiveKey="0" id='about'>
      <Accordion.Item eventKey="0">
        <Accordion.Header><strong>About Us</strong></Accordion.Header>
        <Accordion.Body>
        Welcome to food-app, your ultimate food companion! Whether you're craving a quick bite, planning a family dinner, or exploring new cuisines, our app brings your favorite meals right to your fingertips.
We partner with top local restaurants, cloud kitchens, and food makers to ensure you have access to the freshest, most delicious food—delivered fast and hot, every time. From breakfast to late-night snacks, we've got you covered.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><strong>Why choose Food-app?</strong></Accordion.Header>
        <Accordion.Body>
      <h6>  🍕 Wide Range of Choices: Thousands of dishes from your favorite restaurants.</h6>
      <h6>🚀 Fast Delivery: Real-time tracking and speedy service.</h6>
      <h6>💳 Easy Payments: Multiple secure payment options.</h6>
      <h6>⭐ Personalized Experience: Smart suggestions based on your taste.</h6>
      <h6>🌱 Special Diets: Options for vegan, keto, gluten-free, and more. </h6>



        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
      </div>
      <div>
      <footer className="bg-dark text-light py-5" id="contact">
            <Container>
                <Row className="text-center">
                    <Col className="d-flex flex-column align-items-center" style={{ display: "flex" }}>
                        <div className="d-flex align-items-center">
                            <TbAlarmAverage size={40} className="me-2" />
                            <h3 className="mb-0">Food-app</h3>
                        </div>
                    </Col>
                    <Col>
                        <p className="mt-2" style={{ maxWidth: "500px" }}>
                        food-app, your ultimate food companion! Whether you're craving a quick bite, planning a family dinner.
                        </p>
                    </Col>
                </Row>

                <Row className="text-center" style={{ margin: "30px 0" }}>
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p>We partner with top local restaurants, cloud kitchens, and food makers to ensure you have access to the freshest, most delicious food—delivered fast and hot. every time..</p>
                    </Col>
                    <Col md={4}>
                        <h5>Our Services</h5>
                        <p>🍕 Wide Range of Choices: Thousands of dishes from your favorite restaurants.</p>
                        <p>🚀 Fast Delivery: Real-time tracking and speedy service.</p>
                        <p>💳 Easy Payments: Multiple secure payment options.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <p>Email: support@foodapp.com</p>
                        <p>Phone: +91 6305352050</p>
                    </Col>
                </Row>

                <Row className="text-center mt-3">
                    <Col>
                        <h5>Follow Us</h5>
                        <div className="d-flex justify-content-center">
                            <a href="#" className="text-light me-3"><FaFacebook size={25} /></a>
                            <a href="#" className="text-light me-3"><FaTwitter size={25} /></a>
                            <a href="#" className="text-light me-3"><FaInstagram size={25} /></a>
                            <a href="#" className="text-light"><FaLinkedin size={25} /></a>
                        </div>
                    </Col>
                </Row>

                <Row className="text-center mt-4">
                    <Col>
                        <h4 className="mb-0">&copy; 2025 FOOD-APP. All Rights Reserved.</h4>
                    </Col>
                </Row>
            </Container>
        </footer>
      </div>
    </div>
  )
}



export default Home
