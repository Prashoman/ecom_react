import React, { Component, Fragment  } from 'react'
import ApiUrl from '../../Api/ApiUrl';
import withRouter from '../hoc/WithRouter'
import axios from 'axios';
import FooterDesktop from '../common/FooterDesktop'
import Footermobile from '../common/FooterMobile'
import NevMenudesktop from '../common/NevMenuDesktop'


import NevMenumobile from '../common/NevMenuMobile'
import SearchProduct from '../ProductDetails/SearchProduct';

class SearchPage extends Component {
    constructor(props){
        super();
         //console.log(props.params.searchkey)
        this.state = {
         Searchkey : props.params.searchkey,
         ProductData : []
        }
         
   
       }
       componentDidMount(){
         axios.get(ApiUrl.SearchProduct(this.state.Searchkey)).then(response => {
            
           this.setState({ProductData :response.data });
        //    console.log(response.data)
           
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
                
              <SearchProduct search-data = {this.state.Searchkey} product_data = {this.state.ProductData}/>
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

export default withRouter(SearchPage)