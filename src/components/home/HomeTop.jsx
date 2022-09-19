import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ApiUrl from '../../Api/ApiUrl';

import MegaMenu from './MegaMenu'
import NewHomeSlider from './NewHomeSlider'
import axios from 'axios';

 class HomeTop extends Component {
  constructor(){
    super();
    this.state = {
      ManuData:[]
    }
  }
  componentDidMount(){
    axios.get(ApiUrl.CategoryDetails)
  .then(response => {
    
   this.setState({ManuData :response.data });

    
  })
  .catch(function (error) {
    
  })
  }
  
  render() {
    return (
      <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
            <Row>
                <Col lg={3} md={3} sm={12}>
                    <MegaMenu data={this.state.ManuData}/>
                </Col>

                <Col lg={9} md={9} sm={12}>
                    <NewHomeSlider/>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default HomeTop