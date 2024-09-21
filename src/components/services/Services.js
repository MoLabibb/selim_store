import React from 'react'
import './Services.css'
import { Container, Row, Col } from 'react-bootstrap'
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdSpeed } from "react-icons/md";
import { GiBackForth } from "react-icons/gi";

function Services() {
  return(
    <div>
 <Container className='services'>
      <Row className='row'>
        <Col xs={12} md={4} className='col'>
          <div className='service'>
            <div className='service__icon'><MdOutlineLocalShipping /></div>
            <h5 className='service__title'>Free Shipping</h5>
            <p className='service__summary'>It’s content strategy gone awry right from the start are wasn’t.</p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className='service second'>
            <div className='service__icon'><MdSpeed /></div>
            <h5 className='service__title'>Fast Delivery</h5>
            <p className='service__summary'>It’s like saying you’re a bad designer, use less bold text, italics.</p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className='service'>
            <div className='service__icon'><GiBackForth /></div>
            <h5 className='service__title'>Back Guarantee</h5>
            <p className='service__summary'>It’s content strategy gone awry right from the start are wasn’t.</p>
          </div>
        </Col>
      </Row>
    </Container>
    </div>

  )
}

export default Services