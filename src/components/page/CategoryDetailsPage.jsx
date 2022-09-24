import React, { Component, Fragment } from 'react'
import NevMenudesktop from '../common/NevMenuDesktop'
import withRouter from '../hoc/WithRouter'

import NevMenumobile from '../common/NevMenuMobile'

import FooterDesktop from '../common/FooterDesktop'
import Footermobile from '../common/FooterMobile'

import Category from '../ProductDetails/Category'
import ApiUrl from '../../Api/ApiUrl'
import axios from 'axios'


class CategoryDetailsPage extends Component {
  // static contextType = DataContext;
    constructor(props){
     super();
    //  console.log(props.params.category)
     this.state = {
      Category : props.params.category,
      ProductData : []
     }
      

    }
    componentDidMount(){
      axios.get(ApiUrl.AllProductCategory(this.state.Category)).then(response => {
        // console.log(response.data)
        this.setState({ProductData :response.data });
  
        
        })
        .catch(function (error) {
        
        })
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
                
              <Category CategoryName = {this.state.Category} ProductList = {this.state.ProductData}/>
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

export default withRouter(CategoryDetailsPage)