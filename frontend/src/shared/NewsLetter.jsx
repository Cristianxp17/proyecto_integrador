import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const NewsLetter = () => {
  return (
    <section className='newsletter'>
      <Container>
        <Row>
          <Col lg="6">
            <div className='newletter__content'>
              <h2>Suscribe now to get useful travel information</h2>
              <div className='newlwtter_input'>
                <input type='email' placeholder='Enter your email' />
                <button className='btn newleter_btn'>Suscribe</button>
              </div>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea animi officiis modi provident aperiam impedit?</p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default NewsLetter
