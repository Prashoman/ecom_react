import React, { Component } from 'react'
import {Navbar,Container,Row,Col,Button} from 'react-bootstrap'
import Logo from '../../asset/images/easyshop.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
 import { Navigate } from 'react-router-dom';
 class NevMenudesktop extends Component {
  constructor(){
    super();
    this.state = {
      SearchData : '',
      SearchDataBycondition : false
    }
    this.SerchValue = this.SerchValue.bind(this);
    this.ClickData = this.ClickData.bind(this);
    this.Searchkeyredirect = this.Searchkeyredirect.bind(this);
  }
  SerchValue(event){
    let value = event.target.value;
    this.setState({
      SearchData : value
    })
  }
  ClickData(){
    if(this.state.SearchData.length>=2){
      
      this.setState({
        SearchDataBycondition : true
      })
      
    }
  }

  Searchkeyredirect(){
   
    if(this.state.SearchDataBycondition == true){
      
      return  <Navigate to={'/SearchProduct/'+this.state.SearchData} />
    }
  }
  render() {
    return (
      <div className="TopSectionDown">
      <Navbar fixed='top' bg="light">
        <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
         <Row>
            <Col lg={4} md={4} sm={12} xs={12} >
            <Link to="/"><img className="nav-logo" src={Logo} /></Link>
            </Col>
            <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                   <div className="input-group w-100">
                   <input onChange={this.SerchValue} type="text" className="form-control" />
                   <Button onClick={this.ClickData} type="button" className="btn site-btn"><i className="fa fa-search"> </i> 
                   </Button>
                   </div>
              </Col>
              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
              <Link to="/faverate-item" className="btn"><i className="fa h4 fa-heart"></i><sup><span className="badge text-white bg-danger">3</span></sup>                  
                   </Link>
                   <Link to="/notification" className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge text-white bg-danger">5</span></sup>                  
                   </Link>
                   <a className="btn"><i className="fa h4 fa-mobile-alt"></i></a>
                   <Link to="/login" className="h4 btn">LOGIN</Link>

                   <Link to="/cart-items" className="cart-btn"><i className="fa fa-shopping-cart"></i> 3 Items </Link>
              </Col>

         </Row>
        
         {this.Searchkeyredirect()}
        
        </Container>

      </Navbar>
      </div>
    )
  }
}

export default NevMenudesktop