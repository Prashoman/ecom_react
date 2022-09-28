import React, { Component, Fragment } from 'react'

import {Container,Row,Col} from 'react-bootstrap'
import ApiUrl from '../../Api/ApiUrl'
import NewHomeSlider from './NewHomeSlider'
import axios from 'axios'
 class HomeTopMobile extends Component {
  constructor(){
    super()
    this.state = {
      Slider : []
    }
  }

  componentDidMount(){
    axios.get(ApiUrl.AllSlider)
  .then(response => {
    
   this.setState({Slider :response.data });
    //console.log(this.state.Slider)
  })
  .catch(function (error) {
    
  })
  }
  render() {
    return (
      <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
                         <Row className="p-0 m-0 overflow-hidden"> 
                              <Col lg={12} md={12} sm={12}> 
                              <NewHomeSlider Data = {this.state.Slider}/>
                              </Col>
                         </Row>
                    </Container>
             
      </Fragment>
    )
  }
}

export default HomeTopMobile