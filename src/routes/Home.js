import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.js'
import logo from '../image/logo2.svg'
import Footer from "../components/Footer.js"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import '../import/css/default.css'


const Home = () => {
  
  return (
    <>
      <div>

        <Navbar />
        <section>
          <Container className="mt-5">
            <div className="d-sm-flex align-items-center">
              <div>
                <h1>Number System Converter</h1>
                <p>lorem ipsum lskjfalsdk jlasdkfjlaskd jflaskdfjlaskd jflaskdjf lkasdjflka jsdlkf jasldkfj laskdasldfkjasl kjfasldk fjlasdk jflaskdjf lkasdjf lkasdjf lkasjdfl kjasdlkf jasldkf jlaskdfj klasdjf ksadjfl ksdf</p>
              </div>
              <div>
                <Image src={logo} className="img" fluid></Image>
              </div>

            </div>

          </Container>
        </section>
        <section>
          <Container>
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <section>
          <Container></Container>
        </section>
        <Footer />
      </div>
      
    </>
  )
}

export default Home