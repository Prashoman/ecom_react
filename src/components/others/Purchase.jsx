import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import axios from 'axios'
import ApiUrl from '../../Api/ApiUrl'
import parse from 'html-react-parser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';


 class Purchase extends Component {
  constructor(){
    super()
    this.state = {
      puchase : '',
      loaderDiv:"",
      mainDiv:"d-none"
    }
  }

  componentDidMount(){

    let PurchaseFooterSite = sessionStorage.getItem('AllfooterSite');

      if(PurchaseFooterSite == null){
          axios.get(ApiUrl.AllfooterSite)
          .then(response => {
        // handle success
            let StatusCode = response.status;

            if(StatusCode==200){
              let JsonData = response.data[0]['purchase'];
              this.setState({puchase :JsonData, loaderDiv:"d-none",
              mainDiv:""})
              sessionStorage.setItem('PurchaseFooterSite',JsonData)
            }
          })
          .catch(function (error) {
            // handle error
            toast.error('Something Went Wrong!', {
              position: "bottom-center",
              
              });
          })
      }else{
        toast.error('Something Went Wrong!', {
          position: "bottom-center",
          
          });
      }
    
  }
  render() {
    return (
      <Fragment>
        <Container>
        <div className='brodcamp'>
        <Breadcrumb>
          <Breadcrumb.Item ><Link to="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <Link to="/purchase">Purchase</Link>
          </Breadcrumb.Item>
          
        </Breadcrumb>
        </div>
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
          <h4 className="section-title-login">Purchase Page </h4>
          <p className="section-title-contact">
            {parse(this.state.puchase)}
          </p>
        </div> 
     


                         </Col>
                    </Row>
               </Container>
               <ToastContainer />
      </Fragment>
    )
  }
}

export default Purchase