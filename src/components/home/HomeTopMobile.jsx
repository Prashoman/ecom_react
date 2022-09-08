import React, { Component, Fragment } from 'react'

import {Container,Row,Col} from 'react-bootstrap'
import NewHomeSlider from './NewHomeSlider'

 class HomeTopMobile extends Component {
  render() {
    return (
      <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
                         <Row className="p-0 m-0 overflow-hidden"> 
                              <Col lg={12} md={12} sm={12}> 
                              <NewHomeSlider/>
                              </Col>
                         </Row>
                    </Container>
             
      </Fragment>
    )
  }
}

export default HomeTopMobile