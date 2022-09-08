import React, { Component, Fragment } from 'react'
import {Navbar,Container, Row, Col,Button} from 'react-bootstrap';
import Logo from '../../asset/images/easyshop.png'
import {Link} from "react-router-dom";
import MegaMenuMobile from '../home/MegaMenuMobile';


 class NevMenumobile extends Component {
  constructor(){
    super();
    this.state={
         SideNavState: "sideNavClose",
         ContentOverState: "ContentOverlayClose"
    }
}


MenuBarClickHandler=()=>{
    this.SideNavOpenClose();
}

ContentOverlayClickHandler=()=>{
    this.SideNavOpenClose();
}


SideNavOpenClose=()=>{
    let SideNavState = this.state.SideNavState;
    let ContentOverState = this.state.ContentOverState;
    if(SideNavState==="sideNavOpen"){
         this.setState({SideNavState:"sideNavClose",ContentOverState:"ContentOverlayClose"})

    }
    else{
         this.setState({SideNavState:"sideNavOpen",ContentOverState:"ContentOverlayOpen"})
    }


  }
  render() {
    return (
      <Fragment>
<div className="TopSectionDown">


<Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
     <Row>
          <Col lg={4} md={4} sm={12} xs={12}>

          <Button onClick={this.MenuBarClickHandler} className="btn"><i className="fa fa-bars"></i>  </Button>

          <Link to="/"> <img className="nav-logo" src={Logo} /> </Link>

          <Button  className="cart-btn"><i className="fa fa-shopping-cart"></i> 3 Items </Button>
          <a className="btn mt-2"><i className="fa h4 fa-mobile-alt"></i><Link to="/login" className="h4 btn">LOGIN</Link></a>
                   
          </Col> 

     </Row>

</Container>

          <div className={this.state.SideNavState}>
                <MegaMenuMobile/>
          </div>

           
           <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>
           </div>




</div>
      </Fragment>
    )
  }
}

export default NevMenumobile