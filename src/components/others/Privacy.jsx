import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import parse from 'html-react-parser';
import ApiUrl from '../../Api/ApiUrl';

class Privacy extends Component {
  constructor(){
    super();
    this.state = {
      privacy : '',
      loaderDiv:"",
      mainDiv:"d-none"
    }
  }

  componentDidMount(){
    axios.get(ApiUrl.AllfooterSite)
  .then(response => {
    // handle success
    let StatusCode = response.status;

    if(StatusCode==200){
      let JsonData = response.data[0]['privacy'];
      this.setState({privacy :JsonData, loaderDiv:"d-none",
      mainDiv:""})
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }
  render() {
    return (
      <Fragment>
        <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
            <div className={this.state.loaderDiv}>
            <div class="ph-item">
                <div class="ph-col-12">
                    
                    <div class="ph-row">
                        
                        
                        <div class="ph-col-4"></div>
                        <div class="ph-col-8 empty"></div>
                        <div class="ph-col-6"></div>
                        <div class="ph-col-6 empty"></div>
                        <div class="ph-col-12"></div>
                        <div class="ph-col-12"></div>
                        <div class="ph-col-12"></div>
                        <div class="ph-col-12"></div>
                    </div>
                </div>
            </div>
            <div class="ph-item">
                <div class="ph-col-12">
                    
                    <div class="ph-row">
                        
                        
                        <div class="ph-col-4"></div>
                        <div class="ph-col-8 empty"></div>
                        <div class="ph-col-6"></div>
                        <div class="ph-col-6 empty"></div>
                        <div class="ph-col-12"></div>
                        <div class="ph-col-12"></div>
                        <div class="ph-col-12"></div>
                        <div class="ph-col-12"></div>
                    </div>
                </div>
            </div>
         </div> 

         <div className={this.state.mainDiv}>
          <h4 className="section-title-login">Privacy Page </h4>
          <p className="section-title-contact">
          {parse(this.state.privacy)}
          </p>
        </div>  
      


                         </Col>
                    </Row>
               </Container>
      </Fragment>
    )
  }
}

export default Privacy