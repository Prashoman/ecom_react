import React, { Component , Fragment } from 'react'
import { Container, Row , Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ApiUrl from '../../Api/ApiUrl'
import Appstore from '../../asset/images/apple.png'
import Google from '../../asset/images/google.png'
import axios from 'axios'
import parse from 'html-react-parser';

 class FooterDesktop extends Component {
  constructor(){
    super()
    this.state = {
      address : '',
      andraid_link : '',
      ios_link : '',
      facebook_link : '',
      instragam_link : '',
      twitter_link : '',
      copy_right : '',
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
      let JsonData = response.data[0];
      this.setState({
      address : JsonData['address'],
      andraid_link : JsonData['andraid_link'],
      ios_link : JsonData['ios_link'],
      facebook_link : JsonData['facebook_link'],
      instragam_link : JsonData['instragam_link'],
      twitter_link : JsonData['twitter_link'],
      copy_right : JsonData['copy_right'],
      loaderDiv:"d-none",
      mainDiv:""
      })
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
        <div  className="footerback m-0 mt-5 pt-3 shadow-sm">
        <Container>
          <Row>
            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>

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

                     </div>
                  </div>
                </div>


              </div >

              <div className={this.state.mainDiv}>
                <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
                <p>{parse(this.state.address)}
                </p>
              </div>
            
               <h5 className="footer-menu-title">SOCIAL LINK</h5>
               <a href={this.state.facebook_link} target="_blank"><i className="fab m-1 h4 fa-facebook"></i></a>
               <a href={this.state.instragam_link} target="_blank"><i className="fab m-1 h4 fa-instagram"></i></a>
               <a href={this.state.twitter_link} target="_blank"><i className="fab m-1 h4 fa-twitter"></i></a>
            </Col>
            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
            <h5 className="footer-menu-title">THE COMPANY</h5>
            <Link to="/about" className="footer-link"> About Us</Link><br></br>
          <Link to="/" className="footer-link"> Company Profile</Link><br></br>
          <Link to="/contact-us" className="footer-link"> Contact Us</Link><br></br>

            </Col>

            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
            <h5 className="footer-menu-title">MORE INFO</h5>
            <Link to="/purchase" className="footer-link">How To Purchase</Link><br></br>
          <Link to="/privacy" className="footer-link"> Privacy Policy</Link><br></br>
          <Link to="/refund" className="footer-link"> Refund Policy </Link><br></br>
            </Col>

            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
            <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
            <a><img href={this.state.ios_link} src={Google}  /></a><br></br>
          <a><img href={this.state.andraid_link} className="mt-2" src={Appstore}  /></a><br></br>
          Change Your Language <br></br>
          <div id="google_translate_element">  </div>
            </Col>
          </Row>
        </Container>

        <Container fluid={true} className="text-center m-0 p-3 bg-dark">
                    
                         <Row>
                                <h6 className="text-white">{parse(this.state.copy_right)}</h6>
                         </Row>
                   
        </Container> 

        </div>
      </Fragment>
    )
  }
}

export default FooterDesktop
