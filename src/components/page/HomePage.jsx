import React, { Component, Fragment } from 'react'
import NevMenudesktop from '../common/NevMenuDesktop'
import Categorys from '../home/Categorys'
import Collection from '../home/Collection'
import FeaturesProducts from '../home/FeaturesProducts'
import HomeTop from '../home/HomeTop'
import NewArrival from '../home/NewArrival'
import NevMenumobile from '../common/NevMenuMobile'
import HomeTopMobile from '../home/HomeTopMobile'
import FooterDesktop from '../common/FooterDesktop'
import Footermobile from '../common/FooterMobile'
import ApiUrl from '../../Api/ApiUrl'
import axios from 'axios';


 class HomePage extends Component {
  componentDidMount(){
    window.scroll(0,0)
    this.GetVisitorDetails();
}

GetVisitorDetails = () =>{
  axios.get(ApiUrl.VisitorDetails).then().catch();
}
  render() {
    return (
      <Fragment>
              <div className="Desktop">
                    <NevMenudesktop/>
                    <HomeTop />
                </div>

                <div className="Mobile">
                    <NevMenumobile/>  
                    <HomeTopMobile/>
                </div> 
                <FeaturesProducts/>
                <NewArrival/>
                <Categorys/>
                <Collection/>
                <div className="Desktop">
                <FooterDesktop/>
                </div>
                <div className="Mobile">
                    <Footermobile/>
                </div>
              
      </Fragment>
    )
  }
}

export default HomePage