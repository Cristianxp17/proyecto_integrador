import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-Tourist.png'

const NewsLetter = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className='newletter_content'>
              <h2>Suscribe now to get useful travel information</h2>
              <div className='newlwtter_input'>
                <input type='email' placeholder='Enter your email' />
                <button className='btn newleter_btn'></button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default NewsLetter
