import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ApiUrl from '../../Api/ApiUrl';

import MegaMenu from './MegaMenu'
import NewHomeSlider from './NewHomeSlider'
import axios from 'axios';
import SliderLoding from '../PlaceholderLoding/SliderLoding';

 class HomeTop extends Component {
  constructor(){
    super();
    this.state = {
      ManuData:[],
      Slider : [],
      loaderDiv:"",
      mainDiv:"d-none"
    }
  }
  componentDidMount(){
    //CAtegoryDetails Api
    axios.get(ApiUrl.CategoryDetails)
  .then(response => {
    
   this.setState({ManuData :response.data });

    
  })
  .catch(function (error) {
    
  })

  //Slider Api
  axios.get(ApiUrl.AllSlider)
  .then(response => {
    
   this.setState({Slider :response.data , loaderDiv:"d-none",
   mainDiv:""});
   
  })
  .catch(function (error) {
    
  })
  }
  
  render() {
    return (
      <Fragment>
        <SliderLoding data = {this.state.loaderDiv}/>

        <div className={this.state.mainDiv}>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
            <Row>
                <Col lg={3} md={3} sm={12}>
                    <MegaMenu data={this.state.ManuData}/>
                </Col>

                <Col lg={9} md={9} sm={12}>
                    <NewHomeSlider Data = {this.state.Slider}/>
                </Col>
            </Row>
        </Container>
        </div>
      </Fragment>
    )
  }
}

export default HomeTop