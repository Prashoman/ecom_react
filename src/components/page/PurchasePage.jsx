import React, { Component, Fragment } from 'react'
import NevMenudesktop from '../common/NevMenuDesktop'

import NevMenumobile from '../common/NevMenuMobile'

import FooterDesktop from '../common/FooterDesktop'
import Footermobile from '../common/FooterMobile'
import UserLogin from '../common/UserLogin'
import Purchase from '../others/Purchase'

 class PurchasePage extends Component {
    componentDidMount(){
        window.scroll(0,0)
   }
  render() {
    return (
     <Fragment>
        <div className="Desktop">
                    <NevMenudesktop/>
                    
                </div>

                <div className="Mobile">
                    <NevMenumobile/>  
                    
                </div> 
                <Purchase/>
                
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

export default PurchasePage